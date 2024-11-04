import { Button } from "@/components/ui/button";

interface ServiceHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  averagePrice: string;
  completionTime: string;
}

export function ServiceHeader({
  title,
  description,
  imageUrl,
  averagePrice,
  completionTime,
}: ServiceHeaderProps) {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <p className="text-gray-300">Average Price Range</p>
              <p className="text-xl font-semibold">{averagePrice}</p>
            </div>
            <div>
              <p className="text-gray-300">Typical Completion Time</p>
              <p className="text-xl font-semibold">{completionTime}</p>
            </div>
          </div>
          <Button size="lg" className="mt-8">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
}