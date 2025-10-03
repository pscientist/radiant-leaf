import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import fishpond from "@/assets/fishpond.jpg";
import grabone from "@/assets/grabone.jpg";
import companyLogo from "@/assets/company-logo.webp";

const testimonials = [
  {
    id: 1,
    name: "Gerry Smith",
    title: "Technical Program Manager at Google",
    relationship: "Manager",
    date: "January 11, 2013",
    text: "Cathy is a joy to work with. She is organised and focused in her web development, and knows how to ask the right questions to clear up any issues in the requirements as well as the design. She is patient, diligent, and strives to make the customer extremely happy with the result. I also appreciate that she does this without drama -- she just makes it happen."
  },
  {
    id: 2,
    name: "Jaco Swart",
    title: "Information Designer",
    relationship: "Manager",
    date: "January 10, 2013",
    text: "Cathy is a conscientious and dedicated worker that communicates well, is a self-starter and a fast learner. I value her front-end development skills: CSS, JavaScript and HTML that is clean, elegant and standards-based. Cathy keeps cool and focused when it gets busy, and is a great person to have around. I can definitely recommend Cathy!"
  }
];

const projects = [
  {
    id: 1,
    title: "Fishpond",
    description: "New Zealand's largest online marketplace with millions of products. Built scalable e-commerce platform with advanced search, inventory management, and secure payment processing.",
    image: fishpond,
    tags: ["PHP", "MySQL", "React", "REST APIs", "E-commerce"],
    link: "#",
    status: "Published",
  },
  {
    id: 2,
    title: "GrabOne",
    description: "Leading daily deals platform connecting customers with local businesses. Developed deal management system, user authentication, and integrated payment solutions for thousands of transactions.",
    image: grabone,
    tags: ["PHP", "PostgreSQL", "JavaScript", "Payment Integration"],
    link: "#",
    status: "Published",
  },
];

const Index = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto py-12">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold text-foreground leading-tight">
          I build simple, professional websites for small businesses.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          With 7+ years of experience building web systems for well-known companies, I now create affordable, reliable websites for startups and entrepreneurs.
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          Let's Talk
        </Button>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
              status={project.status}
            />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-300">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date} · {testimonial.relationship}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border text-center">
        <img 
          src={companyLogo} 
          alt="Radiant Leaf Studio" 
          className="w-24 h-24 mx-auto mb-4"
        />
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Radiant Leaf Studio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
