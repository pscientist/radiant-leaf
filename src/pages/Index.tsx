import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import planetfam from "@/assets/planetfam.jpg";
import mynexthome from "@/assets/mynexthome.jpg";
import passwdbook from "@/assets/passwdbook.jpg";
import dominosApp from "@/assets/dominos-app.jpg";
import myshopping from "@/assets/myshopping.jpg";
import donewithit from "@/assets/donewithit.jpg";

const projects = [
  {
    id: 1,
    title: "PlanetFam",
    description: "An interactive quiz game on geographical knowledge in React Native. Hosted API services for country data on Vercel, with Unsplash APIs for country images and Supabase for user account management.",
    image: planetfam,
    tags: ["React Native", "TypeScript", "Supabase", "React Router", "Jest"],
    link: "/projects/project-a",
    status: "Published",
  },
  {
    id: 2,
    title: "MyNextHome",
    description: "A React Native app to log open home visits with structured details (address, price, rooms, sqm), diary notes, and photos uploads, featuring offline-first storage with AsyncStorage synced with remote server.",
    image: mynexthome,
    tags: ["React Native", "Formik", "Yup", "AsyncStorage", "Expo Image-Picker"],
    status: "In progress",
  },
  {
    id: 3,
    title: "Passwd Book",
    description: "A password manager written in React Native with Firebase user management, Async Storage, and alphabetical scrollable list. Features edit/create screens with Formik and Yup validation.",
    image: passwdbook,
    tags: ["React Native", "Firebase", "AsyncStorage", "React Navigation", "Formik"],
    status: "Repackaged",
  },
  {
    id: 4,
    title: "Dominos Employees App",
    description: "Employee management app with React Query for communicating with the Company server. Lists employee's pay slips, shifts, user profile and company notices with two-step authentication.",
    image: dominosApp,
    tags: ["React Native", "React Query", "Two-step Auth"],
    status: "Published",
  },
  {
    id: 5,
    title: "My-Shopping Groceries App",
    description: "Groceries shopping list management app with Firebase user management, Async Storage, React Navigation, and list screens built with Formik and Yup validation.",
    image: myshopping,
    tags: ["React Native", "Firebase", "AsyncStorage", "React Navigation", "Formik"],
    status: "Published",
  },
  {
    id: 6,
    title: "DoneWithIt App",
    description: "TradeMe-like Buy/Sell app with register/login screens, componentised GUI elements, user management, listing screens with Formik and Yup validation, image upload, browse, category picker, push notifications, and location awareness.",
    image: donewithit,
    tags: ["React Native", "Formik", "Yup", "Push Notifications", "Location"],
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
    </div>
  );
};

export default Index;
