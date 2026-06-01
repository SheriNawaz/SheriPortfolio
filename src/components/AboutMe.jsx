import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Developer
            </h3>

            <p className="text-muted-foreground">
              After studying Computer Science at a degree level and spending 2 years as a part-time Fullstack Developer, I specialise in developing innovative solutions to solve complex problems, with a keen interest in AI and Machine Learning
            </p>

            <p className="text-muted-foreground">
              I am a recent Computer Science graduate with a passion for building clean, efficient solutions to complex problems. I'm always exploring new tools, technologies, and best practices to grow as a developer and stay current in the fast-paced world of software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Programming Languages</h4>
                  <p className="text-muted-foreground">
                      <div className="flex flex-wrap gap-2 mb-4 py-1">
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Python </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> C# </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Java </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> C++ </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> JavaScript </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Typescript </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> SQL </span>
                      </div>
                  </p>
                </div>
              </div>
            </div>
             <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technologies and Frameworks</h4>
                  <p className="text-muted-foreground">
                      <div className="flex flex-wrap gap-2 mb-4 py-1">
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> NextJS </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> ReactJS </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> NodeJS </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> ExpressJs </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> PostgreSQL </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> TailwindCSS </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Django </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Scikit </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Pytorch </span>
                      </div>
                  </p>
                </div>
              </div>
            </div>
             <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Development Tools</h4>
                  <p className="text-muted-foreground">
                      <div className="flex flex-wrap gap-2 mb-4 py-1">
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Git </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Amazon Web Services (AWS) </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Jupyter Notebook </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> PrismaORM </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> Supabase </span>
                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"> OpenAPI </span>
                      </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};