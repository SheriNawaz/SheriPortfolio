import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";

const projects = [
    {
        id: 1,
        title: "Genetic Algorithm Project",
        description: "A self-driving car simulation created using a genetic algorithm and self-made neural network in Unity3D",
        tags: ["C#", "Unity"],
        demoUrl: "https://sherinawaz.itch.io/ai-car",
        githubUrl: "https://github.com/SheriNawaz/GeneticAlgorithmTeachesCarToDrive"
    }, 
    {
        id: 2,
        title: "AI Fruit Classifier",
        description: "AI Fruit Classifier developed in a team for my Computer Science degree",
        tags: ["Python", "Scikit", "Pytorch", "Matplot"],
        demoUrl: "https://github.com/SheriNawaz/FruitClassifier/tree/main",
        githubUrl: "https://github.com/SheriNawaz/FruitClassifier/tree/main"
    }, 
    {
        id: 3,
        title: "Kitchen Application",
        description: "An application for a kitchen team at a restaurant to improve communication and efficiency with other teams at the restaurant.",
        tags: ["Java", "SQL"],
        demoUrl: "https://github.com/SheriNawaz/KitchenApp/blob/main/README.md",
        githubUrl: "https://github.com/SheriNawaz/KitchenApp"
    }, 
    {
        id: 4,
        title: "Racing Game",
        description: "A racing game created in C++ using OpenGl implementing toon shaders",
        tags: ["C++", "OpenGL"],
        demoUrl: "https://github.com/SheriNawaz/OpenGLRacingGame",
        githubUrl: "https://github.com/SheriNawaz/OpenGLRacingGame"
    }, 
    {
        id: 5,
        title: "Dungeon Souls 3D",
        description: "A procedurally generated dungeon crawler game created in Unity3D filled with complex enemy and boss behaviour.",
        tags: ["C#", "Unity"],
        demoUrl: "https://sherinawaz.itch.io/dungeon-souls-3d",
        githubUrl: "https://github.com/SheriNawaz/DungeonSouls3D"
    }, 
    {
        id: 6,
        title: "REI Recruitment",
        description: "Developed a prototype inventory management system for a car showroom that allows showrooms to easily view and manage stock of different super cars in inventory.",
        tags: ["ReactJS", "CSS", "EmailJS"],
        demoUrl: "https://reirecruitment.com",
        githubUrl: "https://github.com/SheriNawaz"
    }, 
    {
        id: 7,
        title: "Inventory Management System",
        description: "Developed a prototype inventory management system for a car showroom that allows showrooms to easily view and manage stock of different super cars in inventory.",
        tags: ["PostgreSQL", "ExpressJS", "ReactJS", "NodeJS", "TailwindCSS"],
        demoUrl: "https://odin-inventory-4wsqjpfny-sherinawazs-projects.vercel.app/",
        githubUrl: "https://github.com/SheriNawaz/odin-inventory"
    }, 
];

export const Archive = () => {
    return (
        <section className="py-16 px-4">
        <StarBackground />

            <div className="container mx-auto max-w-6xl">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold">All <span className="text-primary">Projects</span></h1>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>

                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-semibold text-muted-foreground mb-4 border-b pb-2">
                    <div className="col-span-3 text-primary">Project</div>
                    <div className="col-span-5 text-primary">Description</div>
                    <div className="col-span-2 text-primary">Tags</div>
                    <div className="col-span-2 text-primary">Links</div>
                </div>

                {/* Project Rows */}
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b"
                    >
                        <div className="md:col-span-3">
                            <h3 className="font-semibold text-lg text-primary">{project.title}</h3>
                        </div>
                        <div className="md:col-span-5 text-muted-foreground text-sm">
                            {project.description}
                        </div>
                        <div className="md:col-span-2 flex flex-wrap gap-2 text-xs mt-2 md:mt-0">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground border"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="md:col-span-2 flex items-center space-x-4 mt-2 md:mt-0">
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <ExternalLink size={20} />
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
