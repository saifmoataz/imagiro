import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/ThemeContext';
import { useCart } from '@/contexts/CartContext';
import { Menu, X, Sun, Moon, ShoppingBag } from 'lucide-react';
import CustomCursor from '@/components/CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

interface NavItemProps {
  to: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem = ({ to, label, isActive, onClick }: NavItemProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 transition-colors duration-200 ${
        isActive
          ? 'font-medium text-black dark:text-white'
          : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
};

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { cart } = useCart();
  
  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Check if current path matches
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <CustomCursor />
      
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
          <div className="container flex items-center justify-between h-16 mx-auto px-4">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              Imagiro
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <NavItem to="/" label="Home" isActive={isActive('/')} />
              <NavItem to="/products" label="Shop" isActive={isActive('/products') || isActive('/product/')} />
              <NavItem to="/about" label="About" isActive={isActive('/about')} />
              <NavItem to="/contact" label="Contact" isActive={isActive('/contact')} />
            </nav>

            {/* Right Side - Theme Toggle, Cart */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              
              {/* Cart */}
              <Button variant="ghost" size="icon" asChild className="relative">
                <Link to="/cart">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </Button>
              
              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[385px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <Link to="/" className="text-xl font-bold">
                        Imagiro
                      </Link>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                    </div>
                    <div className="flex flex-col space-y-2 py-4">
                      <SheetTrigger asChild>
                        <NavItem to="/" label="Home" isActive={isActive('/')} />
                      </SheetTrigger>
                      <SheetTrigger asChild>
                        <NavItem 
                          to="/products" 
                          label="Shop" 
                          isActive={isActive('/products') || isActive('/product/')}
                        />
                      </SheetTrigger>
                      <SheetTrigger asChild>
                        <NavItem to="/about" label="About" isActive={isActive('/about')} />
                      </SheetTrigger>
                      <SheetTrigger asChild>
                        <NavItem to="/contact" label="Contact" isActive={isActive('/contact')} />
                      </SheetTrigger>
                    </div>
                    <div className="mt-auto">
                      <SheetTrigger asChild>
                        <Button asChild className="w-full">
                          <Link to="/cart">
                            <ShoppingBag className="mr-2 h-4 w-4" />
                            Cart ({cartItemCount})
                          </Link>
                        </Button>
                      </SheetTrigger>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-white dark:bg-gray-950 dark:border-gray-800">
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <h3 className="text-lg font-bold mb-4">Imagiro</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Transforming paper into minimalist art through the ancient craft of origami.
                </p>
                <div className="flex space-x-4">
                  {/* Instagram only */}
                  <a
                    href="https://www.instagram.com/imagiro.lp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black dark:hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Shop</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">All Products</Link></li>
                  <li><Link to="/products?category=animals" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Animals</Link></li>
                  <li><Link to="/products?category=geometric" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Geometric</Link></li>
                  <li><Link to="/products?category=plants" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Plants</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Our Story</Link></li>
                  <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Contact</Link></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Press</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Help</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Shipping</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Returns</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">FAQ</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                © {new Date().getFullYear()} Imagiro. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}