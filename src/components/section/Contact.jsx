import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/lesterpajarillo26/",
      icon: <FaFacebook size={28} />,
    },
    {
      name: "Email",
      href: "mailto:lesterpajarillo1342@gmail.com",
      icon: <MdEmail size={28} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/BlackRose-26",
      icon: <FaGithub size={28} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/lesterpajarillo26/",
      icon: <FaInstagram size={28} />,
    },
    {
      name: "Telegram",
      href: "https://t.me/Lester",
      icon: <FaTelegram size={28} />,
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-150 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Social Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 text-white backdrop-blur-sm 
                transition-all duration-300 cursor-pointer
                hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="font-medium">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
