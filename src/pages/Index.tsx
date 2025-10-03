import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

      {/* Services Section */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Services</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-foreground">One-page business websites</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-foreground">Multi-page sites (About, Services, Contact)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-foreground">Landing pages for products or events</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-foreground">Blog setup (WordPress, or static with CMS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-foreground">Contact forms, maps, simple booking forms</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-foreground">Hosting + domain setup guidance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
