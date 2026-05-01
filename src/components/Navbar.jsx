import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navItems = [
    {name:"Home", href: "#hero"},
    {name:"About", href: "#about"},
    {name:"Experience", href: "#experience"},
    {name:"Projects", href: "#projects"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav 
            className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
            <div className="container flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Sheri's</span> Portfolio
                        </span>
                    </a>
                    
                    {/* Social Media Buttons */}
                    <div className="hidden sm:flex items-center space-x-2">
                        <a 
                            href="https://github.com/SheriNawaz" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4 text-primary" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/sheri-nawaz/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4 text-primary" />
                        </a>
                        <a 
                            href="mailto:sherinawaz495@gmail.com"
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-4 w-4 text-primary" />
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}
                </div>
                                                  
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"
                    )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    
                    {/* Social Media Buttons in Mobile Menu */}
                    <div className="flex items-center space-x-4 mt-8">
                        <a 
                            href="https://github.com/SheriNawaz" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="GitHub"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Github className="h-6 w-6 text-primary" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/sheri-nawaz-81429a296/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="LinkedIn"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Linkedin className="h-6 w-6 text-primary" />
                        </a>
                        <a 
                            href="mailto:sherinawaz495@gmail.com"
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="Email"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Mail className="h-6 w-6 text-primary" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};