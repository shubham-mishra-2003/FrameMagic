import React from 'react'

const page = () => {
  return (
<<<<<<< HEAD
    <div>
      <header className="text-white" style={{
        backgroundImage: "linear-gradient(to right, rgba(79, 70, 229, 0.8), rgba(67, 56, 202, 0.8))",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
        <div className="container mx-auto flex justify-between items-center p-6">
          <div className="text-2xl font-bold">AI Image Tool</div>
          <nav className="space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="space-x-4">
            <a href="#login" className="hover:underline">Login</a>
            <a href="#signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</a>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto my-10 px-6">
        <section id="home" className="text-center">
          <div className="text-white" style={{
        backgroundImage: "linear-gradient(to right, rgba(79, 70, 229, 0.8), rgba(67, 56, 202, 0.8)), url('/banner-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
            <h1 className="text-5xl font-bold mb-6 text-white pt-24">Transform Your Images with AI</h1>
            <p className="text-xl mb-6 text-white">AI-powered tools to enhance, edit, and transform your photos effortlessly.</p>
            <a href="#signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">Get Started Now</a>
          </div>
        </section>

        <section id="features" className="my-20">
          <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/5 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                {/* <img src="/restore.png" alt="Image Restore" className="w-20 mx-auto mb-4" /> */}
                <h3 className="text-2xl font-bold mb-2">Image Restore</h3>
                <p>Bring your old photos back to life with our AI restoration tools.</p>
              </div>
            </div>
            <div className="w-full md:w-1/5 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                {/* <img src="/generative-fill.png" alt="Generative Fill" className="w-20 mx-auto mb-4" /> */}
                <h3 className="text-2xl font-bold mb-2">Generative Fill</h3>
                <p>Fill in missing parts of your images with AI-generated content.</p>
              </div>
            </div>
            <div className="w-full md:w-1/5 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                {/* <img src="/remove.png" alt="Object Remover" className="w-20 mx-auto mb-4" /> */}
                <h3 className="text-2xl font-bold mb-2">Object Remover</h3>
                <p>Remove unwanted objects from your photos seamlessly.</p>
              </div>
            </div>
            <div className="w-full md:w-1/5 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                {/* <img src="/recolor.png" alt="Object Recolor" className="w-20 mx-auto mb-4" /> */}
                <h3 className="text-2xl font-bold mb-2">Object Recolor</h3>
                <p>Change the color of specific objects in your images.</p>
              </div>
            </div>
            <div className="w-full md:w-1/5 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                {/* <img src="/background-remove.png" alt="Background Remove" className="w-20 mx-auto mb-4" /> */}
                <h3 className="text-2xl font-bold mb-2">Background Remove</h3>
                <p>Remove backgrounds from your images effortlessly.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white" style={{
        backgroundImage: "linear-gradient(to right, rgba(79, 70, 229, 0.8), rgba(67, 56, 202, 0.8)), url('/banner-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
        <div className="container mx-auto p-6 text-center">
          <p>&copy; 2024 AI. All rights reserved.</p>
          <nav className="space-x-4">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </nav>
        </div>
      </footer>
=======
    <div className='flex justify-center items-center'>
      Home
>>>>>>> d905a26795b42968be5505e901cd09bb879f80f7
    </div>
  )
}

export default page