import { ProjectCard } from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "PlanetFam",
    description: "A comprehensive task management app with team collaboration features and real-time sync.",
    image: project1,
    tags: ["React Native", "Supabase", "TypeScript"],
    link: "/projects/project-a",
  },
  {
    id: 2,
    title: "FitTrack",
    description: "Fitness tracking application with personalized workout plans and nutrition monitoring.",
    image: project2,
    tags: ["Flutter", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "ShopEase",
    description: "Modern e-commerce platform with seamless checkout and inventory management.",
    image: project3,
    tags: ["React Native", "Stripe", "PostgreSQL"],
  },
];

const Index = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Mobile App Developer
        </h1>
        <p className="text-xl text-muted-foreground">
          Crafting innovative mobile experiences with cutting-edge technologies
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
