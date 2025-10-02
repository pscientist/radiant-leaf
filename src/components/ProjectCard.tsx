import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  status?: string;
}

export function ProjectCard({ title, description, image, tags, link, status }: ProjectCardProps) {
  const getStatusVariant = (status?: string) => {
    if (!status) return "secondary";
    if (status === "Published") return "default";
    if (status === "In progress") return "outline";
    if (status === "Repackaged") return "secondary";
    return "secondary";
  };
  const cardContent = (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl flex-1">{title}</CardTitle>
          {status && (
            <Badge variant={getStatusVariant(status)} className="shrink-0">
              {status}
            </Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (link) {
    return <Link to={link}>{cardContent}</Link>;
  }

  return cardContent;
}
