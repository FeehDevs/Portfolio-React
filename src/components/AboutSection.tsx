import AnimatedSection from "./AnimatedSection";
import { getTechInfo } from "@/lib/techIcons";

const skills = [
  "PHP", "Python (Flask)", "PostgreSQL", "Docker",
  "Flask", "SQLAlchemy", "React", "JavaScript"
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="container max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8">
            Sobre <span className="text-gradient">mim</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-5 text-secondary-foreground leading-relaxed">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e tenho
              formação técnica em Informática pela ETEC de Vila Formosa. Desde o
              início dos meus estudos, venho focando em desenvolvimento backend,
              buscando entender na prática como sistemas são construídos do zero
              até o deploy.
            </p>
            <p>
              Gosto de aprender construindo projetos reais, enfrentando problemas
              de conexão com banco, estruturação de código e organização de
              aplicações. Atualmente estou focado em evoluir como desenvolvedor
              backend e conquistar minha primeira oportunidade na área.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                const techInfo = getTechInfo(skill);
                const content = (
                  <>
                    {techInfo?.icon}
                    {skill}
                  </>
                );

                return techInfo ? (
                  <a
                    key={skill}
                    href={techInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/30 transition-all duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border"
                  >
                    {content}
                  </span>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
