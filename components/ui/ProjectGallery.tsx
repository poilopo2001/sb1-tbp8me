import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectImage {
  url: string;
  alt: string;
  description?: string;
}

interface ProjectGalleryProps {
  images: ProjectImage[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                {image.description && (
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}