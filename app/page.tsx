import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { products } from "@/lib/products"

export default function Home() {
  // Get the first two products for the featured section
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Here you&apos;ll heal,
                  <br /> grow, and thrive 🦋
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg py-5">
                  Digital tools designed to help you
                  <br />
                  organize your life, boost productivity,
                  <br />
                  and nurture your well-being.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">About Glow</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover our most popular tools <br />
                  to enhance your daily life.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-8">
              {featuredProducts.map((product) => (
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
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{product.category[0]}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-blue-600">${product.price}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full hover:bg-blue-700 hover:text-blue-50 border-blue-700 text-bold text-blue-700"
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Get Access
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700"
              >
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials section is commented out in the original code */}
      </main>
    </div>
  )
}

const testimonials = [
  {
    text: "The daily planner has completely transformed how I organize my day. I feel more productive and less stressed!",
    name: "Sarah Johnson",
    title: "Marketing Manager",
  },
  {
    text: "I love the self-care calendar. It reminds me to take time for myself every day, which has been life-changing.",
    name: "Emily Chen",
    title: "Graphic Designer",
  },
]

