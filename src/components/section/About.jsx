import { RevealOnScroll } from "../RevealOnScroll"
import myImg from "../../assets/profile.jpg" 
export const About = () => {
    const workSkills = ["Electrical"," Data", "Voice",];
    const personalSkills = ["Communication","Leadrship", ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all text-center">

                        {}
                        <div className="flex justify-center mb-6">
                            <img
                                src={myImg}
                                alt="Profile"
                                className="w-32 h-32 rounded-full  object-cover shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div>

                        <p className="text-gray-300 mb-6">
                            I am Lester Pajarillo, a passionate and dedicated individual with a strong
                            interest in web development and programming. I enjoy creating dynamic and
                            user-friendly web applications that provide seamless experiences for users.
                            With a keen eye for detail and a commitment to continuous learning,
                            I am eager to contribute my workSkills and create innovative solutions that
                            make a positive impact.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Work Skills</h3>
                                <div className="flex flex-wrap gap-2 justify-center text-center align-middle">
                                    {workSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Personal Skill</h3>
                                <div className="flex flex-wrap gap-2 justify-center text-center align-middle">
                                    {personalSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education + Work */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S Computer Science</strong> - Cavite State University (2022-2025)
                                </li>
                                <li>
                                    <strong>EIM NC2 passer </strong> - General Mariano Alvarez (2018-2023)
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div >
                                    <h4 className="font-semibold">Data and Electrical (2020)</h4>
                                    <p>Developed and maintained my skill.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Traning at Salcedo Tower Makati (2019)</h4>
                                    <p>Assisted by VED Electrical Services.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};
