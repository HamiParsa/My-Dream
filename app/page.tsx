"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaLaptopCode,
  FaReact,
  FaJsSquare,
  FaDatabase,
  FaMobileAlt,
  FaStar,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

// اگر میخوای آیکون Next.js / Python / Django اضافه کنیم، svg سفارشی استفاده می‌کنیم
import { SiNextdotjs, SiPython, SiDjango } from "react-icons/si";

// Gallery Dreams
const galleryDreams = [
  { title: "Travel the World", icon: <FaPlane /> },
  { title: "Build Epic Apps", icon: <FaLaptopCode /> },
  { title: "Achieve Stardom", icon: <FaStar /> },
  { title: "Master React", icon: <FaReact /> },
  { title: "Next.js Projects", icon: <SiNextdotjs /> },
  { title: "Python & Django", icon: <SiPython /> },
];

// Skills
const skills = [
  FaReact,
  SiNextdotjs,
  SiPython,
  SiDjango,
  FaJsSquare,
  FaDatabase,
];

// Projects
const projects = [
  { title: "Portfolio Site", icon: <FaLaptopCode /> },
  { title: "E-Commerce App", icon: <SiNextdotjs /> },
  { title: "AI Chatbot", icon: <FaReact /> },
  { title: "Travel App", icon: <FaPlane /> },
  { title: "Mobile Game", icon: <FaMobileAlt /> },
  { title: "Database Project", icon: <FaDatabase /> },
];

// Contact
const contacts = [FaGithub, FaLinkedin, FaEnvelope];

export default function Home() {
  const fullText = "Code the Future & Travel Beyond Borders";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number }[]
  >([]);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typeInterval);
    }, 50 + Math.random() * 50);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Particle init (Client-side only)
  useEffect(() => {
    const newParticles = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] text-white overflow-x-hidden relative">
      {/* ================= Hero Section ================= */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: p.size,
              height: p.size,
              top: `${p.y}%`,
              left: `${p.x}%`,
              opacity: Math.random() * 0.7 + 0.3,
              filter: `blur(${Math.random() * 2}px)`,
            }}
            animate={{
              y: [0, Math.random() * 40, 0],
              x: [0, Math.random() * 40, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 text-blue-400 text-6xl"
          animate={{ y: [0, 25, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaPlane />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-purple-500 text-7xl"
          animate={{ y: [0, -25, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FaLaptopCode />
        </motion.div>

        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex justify-center flex-wrap">
            {displayText.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
              >
                {char}
              </motion.span>
            ))}
            <span
              className={`ml-1 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              } animate-pulse`}
            >
              |
            </span>
          </h1>
          <motion.p
            className="text-gray-300 text-xl md:text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            Programming & Migration – My Cinematic Journey
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-blue-500 text-white rounded-full text-lg hover:shadow-lg hover:scale-110 transition-all"
            whileHover={{ boxShadow: "0px 0px 40px rgba(0,123,255,0.9)" }}
          >
            Explore My World
          </motion.button>
        </div>

        <div className="absolute w-full h-full top-0 left-0 bg-linear-to-r from-purple-500 via-blue-500 to-pink-500 opacity-20 blur-3xl animate-[gradient_20s_linear_infinite]"></div>
      </section>

      {/* ================= About Me ================= */}
      <section className="w-full py-32 bg-[#111111] flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <motion.div
          className="max-w-3xl text-center text-gray-300 text-lg md:text-xl relative p-6 bg-[#0a0a0a] rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Im a passionate developer exploring{" "}
            <span className="text-blue-400 font-bold">React</span>,{" "}
            <span className="text-green-400 font-bold">Next.js</span>,{" "}
            <span className="text-yellow-400 font-bold">Python</span>, and{" "}
            <span className="text-indigo-400 font-bold">Django</span> to create
            amazing digital experiences. <br />I aspire to become a{" "}
            <span className="text-pink-400 font-bold">
              top-tier software engineer
            </span>{" "}
            and migrate while building{" "}
            <span className="text-purple-400 font-bold">
              world-class projects
            </span>
            .
          </p>
        </motion.div>
      </section>

      {/* ================= Dream Gallery ================= */}
      <section className="w-full py-32 bg-[#0a0a0a] flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Dream Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryDreams.map((dream, i) => (
            <motion.div
              key={i}
              className="bg-[#111111] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="text-5xl mb-4 text-blue-400">{dream.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {dream.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Skills ================= */}
      <section className="w-full py-32 bg-[#111111] flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 text-6xl">
          {skills.map((Icon, i) => (
            <motion.div
              key={i}
              className="text-white hover:text-blue-400 transition-colors"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Projects ================= */}
      <section className="w-full py-32 bg-[#0a0a0a] flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#111111] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="text-5xl mb-4 text-purple-400">
                {project.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300">
                High-quality project showcasing my skills.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section className="w-full py-32 bg-[#111111] flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Contact Me</h2>
        <div className="flex gap-8 text-4xl">
          {contacts.map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="hover:text-blue-400 transition-colors"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </section>
      {/* ================= Unique Footer ================= */}
      <footer className="w-full bg-[#0a0a0a] py-16 flex flex-col items-center border-t border-gray-800 relative overflow-hidden">
        {/* Neon Gradient Background */}
        <motion.div className="absolute inset-0 bg-linear-to-r from-purple-500 via-blue-400 to-pink-500 opacity-10 blur-3xl animate-[gradient_25s_linear_infinite]" />

        <div className="flex justify-center items-center w-full max-w-6xl px-4 relative z-10">
          {/* Footer Text */}
          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Designed & Built with 💜 by Me
          </p>
        </div>
      </footer>
    </div>
  );
}
