import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Craftsman {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  description: string;
}

interface LocalCraftsmenListProps {
  craftsmen: Craftsman[];
  title: string;
  showLoadMore?: boolean;
}

export function LocalCraftsmenList({
  craftsmen,
  title,
  showLoadMore = false,
}: LocalCraftsmenListProps) {
  if (craftsmen.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {craftsmen.map((craftsman) => (
            <Card key={craftsman.id}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={craftsman.imageUrl} alt={craftsman.name} />
                    <AvatarFallback>
                      {craftsman.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{craftsman.name}</h3>
                    <p className="text-sm text-muted-foreground">{craftsman.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">
                        {craftsman.rating} ({craftsman.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {craftsman.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Contact
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {showLoadMore && craftsmen.length >= 6 && (
          <div className="mt-8 text-center">
            <Button variant="outline">Load More</Button>
          </div>
        )}
      </div>
    </div>
  );
}