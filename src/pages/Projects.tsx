import { useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";

const Projects = () => {
  const location = useLocation();
  const isProjectA = location.pathname === "/projects/project-a";
  
  if (isProjectA) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-4xl font-bold">Fitness Tracker Pro</h1>
          <Badge className="text-sm px-4 py-1">Published</Badge>
        </div>
        
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={project1} 
            alt="Fitness Tracker Pro" 
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="space-y-6 mb-8">
          <p className="text-lg leading-relaxed text-foreground/90">
            Fitness Tracker Pro is a comprehensive mobile application designed to help users monitor their daily fitness activities, track workout progress, and achieve their health goals. The app provides real-time analytics, personalized workout recommendations, and social features to keep users motivated on their fitness journey.
          </p>

          <p className="text-lg leading-relaxed text-foreground/90">
            Built with a focus on user experience, the application seamlessly integrates with popular wearable devices and health platforms. Users can log various types of exercises, monitor calorie intake, track sleep patterns, and receive intelligent insights based on their activity data. The intuitive dashboard presents all vital statistics in an easy-to-understand format.
          </p>

          <p className="text-lg leading-relaxed text-foreground/90">
            The social component allows users to connect with friends, share achievements, and participate in friendly challenges. Push notifications keep users engaged with timely reminders and motivational messages. The app's offline-first architecture ensures that users can track their activities even without an internet connection.
          </p>

          <p className="text-lg leading-relaxed text-foreground/90">
            With over 100,000 downloads and a 4.7-star rating on app stores, Fitness Tracker Pro has helped thousands of users transform their fitness routines. Regular updates introduce new features based on user feedback, making it one of the most responsive and user-centric fitness applications available today.
          </p>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Redux Toolkit</Badge>
            <Badge variant="secondary">Firebase</Badge>
            <Badge variant="secondary">HealthKit</Badge>
            <Badge variant="secondary">Google Fit API</Badge>
            <Badge variant="secondary">Chart.js</Badge>
            <Badge variant="secondary">Push Notifications</Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-4xl font-bold">Project Details</h1>
      <p className="text-xl text-muted-foreground">Project details will be added here.</p>
    </div>
  );
};

export default Projects;
