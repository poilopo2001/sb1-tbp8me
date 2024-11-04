import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Verified Professionals",
    description: "All our craftsmen are thoroughly vetted and verified.",
    color: "text-green-500"
  },
  {
    icon: Clock,
    title: "Fast Quotes",
    description: "Receive multiple quotes within 24 hours of your request.",
    color: "text-blue-500"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We ensure your project is completed to your satisfaction.",
    color: "text-purple-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Why Choose QuoteEase?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6">
                  <Icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-center text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}