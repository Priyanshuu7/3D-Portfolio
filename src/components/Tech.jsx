import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {Icon} from "@iconify/react";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Technologies I work with</p> <br />
                
                {/* Languages Section */}
                <div className="space-y-4">
                    <h4 className="text-lg text-muted capitalize">Languages</h4>
                    <div className="flex flex-wrap gap-3 w-full">
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            {/* TypeScript Icon */}
                            <Icon icon="skill-icons:typescript" className="w-5 h-5" />
                            <span className="text-sm">TypeScript</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            {/* JavaScript Icon */}
                            <Icon icon="skill-icons:javascript" className="w-5 h-5" />
                            <span className="text-sm">JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            {/* Python Icon */}
                            <Icon icon="skill-icons:python-dark" className="w-5 h-5" />
                            <span className="text-sm">Python</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            {/* Java Icon */}
                            <Icon icon="skill-icons:java-dark" className="w-5 h-5" />
                            <span className="text-sm">Java</span>
                        </div>
                    </div>
                </div>

                {/* Frameworks Section */}
                <div className="space-y-4 mt-8">
                    <h4 className="text-lg text-muted capitalize">Frameworks</h4>
                    <div className="flex flex-wrap gap-3 w-full">
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:react-dark" className="w-5 h-5" />
                            <span className="text-sm">React.js</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:nextjs-dark" className="w-5 h-5" />
                            <span className="text-sm">Next.js</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:nodejs-dark" className="w-5 h-5" />
                            <span className="text-sm">Node.js</span>
                        </div>
                    </div>
                </div>

                {/* Databases Section */}
                <div className="space-y-4 mt-8">
                    <h4 className="text-lg text-muted capitalize">Databases</h4>
                    <div className="flex flex-wrap gap-3 w-full">
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:mongodb" className="w-5 h-5" />
                            <span className="text-sm">MongoDB</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:supabase-dark" className="w-5 h-5" />
                            <span className="text-sm">Supabase</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:postgresql-dark" className="w-5 h-5" />
                            <span className="text-sm">PostgreSQL</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:mysql-dark" className="w-5 h-5" />
                            <span className="text-sm">MySQL</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:firebase-dark" className="w-5 h-5" />
                            <span className="text-sm">Firebase</span>
                        </div>
                    </div>
                </div>

                {/* Misc Section */}
                <div className="space-y-4 mt-8">
                    <h4 className="text-lg text-muted capitalize">Misc</h4>
                    <div className="flex flex-wrap gap-3 w-full">
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:vercel-dark" className="w-5 h-5" />
                            <span className="text-sm">Vercel</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:linux-dark" className="w-5 h-5" />
                            <span className="text-sm">Linux</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:prisma" className="w-5 h-5" />
                            <span className="text-sm">Prisma</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:git" className="w-5 h-5" />
                            <span className="text-sm">Git</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="skill-icons:vim-dark" className="w-5 h-5" />
                            <span className="text-sm">Vim</span>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-background rounded-full hover:shadow-lg transition-shadow" style={{opacity: 1, transform: 'none'}}>
                            <Icon icon="logos:canva" className="w-5 h-5" />
                            <span className="text-sm">Canva</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        
        </>
    );
};

export default SectionWrapper(Tech, "tech");
