import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  ChevronRight,
  Search,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { products, Product } from '@/data/products';

// Define categories and price range
const categories = ['guns','animals', 'plants', 'geometric', 'abstract'];
const minPrice = 0;
const maxPrice = 100;

export default function ProductsPage() {
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'name'
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Get URL search params for initial filters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && categories.includes(category)) {
      setSelectedCategories([category]);
    }
  }, []);

  // Apply filters whenever filter state changes
  useEffect(() => {
    let result = [...products];

    // Apply search term filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search) ||
          product.shortDescription.toLowerCase().includes(search)
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }

    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // Featured products first, then non-featured
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategories, priceRange, sortBy]);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
    setSortBy('featured');
  };

  // Format price for display
  const formatPrice = (price: number) => `$${price.toFixed(0)}`;

  return (
    <Layout>
      <section className="container px-4 py-8 mx-auto">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm flex items-center gap-2">
          <Link to="/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="font-medium">Shop</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>

        {/* Top filters - Search, Sort, Filter button */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                onClick={() => setSearchTerm('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Sort */}
          <div className="min-w-[180px]">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                </SheetHeader>

                {/* Mobile Filter Content */}
                <div className="py-6 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox
                            id={`mobile-category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label
                            htmlFor={`mobile-category-${category}`}
                            className="ml-2 capitalize"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="space-y-6">
                      <Slider
                        min={minPrice}
                        max={maxPrice}
                        step={5}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                      />
                      <div className="flex items-center justify-between">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>to</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>

                  {/* Reset Filters */}
                  <div>
                    <Button onClick={clearFilters} variant="outline" className="w-full">
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategories.length > 0 || 
          priceRange[0] > minPrice || 
          priceRange[1] < maxPrice ||
          searchTerm) && (
          <div className="mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-500 dark:text-gray-400">Active Filters:</span>
              
              {searchTerm && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Search: {searchTerm}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => setSearchTerm('')}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              
              {selectedCategories.map(category => (
                <Badge key={category} variant="outline" className="flex items-center gap-1 capitalize">
                  {category}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => toggleCategory(category)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              
              {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                <Badge variant="outline" className="flex items-center gap-1">
                  Price: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 ml-1" 
                    onClick={() => setPriceRange([minPrice, maxPrice])}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                Clear All
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="ml-2 capitalize"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-6">
                    <Slider
                      min={minPrice}
                      max={maxPrice}
                      step={5}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                    <div className="flex items-center justify-between">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>to</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Reset Filters */}
                <div>
                  <Button onClick={clearFilters} variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
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
                          <span className="font-semibold">{formatPrice(product.price)}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            View
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Try adjusting your filters or search term.
                </p>
                <Button onClick={clearFilters}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}