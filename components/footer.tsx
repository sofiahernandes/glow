import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Glow</h3>
            <p className="text-sm text-gray-500">
            Ferramentas digitais criadas para te ajudar a organizar sua vida, aumentar sua produtividade e cuidar do seu bem-estar. 🦋
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=planners" className="text-gray-500 hover:text-blue-600">
                  Planners
                </Link>
              </li>
              <li>
                <Link href="/products?category=calendars" className="text-gray-500 hover:text-blue-600">
                  Calendários
                </Link>
              </li>
              <li>
                <Link href="/products?category=templates" className="text-gray-500 hover:text-blue-600">
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-blue-600">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Glow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

