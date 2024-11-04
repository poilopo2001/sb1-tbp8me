import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  name: string;
  description: string;
  Icon: LucideIcon;
}

export function ServiceCard({ name, description, Icon }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}