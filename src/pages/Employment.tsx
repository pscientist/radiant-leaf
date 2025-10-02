import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const employmentHistory = [
  {
    id: 1,
    title: "Senior Web Developer",
    company: "Descisys Ltd.",
    location: "New Zealand",
    period: "2017 – Aug 2025",
    responsibilities: [
      "Maintain and develop innovative restaurant management software for clients such as Dominos UK, Tim Hortons Coffee. PHP 8, jQuery, MySQL, Java & React Native.",
      "Designed backend solutions and GUI frontend given a set of requirements from the clients to keep track of their training bookings.",
      "Implemented solutions for franchise food and materials planning – dashboard to display daily quantity predictions.",
      "Fixed/rewrite legacy P and L dashboard and graphing pages.",
      "Maintained daily rostering solutions.",
    ],
    technologies: ["PHP 8", "jQuery", "MySQL", "Java", "React Native"],
  },
  {
    id: 2,
    title: "Senior Web Developer",
    company: "Fishpond Ltd.",
    location: "Auckland",
    period: "2014 – 2017",
    responsibilities: [
      "Self-taught mobile technologies and produced prototypes for franchise employee management app (in React Native).",
      "Became an expert with no training with the company's emailing marketing system using AWS SQS/SES services. Responsible for daily support and debugging in a timely manner.",
      "Suggested useful UI to help with customers and admin work.",
      "Dependable and detailed with weekly production releases using Git.",
    ],
    technologies: ["React Native", "AWS SQS", "AWS SES", "Git"],
  },
  {
    id: 3,
    title: "Web Developer",
    company: "GrabOne Ltd.",
    location: "Auckland",
    period: "2012 – 2014",
    responsibilities: [
      "Debugged and maintained internal and external websites, in particular the complex administration/CMS backend which included workflow, finance, email marketing, content marketing, sales analysis, reporting, and commission calculations.",
      "Worked with 15 other developers in a collaborative environment.",
    ],
    technologies: ["CMS", "Workflow Systems", "Email Marketing", "Analytics"],
  },
];

const Employment = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Employment History
        </h1>
        <p className="text-xl text-muted-foreground">
          Professional experience in web and mobile development
        </p>
      </div>

      <div className="space-y-6">
        {employmentHistory.map((job) => (
          <Card key={job.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {job.company} • {job.location}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  {job.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="leading-relaxed">{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Employment;
