import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from 'lucide-react';

const articles = [
  { title: '10 Home Improvement Tips', snippet: 'Discover easy ways to upgrade your home...', category: 'DIY' },
  { title: 'Choosing the Right Contractor', snippet: 'Learn how to select the best professional...', category: 'Advice' },
  { title: 'Eco-Friendly Renovations', snippet: 'Explore sustainable options for your next project...', category: 'Green Living' }
];

export function BlogSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Badge className="mb-2">{article.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.snippet}</p>
                <Link href="#" className="text-blue-600 hover:underline inline-flex items-center">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}