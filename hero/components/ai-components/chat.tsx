"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Send, Sparkles } from "lucide-react"
import { mockProducts } from "@/lib/mock-data"
import { Avatar, Card, CardBody } from "@heroui/react"
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"

interface ChatProps {
  onProductRecommendation?: (product: any) => void
}

export function Chat({ onProductRecommendation }: ChatProps) {
  const [customerProfile, setCustomerProfile] = useState({})

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/solanaspirit",
    onFinish: (message) => {
      const content = message.content.toLowerCase()
      if (content.includes("wand") || content.includes("staff")) {
        const wandProduct = mockProducts.find((p) => p.name.toLowerCase().includes("wand"))
        if (wandProduct) {
          // onProductRecommendation(wandProduct)
        }
      }
      // …etc. (keep your existing recommendation logic)
    },
  })

  const quickQuestions = [
    "Show me your videos",
    "Where can I watch your stream?",
    " Show me a wallet integration guide",
    " Help me mint an NFT",
    "I need on-chain randomness",
    "Beginner in DeFi, where to start?",
  ]

  return (
    <Card className="h-[600px] flex flex-col shadow-2xl border-2 border-pink-200">
     

      <CardBody className="flex-1 flex flex-col p-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-8">
          {messages.length === 0 && (
            <div className="text-center py-8">
              <Sparkles className="h-12 w-12 text-pink-400 mx-auto mb-4 animate-pulse" />
              <div className="grid grid-cols-1 gap-2">
                {quickQuestions.map((q, i) => (
                  <Button
                    key={i}
                    variant="bordered"
                    size="sm"
                    onClick={() => handleInputChange({ target: { value: q } } as any)}
                    className="text-left justify-start hover:bg-pink-50"
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-teal-500 text-white"
                    : "bg-pink-50 text-pink-900 border border-pink-200"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Avatar className="h-6 w-6">
                    </Avatar>
                    <span className="text-sm font-medium">0xSolanaGirl</span>
                  </div>
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-pink-50 text-pink-900 p-3 rounded-lg border border-pink-200">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin h-4 w-4 border-2 border-pink-500 border-t-transparent rounded-full"></div>
                  <span>Consulting the Solana currents🌀🌀🌀</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t bg-gray-50">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me anything ✨ Solana ✨"
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading} className="bg-pink-500 hover:bg-pink-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
