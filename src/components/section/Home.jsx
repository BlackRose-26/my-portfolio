import { RevealOnScroll } from "../RevealOnScroll"
import bgImage from "../../assets/t4.png" 

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-left relative overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-transparent"></div>
            <RevealOnScroll>
                <div className="text-left z-10 px-4 max-w-xl pl-8 relative">
                    <h1
                    className="
                        text-5xl md:text-7xl font-bold mb-6
                        bg-linear-to-r from-blue-500 via-purple-500 to-pink-200
                        bg-clip-text text-transparent
                        leading-tight
                        bg-size-[300%_300%]
                        animate-[rainbow_6s_linear_infinite]
                    "
                    >
                    HI, I'm Lester Pajarillo
                    <br />Welcome to my World
                    </h1>


                    <p className="text-gray-400 text-lg mb-8 mx-auto">
                        “Programs must be written for people to read, and only incidentally for machines to execute.”
                    </p>

                    <div className="flex justify-left space-x-4">
                        <a
                            href="#project"
                            className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
