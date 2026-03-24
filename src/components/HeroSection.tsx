import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Olá, eu sou{" "}
          <span className="text-gradient">Felipe Gonçalves</span> 👋
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em
          desenvolvimento backend. Tenho experiência prática construindo
          aplicações completas utilizando PHP, Python (Flask), PostgreSQL e
          Docker, aplicando conceitos como arquitetura MVC, validação de dados e
          integração com banco de dados.
        </p>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Atualmente estou em busca da minha primeira oportunidade como
          estagiário em desenvolvimento, onde eu possa evoluir tecnicamente e
          contribuir com projetos reais.
        </p>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
        aria-label="Ir para projetos"
      >
        <span className="text-sm font-medium">Ver projetos</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
