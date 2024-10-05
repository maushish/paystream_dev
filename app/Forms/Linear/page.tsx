"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Define the type for chart data
type ChartData = {
  second: number;
  value: number;
}

export default function TransactionForm() {
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("")
  const [duration, setDuration] = useState("")
  const [error, setError] = useState("")
  const [chartData, setChartData] = useState<ChartData[]>([])  // Explicitly typing chartData

  useEffect(() => {
    // Convert duration to a number before checking with isNaN
    const parsedDuration = Number(duration);

    if (duration && !isNaN(parsedDuration)) {
      const seconds = parseInt(duration, 10);  // Parse duration as an integer
      setChartData([
        { second: 0, value: 0 },
        { second: seconds, value: 1 }
      ])
    } else {
      setChartData([])
    }
  }, [duration])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!address || !amount || !duration) {
      setError("All fields are required.")
      return
    }

    if (parseFloat(amount) <= 0) {
      setError("Amount must be greater than 0.")
      return
    }

    if (parseInt(duration) <= 0) {
      setError("Duration must be greater than 0 seconds.")
      return
    }

    console.log("Form submitted:", { address, amount, duration: `${duration} seconds` })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-blue-100 transition-colors duration-200 p-4">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        <div className="w-full md:w-2/5">
          <Card className="bg-gray-900 border-blue-800 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-300">Linear Stream Graph</CardTitle>
              <CardDescription className="text-blue-200">y = x</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={chartData} 
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      stroke="#1e3a8a" 
                      opacity={0.4}
                      vertical={false}
                      horizontal={false}
                    />
                    <XAxis 
                      dataKey="second" 
                      type="number"
                      domain={[0, 'dataMax']}
                      axisLine={{ stroke: "#3b82f6", strokeWidth: 2 }}
                      tick={{ fill: "#93c5fd" }}
                      label={{ value: 'Seconds', position: 'insideBottomRight', offset: -5, fill: '#93c5fd' }}
                    />
                    <YAxis 
                      hide={true}
                      domain={[0, 1]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e3a8a",
                        borderColor: "#3b82f6",
                        borderRadius: "0.5rem",
                        color: "#bfdbfe"
                      }}
                      labelStyle={{ color: "#bfdbfe" }}
                      itemStyle={{ color: "#bfdbfe" }}
                      // Explicitly cast value to number
                      formatter={(value: any, name, props) => [`${((value as number) * parseFloat(amount || "0")).toFixed(2)}`, 'Amount']}
                      labelFormatter={(label) => `Second: ${label}`}
                    />

                    <Line 
                      type="linear"
                      dataKey="value" 
                      stroke="#60a5fa"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-3/5">
          <Card className="bg-gray-900 border-blue-800 rounded-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-blue-300">Stream Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-blue-200">Receiver's Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter receiver's address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-gray-800 border-blue-700 text-blue-100 placeholder-blue-400 focus:border-blue-500 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-blue-200">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-gray-800 border-blue-700 text-blue-100 placeholder-blue-400 focus:border-blue-500 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-blue-200">Duration (seconds)</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Enter duration in seconds"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="bg-gray-800 border-blue-700 text-blue-100 placeholder-blue-400 focus:border-blue-500 rounded-lg"
                  />
                </div>
                {error && (
                  <Alert variant="destructive" className="bg-red-900 border-red-800 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-red-400" />
                    <AlertDescription className="text-red-400">{error}</AlertDescription>
                  </Alert>
                )}
                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white rounded-lg"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
