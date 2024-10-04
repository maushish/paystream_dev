"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CenteredCardDemo() {
  const cards = [
    {
      author: "Manu Arora",
      readTime: "2 min read",
      title: "Author Card 1",
      description: "Card with Author avatar, complete name and time to read - most suitable for blogs.",
    },
    {
      author: "John Doe",
      readTime: "3 min read",
      title: "Author Card 2",
      description: "Another interesting article with a different author and read time.",
    },
    {
      author: "Jane Smith",
      readTime: "4 min read",
      title: "Author Card 3",
      description: "A third article to showcase multiple cards in the layout.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="flex flex-wrap justify-center gap-12">
        {cards.map((card, index) => (
          <div key={index} className="w-full sm:w-96 group/card">
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-[35rem] rounded-lg shadow-xl flex flex-col justify-between p-6",
                "bg-[url()] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src="/api/placeholder/100/100"
                  className="h-12 w-12 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-lg text-gray-50 relative z-10">
                    {card.author}
                  </p>
                  <p className="text-base text-gray-400">{card.readTime}</p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-2xl md:text-3xl text-gray-50 relative z-10">
                  {card.title}
                </h1>
                <p className="font-normal text-base text-gray-50 relative z-10 my-4">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}