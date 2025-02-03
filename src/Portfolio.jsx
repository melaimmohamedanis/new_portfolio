import React from 'react'
import { data } from './data';
import HeroSection from './HeroSection.jsx';
//import image from '/assets/src/assets/Bite-Toothpaste-Bits_-homepage.png'
export default function Portfolio() {
  const {showcase,socialLinks } = data;
  console.log("showcase",showcase)
  console.log("socialLinks",socialLinks)

  return (
    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#showcase" className="hover:text-gray-400">Showcase</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>

    {/* Main Page */}
    <main className="flex-grow container mx-auto p-4">
      <section id="home" className="my-8">
     <HeroSection/>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="my-8">
          <h2 className="text-3xl font-bold">Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {showcase.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
    </main>

    {/* Footer */}
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://twitter.com/yourusername" className="hover:text-gray-400">Twitter</a>
        </div>
        <p className="mt-2 text-sm text-gray-400">© 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}
