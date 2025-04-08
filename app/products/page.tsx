"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

import { products } from "@/lib/products"

export default function ProductsPage() {
  const [category, setCategory] = useState("todos")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "todos" || product.category.some((cat) => cat.toLowerCase() === category.toLowerCase())
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Produtos</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Explore nossas ferramentas criadas <br />
                  para potencializar sua vida diária
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-6 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="w-full sm:w-auto">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="planners">Planners</SelectItem>
                    <SelectItem value="calendários">Calendários</SelectItem>
                    <SelectItem value="templates">Templates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-auto">
                <Input
                  type="search"
                  placeholder="Procurar produtos..."
                  className="w-full sm:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.slug}`} className="group">
                    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
                      <div className="aspect-video relative">
                        <Image
                          src={product.mainImage || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        {product.category.map((category, index) => (
                          <div
                            key={index}
                            className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 mb-2 mr-1"
                          >
                            {category}
                          </div>
                        ))}
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="font-bold text-blue-600">R${product.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium">Nenhum produto encontrado</h3>
                <p className="text-gray-500 mt-2">Tente ajustar seus filtros ou pesquisa</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

