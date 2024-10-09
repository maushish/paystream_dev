use anchor_lang::prelude::*;

declare_id!("YourProgramIDHere");

#[program]
pub mod escrow_program {
    use super::*;

    pub fn initialize_escrow(
        ctx: Context<InitializeEscrow>,
        receiver: Pubkey,
        amount: u64,
        duration: u64,
    ) -> Result<()> {
        let escrow_account = &mut ctx.accounts.escrow_account;
        
        escrow_account.sender = *ctx.accounts.sender.key;
        escrow_account.receiver = receiver;
        escrow_account.amount = amount;
        escrow_account.start_time = Clock::get()?.unix_timestamp as u64;
        escrow_account.duration = duration;
        escrow_account.withdrawn_amount = 0;

        **ctx.accounts.escrow_account.to_account_info().try_borrow_mut_lamports()? += amount;
        **ctx.accounts.sender.to_account_info().try_borrow_mut_lamports()? -= amount;

        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>) -> Result<()> {
        let escrow_account = &mut ctx.accounts.escrow_account;
        let current_time = Clock::get()?.unix_timestamp as u64;

        if current_time < escrow_account.start_time {
            return err!(EscrowError::EscrowLocked);
        }

        let elapsed_time = current_time.checked_sub(escrow_account.start_time).unwrap_or(0);
        let total_time = escrow_account.duration;
        let total_amount = escrow_account.amount;
        let withdrawable_amount = (total_amount * elapsed_time / total_time).min(total_amount);
        let amount_to_transfer = withdrawable_amount.checked_sub(escrow_account.withdrawn_amount).unwrap_or(0);

        if amount_to_transfer > 0 {
            **ctx.accounts.receiver.to_account_info().try_borrow_mut_lamports()? += amount_to_transfer;
            **ctx.accounts.escrow_account.to_account_info().try_borrow_mut_lamports()? -= amount_to_transfer;

            escrow_account.withdrawn_amount += amount_to_transfer;
        }

        Ok(())
    }

    pub fn cancel_escrow(ctx: Context<CancelEscrow>) -> Result<()> {
        let escrow_account = &mut ctx.accounts.escrow_account;
        let current_time = Clock::get()?.unix_timestamp as u64;
        let elapsed_time = current_time.checked_sub(escrow_account.start_time).unwrap_or(0);
        let total_time = escrow_account.duration;
        let total_amount = escrow_account.amount;
        let withdrawable_amount = (total_amount * elapsed_time / total_time).min(total_amount);
        let remaining_amount = total_amount.checked_sub(withdrawable_amount).unwrap_or(0);

        if remaining_amount > 0 {
            **ctx.accounts.sender.to_account_info().try_borrow_mut_lamports()? += remaining_amount;
            **ctx.accounts.escrow_account.to_account_info().try_borrow_mut_lamports()? -= remaining_amount;
        }

        escrow_account.close(ctx.accounts.sender.to_account_info())?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeEscrow<'info> {
    #[account(mut)]
    pub sender: Signer<'info>,
    #[account(init, payer = sender, space = 8 + 8 * 5)]
    pub escrow_account: Account<'info, EscrowAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut)]
    pub receiver: Signer<'info>,
    #[account(mut, has_one = receiver)]
    pub escrow_account: Account<'info, EscrowAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CancelEscrow<'info> {
    #[account(mut)]
    pub sender: Signer<'info>,
    #[account(mut, has_one = sender)]
    pub escrow_account: Account<'info, EscrowAccount>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct EscrowAccount {
    pub sender: Pubkey,          // The sender who deposited the funds
    pub receiver: Pubkey,        // The receiver who will get the funds
    pub amount: u64,             // Total amount of SOL deposited
    pub start_time: u64,         // The start time of the stream
    pub duration: u64,           // Duration of the stream in seconds
    pub withdrawn_amount: u64,   // Amount that has already been withdrawn
}

#[error_code]
pub enum EscrowError {
    #[msg("Escrow is still locked, can't withdraw yet.")]
    EscrowLocked,
}
