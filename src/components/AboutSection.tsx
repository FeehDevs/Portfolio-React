import AnimatedSection from "./AnimatedSection";
import { getTechInfo } from "@/lib/techIcons";
import { motion } from "framer-motion";
import { Server, Database, Code2, BookOpen, Target, Layers } from "lucide-react";

const techCategories = [
  {
    label: "Backend",
    techs: ["PHP", "Python (Flask)", "Flask"],
  },
  {
    label: "Banco de dados",
    techs: ["PostgreSQL", "SQLAlchemy"],
  },
  {
    label: "Infraestrutura",
    techs: ["Docker"],
  },
  {
    label: "Outros",
    techs: ["JavaScript", "React"],
  },
];

const highlights = [
  { icon: Server, label: "Foco em backend", value: "APIs & MVC" },
  { icon: Database, label: "Banco de dados", value: "PostgreSQL" },
  { icon: Layers, label: "Projetos reais", value: "2 sistemas" },
  { icon: Code2, label: "Tecnologias", value: "8+ techs" },
];

const studying = ["Arquitetura de APIs", "Testes automatizados", "CI/CD", "Clean Code"];

const learnings = [
  "Construção de sistemas completos do zero ao deploy",
  "Integração backend ↔ banco de dados",
  "Organização de código com padrão MVC",
  "Containerização de aplicações",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-28 px-6">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
              Sobre <span className="text-gradient">mim</span>
            </h2>
            <p className="text-muted-foreground text-sm font-medium">
              Foco em desenvolvimento backend
            </p>
          </div>
        </AnimatedSection>

        {/* Two-column: text left, cards right */}
        <div className="grid lg:grid-cols-5 gap-10 mb-16">
          {/* Left: 3 text blocks */}
          <div className="lg:col-span-3 space-y-8">
            <AnimatedSection delay={0.05}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary" />
                  Quem eu sou
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  Estudante de Análise e Desenvolvimento de Sistemas, com formação
                  técnica em Informática pela ETEC de Vila Formosa. Desde o início
                  da minha jornada, tenho focado em entender como sistemas são
                  construídos do zero — do backend ao deploy.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary" />
                  Como eu aprendo
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  Aprendo construindo projetos reais — enfrentando problemas de
                  conexão com banco, estruturação de código e organização de
                  aplicações. Cada erro resolvido se torna um aprendizado técnico
                  concreto.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary" />
                  Objetivo atual
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  Conquistar minha primeira oportunidade como estagiário em
                  desenvolvimento, onde eu possa evoluir tecnicamente e contribuir
                  com projetos reais em equipe.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: highlight cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 content-start">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.label} delay={0.1 + i * 0.05}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl bg-card border border-border p-4 flex flex-col gap-2 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.15)]"
                >
                  <h.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground font-medium">{h.label}</span>
                  <span className="text-sm font-semibold text-foreground">{h.value}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Tech categories */}
        <AnimatedSection delay={0.2}>
          <div className="mb-14">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Tecnologias
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techCategories.map((cat) => (
                <div key={cat.label}>
                  <span className="text-xs text-muted-foreground font-medium mb-2 block">{cat.label}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.techs.map((tech) => {
                      const info = getTechInfo(tech);
                      return info ? (
                        <a
                          key={tech}
                          href={info.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium border border-border hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          {info.icon}
                          {tech}
                        </a>
                      ) : (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground font-medium border border-border"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Currently studying + Key learnings */}
        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatedSection delay={0.25}>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Atualmente estudando</h3>
              </div>
              <ul className="space-y-2">
                {studying.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Principais aprendizados</h3>
              </div>
              <ul className="space-y-2">
                {learnings.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
