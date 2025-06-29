"use client"

import { useState } from "react"
import { ShopHeader } from "@/components/shop-header"
import { Chat } from "@/components/chat"
import { ProductShowcase } from "@/components/product-showcase"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<[]>([])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <ShopHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Shopkeeper Chat */}
          <div>
            <Chat
              onProductRecommendation={setSelectedProduct}
            />
          </div>

          {/* Product Showcase */}
          <div>
          </div>
        </div>
      </main>
    </div>
  )
}
