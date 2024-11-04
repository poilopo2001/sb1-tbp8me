import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

const craftsmen = [
  { name: 'John Doe', specialty: 'Electrician', rating: 4.9 },
  { name: 'Jane Smith', specialty: 'Plumber', rating: 4.8 },
  { name: 'Mike Johnson', specialty: 'Carpenter', rating: 4.7 }
];

export function CraftsmenSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Top-Rated Craftsmen</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {craftsmen.map((craftsman, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={craftsman.name} />
                  <AvatarFallback>{craftsman.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{craftsman.name}</h3>
                  <p className="text-gray-600">{craftsman.specialty}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{craftsman.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Profile</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}