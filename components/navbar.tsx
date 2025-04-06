"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                  Glow
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          
                  <span className="sr-only">Fechar menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 py-8">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Produtos
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl">
            Glow
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-blue-600">
            Produtos
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-blue-600">
            Sobre Nós
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-blue-600">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

