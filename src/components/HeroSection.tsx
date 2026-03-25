import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Hero glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="max-w-2xl space-y-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          Olá, eu sou{" "}
          <span className="text-gradient relative">
            Felipe Gonçalves
            <span
              className="absolute -inset-x-2 -inset-y-1 rounded-lg opacity-20 blur-xl -z-10"
              style={{ background: "var(--gradient-primary)" }}
            />
          </span>{" "}
          👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em
          desenvolvimento backend. Tenho experiência prática construindo
          aplicações completas utilizando PHP, Python (Flask), PostgreSQL e
          Docker, aplicando conceitos como arquitetura MVC, validação de dados e
          integração com banco de dados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Atualmente estou em busca da minha primeira oportunidade como
          estagiário em desenvolvimento, onde eu possa evoluir tecnicamente e
          contribuir com projetos reais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 pt-2"
        >
          <a
            href="https://www.linkedin.com/in/fsilvagoncalves/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/FeehDevs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border border-border bg-secondary text-secondary-foreground hover:border-primary/30 hover:bg-secondary/80 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)]"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        onClick={scrollToProjects}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
        aria-label="Ir para projetos"
      >
        <span className="text-sm font-medium">Ver projetos</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
