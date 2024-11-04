import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8">Get free quotes from top craftsmen in Luxembourg today!</p>
        <Button size="lg" variant="secondary">
          Get a Free Quote
        </Button>
      </div>
    </section>
  );
}