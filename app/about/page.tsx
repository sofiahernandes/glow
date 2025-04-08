import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Heading */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre a Glow</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">Nossa jornada, missão e história.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full pt-8 pb-12 md:pb-24 lg:px-20 md:px-10">
          <div className="container px-10">
            <div className="grid gap-6 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Nossa História</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Transformando as dificuldades em força</h2>
                <p className="text-gray-500 md:text-xl text-justify my-1">A vida pode ser estressante. As listas de tarefas que nunca acabam, a pressão de dar conta de tudo, a sensação de que o tempo está escorrendo pelas mãos. Nós te entendemos. Sabemos como é desejar ter estrutura, mas também liberdade — <span className="italic text-blue-700">sonhar alto e, ao mesmo tempo, se sentir presa ao caos do dia a dia</span>. Foi por isso que a Glow nasceu. Não apenas como uma marca, mas como um movimento. Um espaço onde mulheres como você podem se curar, crescer e florescer.🦋</p>
                
                <p className="text-gray-500 md:text-xl text-justify my-1">Nossos planners digitais, templates e calendários não são apenas ferramentas; são <span className="italic text-blue-700">degraus rumo à vida que você sempre sonhou</span>. Estamos aqui para apoiar a sua jornada — um passo de cada vez.</p>
           
                <p className="text-gray-500 md:text-xl text-justify my-1">Na Glow, acreditamos que crescer não é sobre perfeição— é sobre progresso. E estamos aqui para te lembrar: <span className="italic text-blue-700">VOCÊ CONSEGUE</span>. Você é digna. Você é ilimitada. <span className="italic text-blue-700">Bem-vinda à Glow. Seu próximo capítulo começa agora.</span></p>
              </div>
            </div>
          </div>
        </section>

        <hr/>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:px-20 md:px-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Nossos Valores</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pelo que lutamos</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Os princípios que guiam o que fazemos.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-x-20 border border-gray-200 p-10 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action (Link to Products) */}
        <section className="w-full py-12 md:py-24 bg-blue-100 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-black">Pronta para transformar<br />a Sua Vida?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-black">
                  Explore nossa coleção de produtos digitais <br />
                  criados para te ajudar a se curar, crescer e florescer.
                </p>
              </div>
              <Button asChild className="border border-blue-600 bg-blue-600 text-white hover:bg-white hover:text-blue-600">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const values = [
  {
    icon: "🦋",
    title: "Viver, não apenas sobreviver",
    description: "Você merece mais do que apenas sobreviver. Nossa missão é te ajudar a se tornar a sua melhor versão.",
  },
  {
    icon: "📈",
    title: "Progresso acima da Perfeição",
    description: "Passos pequenos e constantes geram grandes mudanças. Nós celebramos cada vitória, por menor que seja.",
  },
  {
    icon: "✨",
    title: "Comunidade e Conexão",
    description: "Você nunca está sozinho nesta jornada. A Glow é mais do que uma marca— é um espaço de apoio e inspiração.",
  },
  {
    icon: "🧠",
    title: "Mentalidade de Crescimento",
    description: "Ao planejar com intenção, você desbloqueia seu potencial. Projetamos produtos que alimentam a confiança e a clareza.",
  },
]

