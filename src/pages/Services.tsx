import { CheckCircle2 } from "lucide-react";

const services = [
  "One-page business websites",
  "Multi-page sites (About, Services, Contact)",
  "Landing pages for products or events",
  "Blog setup (WordPress, or static with CMS)",
  "Contact forms, maps, simple booking forms",
  "Hosting + domain setup guidance",
];

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-muted-foreground mb-8">
          Professional web development services tailored to your needs
        </p>

        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-lg">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
