import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const services = ['Kitchen Renovation', 'Bathroom Remodeling', 'House Painting'];

export function PopularQuotesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Popular Quotes</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600 mb-4">Get a customized quote for your {service.toLowerCase()} project.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}