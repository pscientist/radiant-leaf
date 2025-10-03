import { ProjectCard } from "@/components/ProjectCard";
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
      <div className="mb-12">
        <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white leading-tight">
          Cathy Lai (Yunju)
        </h1>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white mb-6">Core Skills</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-white">Backend:</span> <span className="text-gray-400 font-semibold">PHP 8, MySQL, PostgreSQL, Java, Python, Node.js</span>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-white">Frontend:</span> <span className="text-gray-400 font-semibold">React</span>, <span className="text-gray-400 font-semibold">React Native</span>, <span className="text-gray-400 font-semibold">JavaScript</span>, <span className="text-gray-400 font-semibold">TypeScript</span>, <span className="text-gray-400 font-semibold">HTML5</span>, <span className="text-gray-400 font-semibold">CSS</span>, <span className="text-gray-400 font-semibold">Responsive UI/UX</span>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-white">API Development:</span> <span className="text-gray-400 font-semibold">RESTful APIs</span>, <span className="text-gray-400 font-semibold">JSON</span>, <span className="text-gray-400 font-semibold">OAuth-based authentication</span>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-white">DevOps & Tools:</span> <span className="text-gray-400 font-semibold">Git</span>, <span className="text-gray-400 font-semibold">GitHub Actions (CI/CD)</span>, <span className="text-gray-400 font-semibold">AWS SES/SQS</span>, <span className="text-gray-400 font-semibold">automated deployments</span>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-white">Architecture:</span> <span className="text-gray-400 font-semibold">Object-Oriented Design</span>, <span className="text-gray-400 font-semibold">Microservices</span>, <span className="text-gray-400 font-semibold">Serverless</span> (familiarity)
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-white">Security & Testing:</span> <span className="text-gray-400 font-semibold">Code reviews</span>, <span className="text-gray-400 font-semibold">OWASP awareness</span>, <span className="text-gray-400 font-semibold">unit and integration testing</span>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-white">Other:</span> Mentoring junior developers, stakeholder engagement, requirements gathering
          </p>
        </div>
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
