import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioProjects = [
  {
    id: 1,
    title: "Dental Practice Website",
    description: "Modern, clean website for a dental practice featuring appointment booking, service information, and patient testimonials.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
    tags: ["Healthcare", "Booking System", "Responsive Design"],
    status: "Completed",
  },
  {
    id: 2,
    title: "Tiling Services Website",
    description: "Professional showcase for a tiling company with portfolio gallery, service details, and contact forms.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop",
    tags: ["Construction", "Portfolio", "Contact Forms"],
    status: "Completed",
  },
  {
    id: 3,
    title: "Fruit & Vege Shop",
    description: "Fresh and vibrant e-commerce website for a local produce shop with product listings and online ordering.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Local Business", "Product Catalog"],
    status: "Completed",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Recent websites I've built for clients - bringing their visions to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
