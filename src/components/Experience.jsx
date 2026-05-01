import { useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";


const experiences = [
    {
        id: 1,
        company: "Dr Challoners Grammar School",
        position: "GCSEs & A-Levels",
        period: "SEP 2015 - JUL 2022",
        location: "Amersham, UK",
        description: [
            "GCSEs: Computer Science (8), Religious Studies (8), Maths (7), Biology (7), Chemistry (7), German (6), English Literature and Language (6), German (5)",
            "A-Levels: Computer Science (A), Maths (A), Biology (B)",
            "During my A-Levels, I developed and published a Self-Driving car simulator as part of my Computer Science coursework using C# and Unity3D where I developed my own Neural Network and Genetic Algorithm to train a racing car to drive around a race track."            
        ]
    },
    {
        id: 2,
        company: "City, University of London",
        position: "BSc Computer Science",
        period: "SEP 2022 - JUL 2025",
        location: "London, UK",
        description: [
            "I completed my undergraduate degree in Computer Science in July 2025",
            "I partook in a wide range of modules, growing my skills as a developer such as Cloud Computing, Machine Learning and AI, C++ Fundamentals, Java Fundamentals, Theory of Computation, Object Oriented Analysis and Design and Data Structures and Algorithms",
            "Throughout my time in University I developed a wide range of projects that can be found in the project section above such as a racing game using C++ and OpenGL, an application for a kitchen team at a restaurant using Java and SQL developed with a group, an AI Fruit Classifier using Python and Scikit developed with a group and a procedurally generated dungeon crawler game using C# and Unity3D"            
        ]
    },
    {
        id: 3,
        company: "POW Design",
        position: "Junior Developer",
        period: "JAN 2024 - JAN 2025",
        location: "Amersham, UK",
        description: [
            "Part-Time role working on fullstack projects for various clients",
            "Developed responsive front-end projects using modern technologies and frameworks such as ReactJS and TailwindCSS",
            "Developed back-end systems using modern technologies and frameworks such as ExpressJS and PostgreSQL"
        ]
    }
];

export const Experience = () => {
    const [activeExperience, setActiveExperience] = useState(1);

    const handleExperienceClick = (id) => {
        setActiveExperience(id);
    };

    return (
        <section id="experience" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">Education & Experience</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Company Navigation */}
                    <div className="lg:col-span-1">
                        <div className="space-y-2">
                            {experiences.map((exp) => (
                                <div
                                    key={exp.id}
                                    onClick={() => handleExperienceClick(exp.id)}
                                    className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all duration-300 ${
                                        activeExperience === exp.id
                                            ? 'border-l-primary bg-primary/10 text-primary'
                                            : 'border-l-muted-foreground/30 bg-card hover:bg-primary/5 hover:border-l-primary/50'
                                    }`}
                                >
                                    <div className="text-sm font-medium">
                                        {exp.company.toUpperCase()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-3">
                        {experiences
                            .filter(exp => exp.id === activeExperience)
                            .map((exp) => (
                                <div key={exp.id} className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2 text-left">
                                            {exp.position} @ <span className="text-primary">{exp.company}</span>
                                        </h3>
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span className="text-sm">{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                <span className="text-sm">{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {exp.description.map((desc, index) => (
                                            desc && (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-muted-foreground leading-relaxed text-left">
                                                        {desc}
                                                    </p>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;