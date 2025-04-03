import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Link
              href="/products"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:underline-offset-4 mb-6"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Products
            </Link>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 lg:mx-20 md:mx-10 items-start">
                <div className="relative overflow-hidden rounded-xl">
                <Carousel>
                  <CarouselContent>
                    {product?.images.map((item, index) => (
                      <CarouselItem key={index} className="flex p-0 items-center justify-center">
                            <Card>
                              <CardContent className="p-0">
                                <Image src={item} alt={product.name} className="object-cover"/>
                              </CardContent>
                            </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                  <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                </Carousel>
                </div>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.category.map((cat, index) => (
                      <div
                        key={index}
                        className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                  <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">{product.name}</h1>
                  <div className="flex flex-row gap-4 my-4">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 w-60">
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        Get Yours Today!
                      </a>
                    </Button>
                    <p className="text-xl font-bold text-blue-600 mt-1">${product.price}</p>
                  </div>
                </div>

                <p className="text-gray-500 md:text-lg text-justify">{product.description}</p>

                {product.quote && (
                  <div className="bg-blue-50 p-4 rounded-lg italic text-gray-600 border-l-4 border-blue-500">
                    {product.quote}
                  </div>
                )}

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What&apos;s Included:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Format:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.formats.map((format, index) => (
                      <div key={index} className="inline-flex items-center rounded-md border px-3 py-1 text-sm">
                        {format}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">You May Also Like</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Explore to glow even more.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {relatedProducts(product.id).map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`} className="group">
                  <div className="overflow-hidden rounded-xl">
                    <div className="aspect-video relative">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold">{relatedProduct.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{relatedProduct.category[0]}</p>
                      <p className="font-bold text-blue-600 mt-2">${relatedProduct.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function relatedProducts(currentProductId: number) {
  // Filter out the current product and return 3 random products
  return products
    .filter((product) => product.id !== currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
}

