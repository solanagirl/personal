"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Sparkles } from "lucide-react"

interface ProductShowcaseProps {
  selectedProduct: any
  recommendedVariants: any[]
}

export function ProductShowcase({ selectedProduct, recommendedVariants }: ProductShowcaseProps) {
  const [selectedVariant, setSelectedVariant] = useState(null)

  if (!selectedProduct) {
    return (
      <Card className="h-[600px] flex items-center justify-center shadow-2xl border-2 border-gray-200">
        <CardContent className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center">
            <Sparkles className="h-16 w-16 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Awaiting Mystical Guidance</h3>
          <p className="text-gray-500">
            Speak with Master Aldric to discover which magical artifact resonates with your soul.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-[600px] overflow-y-auto shadow-2xl border-2 border-purple-200">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <CardTitle className="flex items-center justify-between">
          <span>{selectedProduct.name}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{selectedProduct.rating}</span>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        {/* Product Image */}
        <div className="relative mb-6">
          <img
            src={selectedProduct.image || "/placeholder.svg"}
            alt={selectedProduct.name}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <Badge className="absolute top-2 right-2 bg-purple-600">Mystically Recommended</Badge>
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
        </div>

        {/* Recommended Variants */}
        {recommendedVariants.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
              Mystically Attuned Variants
            </h4>
            <div className="grid gap-3">
              {recommendedVariants.map((variant) => (
                <Card
                  key={variant.id}
                  className={`cursor-pointer transition-all hover:shadow-md`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{variant.name}</h5>
                        <p className="text-sm text-gray-600 mt-1">{variant.description}</p>
                        <div className="flex items-center mt-2 space-x-2">
                          {variant.attributes.map((attr: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {attr}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-bold text-lg text-purple-600">${variant.price}</p>
                        {variant.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">${variant.originalPrice}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        {selectedVariant && (
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Mystical Cart
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
