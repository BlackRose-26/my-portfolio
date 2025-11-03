import { RevealOnScroll } from "../RevealOnScroll"

export const Project = () => {
    return <section id="project" 
    className="min-h-screen flex items-center justify-center py-20 ">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                {" "}
                Feature Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-blue-500/30 hover: shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">Portfolio</h3>
                    <p className="text-gray-400 mb-4">
                        A personal portfolio website to showcase my skills, projects, and experience as a web developer. Built with React, Tailwind CSS, and hosted on GitHub Pages.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">            
                         {["HTML5", "CSS3", "JavaScript", "PHP","MySQL",] .map((tech, key) => ( 
                         <span key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                             {tech }

                        </span> 
                         ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 trasition-colors my-4">
                            {" "}
                            View Projects → {" "}
                        </a>
                    </div>
                </div>
                 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:-blue-500/30 hover: shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">Gym Management</h3>
                    <p className="text-gray-400 mb-4">
                        A web-based application designed to streamline and automate the management of gym operations, including member enrollment, class scheduling, trainer assignments, and payment processing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">            
                         {["HTML5", "CSS3", "JavaScript", "PHP","MySQL"] .map((tech, key) => ( 
                         <span key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                             {tech }

                        </span> 
                         ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/BlackRose-26/gym_management.git" className="text-blue-400 hover:text-blue-300 trasition-colors my-4">
                            {" "}
                            View Projects → {" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>

}