import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ArrowRight, 
  ChevronRight, 
  ArrowUpRight,
  Leaf,
  Shapes,
  Cat,
  CheckCircle
} from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const featuredProducts = getFeaturedProducts();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a newsletter service
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950">
        <div className="container px-4 py-20 md:py-32 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Minimalist <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500 dark:from-gray-100 dark:to-gray-400">Origami</span> Art
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                Transform your space with elegant paper sculptures that embody simplicity, precision, and artistic expression.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/products">
                    Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">About Imagiro</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[600px] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/assets/products/placeholder.svg" 
                    alt="Minimal Crane" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/assets/products/placeholder.svg" 
                    alt="Geometric Design" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/assets/products/placeholder.svg" 
                    alt="Abstract Wave" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="/assets/products/placeholder.svg" 
                    alt="Paper Bonsai" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Imagiro</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our designs combine traditional origami techniques with minimalist aesthetics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Handcrafted</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Each piece is meticulously folded by hand with precision and care.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use high-quality papers that ensure durability and visual appeal.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our paper is sourced responsibly and our packaging is 100% recyclable.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112.83 2.83l-2.83 2.83a2 2 0 11-2.83-2.83L12 8.5V6a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Original Designs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unique designs created by our team of skilled origami artists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Pieces</h2>
            <Button variant="outline" asChild>
              <Link to="/products">
                View All <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={product.images[0] || '/assets/products/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      View Details
                      <ChevronRight className="inline ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/products?category=animals"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
              <img
                src="/assets/products/placeholder.svg"
                alt="Animal Designs"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <Cat className="h-8 w-8 mb-2 text-white" />
                <h3 className="text-2xl font-bold text-white mb-1">Animal Designs</h3>
                <p className="text-gray-200 text-sm mb-3">Elegant animal figures reduced to their essence</p>
                <span className="text-white text-sm flex items-center">
                  Browse Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
            
            <Link
              to="/products?category=geometric"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
              <img
                src="/assets/products/placeholder.svg"
                alt="Geometric Forms"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <Shapes className="h-8 w-8 mb-2 text-white" />
                <h3 className="text-2xl font-bold text-white mb-1">Geometric Forms</h3>
                <p className="text-gray-200 text-sm mb-3">Mathematical precision and clean lines</p>
                <span className="text-white text-sm flex items-center">
                  Browse Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
            
            <Link
              to="/products?category=plants"
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
              <img
                src="/assets/products/placeholder.svg"
                alt="Plant Inspired"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <Leaf className="h-8 w-8 mb-2 text-white" />
                <h3 className="text-2xl font-bold text-white mb-1">Plant Inspired</h3>
                <p className="text-gray-200 text-sm mb-3">Nature's elegance captured in paper</p>
                <span className="text-white text-sm flex items-center">
                  Browse Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "I received the Minimal Crane as a gift and was blown away by the precision and elegance. It's become the focal point of my home office."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div>
                  <h4 className="font-medium">Sarah J.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Design Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "The Paper Bonsai exceeded my expectations. It's an amazing conversation piece and I love that it requires no maintenance unlike a real bonsai!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div>
                  <h4 className="font-medium">Michael T.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Architect</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "I purchased three geometric pieces for my minimalist living room and they add just the right amount of artistic touch without overwhelming the space."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div>
                  <h4 className="font-medium">Emma R.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Interior Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-8 text-gray-300">
              Subscribe to receive updates on new designs, special offers, and origami inspiration.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
            
            <div className="flex items-center justify-center mt-4 text-sm text-gray-400">
              <CheckCircle className="h-4 w-4 mr-2" />
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}