import React from 'react';
import { Layout } from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Transforming the ancient art of origami into contemporary artistic expressions
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                At Imagiro, we believe in the power of simplicity and precision. Our mission is to 
                create origami pieces that transcend traditional paper folding and enter the realm 
                of contemporary art and design.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Each piece is meticulously crafted to bring a sense of calm, balance, and artistic 
                expression to modern spaces. We see origami not just as a craft, but as a philosophy 
                of transformation — taking something simple and revealing its inherent complexity 
                and beauty through precise folds and thoughtful design.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/assets/products/placeholder.svg" 
                  alt="Origami art pieces" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/assets/products/placeholder.svg" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Founder</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Imagiro was founded by Kai Nakamura, who discovered origami at the age of seven through 
                his grandfather, a master of the craft. After studying design in Tokyo and New York, 
                Kai sought to merge traditional origami techniques with contemporary design principles.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                "I believe that origami is more than paper folding—it's a meditation on form, balance, 
                and transformation. Each fold is intentional, each crease meaningful. At Imagiro, we 
                honor the tradition while pushing the boundaries of what paper art can be in the 
                modern world."
              </p>
              <p className="text-sm italic text-gray-500 dark:text-gray-500 mt-4">— Kai Nakamura, Founder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-full text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Material Selection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We source the finest papers from sustainable producers, selecting for texture, durability, and folding quality. Each sheet is evaluated for its unique properties before being approved for use.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-full text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Design & Prototype</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our designs begin as sketches before undergoing multiple iterations of folding prototypes. We refine each design until it achieves perfect balance between complexity and visual impact.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-full text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Precision Crafting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Each piece is folded by hand with meticulous attention to detail. Our artisans train for years to achieve the precision and consistency required for our designs. No adhesives or cuts are used.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We use paper from responsibly managed forests and sustainable sources, minimizing waste in our production process.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Craftsmanship</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We honor traditional techniques while embracing innovation, ensuring each piece meets our exacting standards.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Artistic Expression</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We view origami as an art form with endless possibilities, constantly exploring new ways to express beauty through paper.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mindfulness</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We approach our work with focus and intention, embracing the meditative aspects of origami in our creation process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}