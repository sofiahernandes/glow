import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress";

interface ProductCarouselProps {
  images: string[];
  alt: string;
}

export default function ProductCarousel({ images, alt }: ProductCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const progress = (current * 100) / count;
    React.useEffect(() => {
        if (!api) {
        return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div>
            <Carousel setApi={setApi}>
            <CarouselContent>
                {images.map((image, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Image src={image || "/placeholder.svg"} alt={alt} fill className="object-cover" />
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
            <Progress value={progress} className="mt-4 w-24 ml-auto" />
        </div>
    )
}
