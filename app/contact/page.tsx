export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-12 md:py-24 lg:py-32 bg-blue-50">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h1>
                <p className="mx-auto mb-10 text-gray-500 md:text-xl">Se você tem alguma dúvida, entre em contato conosco</p>
              
                <div className="flex flex-col align-middle justify-center mt-10 p-8">
                  <p className="text-gray-500 md:text-xl text-center my-1">Email:  <a href="mailto:sofiabfitt@gmail.com" className="text-blue-800 hover:underline hover:underline-offset-4">sofiabfitt@gmail.com</a></p>

                  <p className="text-gray-500 md:text-xl text-center my-1">Instagram:  <a href="https://www.instagram.com/sofiabfit/" className="text-blue-800 hover:underline hover:underline-offset-4">@sofiabfit</a></p>
                </div>
              </div>
          </div>
    </div>
  )
}

