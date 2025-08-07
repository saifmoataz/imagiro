import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if not already at the root
    if (window.location.pathname !== '/imagiro/' && !window.location.pathname.endsWith('.html')) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold mb-4">Welcome</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Thanks for visting Imagiro</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Click below to go to the main page.
        </p>
        <Button asChild size="lg">
          <Link to="/">Main Page</Link>
        </Button>
      </div>
    </Layout>
  );
}