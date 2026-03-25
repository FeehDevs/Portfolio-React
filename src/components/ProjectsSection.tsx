import { ExternalLink, Lock, GitBranch, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getTechInfo } from "@/lib/techIcons";
import AnimatedSection from "./AnimatedSection";

interface TechGroup {
  label: string;
  techs: string[];
}

interface ProjetoInfo {
  url: string;
  status: string;
  statusColor: string;
  visual: "auth-api" | "acrylic-api";
}

interface ProjectData {
  title: string;
  subtitle: string;
  impact: string;
  description: string;
  techGroups: TechGroup[];
  features: string[];
  learnings: string[];
  projetos: ProjetoInfo[];
  note?: string;
}

const projects: ProjectData[] = [
  {
    title: "Sistema de Autenticação",
    subtitle: "PHP · Backend · Segurança",
    impact: "Sistema completo de autenticação com foco em segurança e boas práticas",
    description:
      "Aplicação web com cadastro, login e validação de dados, estruturada com o padrão MVC e integração segura com banco de dados.",
    techGroups: [
      { label: "Backend", techs: ["PHP"] },
      { label: "Banco", techs: ["PostgreSQL"] },
      { label: "Infra", techs: ["Docker"] },
      { label: "Frontend", techs: ["HTML", "CSS", "JavaScript"] },
    ],
    features: [
      "Cadastro e login com validação dupla",
      "Hash de senha (bcrypt) para segurança",
      "Arquitetura MVC completa",
    ],
    learnings: [
      "Organização de backend com MVC",
      "Integração segura via PDO",
      "Boas práticas de autenticação",
    ],
        projetos: [
      {
        url: "https://github.com/FeehDevs/php-auth-system",
        status: "Funcional",
        statusColor: "hsl(var(--primary))",
        visual: "auth-api",
      },
    ],
  },
  {
    title: "Sistema de Gestão — Loja de Acrílicos",
    subtitle: "Flask · API REST · PostgreSQL",
    impact: "Sistema de gerenciamento real com controle de clientes, pedidos e operações",
    description:
      "API REST completa construída para um ambiente real de negócio, com ORM, containerização e estrutura preparada para escalar.",
    techGroups: [
      { label: "Backend", techs: ["Python (Flask)", "SQLAlchemy"] },
      { label: "Banco", techs: ["PostgreSQL"] },
      { label: "Infra", techs: ["Docker", "Postman"] },
      { label: "Frontend", techs: ["React"] },
    ],
    features: [
      "CRUD completo de clientes e pedidos",
      "API REST estruturada",
      "Sistema de permissões preparado",
    ],
    learnings: [
      "APIs com Flask + SQLAlchemy ORM",
      "Containerização com Docker",
      "Estruturação de sistemas maiores",
    ],
    projetos: [
      {
        url: "https://github.com/CommitCreww/acrilico_dashboard",
        status: "Funcional",
        statusColor: "hsl(var(--primary))",
        visual: "acrylic-api",
      }
    ],

  },
];

const AuthApiMock = () => (
  <div className="rounded-xl bg-background/60 border border-border p-4 text-xs font-mono space-y-3 overflow-hidden">
    <div className="flex items-center gap-2 text-muted-foreground mb-1">
      <span className="w-2 h-2 rounded-full" style={{ background: "hsl(142 71% 45%)" }} />
      <span>POST /api/auth</span>
    </div>
    <div className="space-y-1.5 text-muted-foreground">
      <div className="text-primary/70">{"// Request"}</div>
      <div>{"{"}</div>
      <div className="pl-4">
        <span className="text-primary">"email"</span>: "user@mail.com",
      </div>
      <div className="pl-4">
        <span className="text-primary">"password"</span>: "••••••••"
      </div>
      <div>{"}"}</div>
    </div>
    <div className="border-t border-border pt-3 space-y-1.5 text-muted-foreground">
      <div style={{ color: "hsl(142 71% 65% / 0.7)" }}>{"// Response 200"}</div>
      <div>{"{"}</div>
      <div className="pl-4">
        <span style={{ color: "hsl(142 71% 65%)" }}>"token"</span>: "eyJhbGci..."
      </div>
      <div className="pl-4">
        <span style={{ color: "hsl(142 71% 65%)" }}>"user"</span>: {"{ "}id, name{" }"}
      </div>
      <div>{"}"}</div>
    </div>
  </div>
);

const AcrylicApiMock = () => (
  <div className="rounded-xl bg-background/60 border border-border p-4 text-xs font-mono space-y-3 overflow-hidden">
    <div className="flex items-center gap-2 text-muted-foreground mb-1">
      <span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--primary))" }} />
      <span>GET /api/pedidos</span>
    </div>
    <div className="space-y-1.5 text-muted-foreground">
      <div className="text-primary/70">{"// Response 200"}</div>
      <div>{"["}</div>
      <div className="pl-4">{"{"}</div>
      <div className="pl-6">
        <span className="text-primary">"id"</span>: 1,
      </div>
      <div className="pl-6">
        <span className="text-primary">"cliente"</span>: "Empresa X",
      </div>
      <div className="pl-6">
        <span className="text-primary">"status"</span>: "em_producao",
      </div>
      <div className="pl-6">
        <span className="text-primary">"itens"</span>: 3
      </div>
      <div className="pl-4">{"}"}</div>
      <div>{"]"}</div>
    </div>
  </div>
);

const ProjectVisual = ({ type }: { type: "auth-api" | "acrylic-api" }) => {
  return type === "auth-api" ? <AuthApiMock /> : <AcrylicApiMock />;
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-28 px-6">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2">
            Meus <span className="text-gradient">projetos</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-14">
            Sistemas reais construídos do zero, focados em backend
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {projects.map((p, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <AnimatedSection key={p.title} delay={0.1}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-card border border-border p-6 sm:p-8 transition-all duration-300 hover:border-primary/15 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.12)]"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    {p.projetos[0] && (
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                        style={{
                          color: p.projetos[0].statusColor,
                          borderColor: `${p.projetos[0].statusColor}40`,
                          backgroundColor: `${p.projetos[0].statusColor}10`,
                        }}
                      >
                        {p.projetos[0].status}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mb-3 tracking-wide">
                    {p.subtitle}
                  </p>
                  <p className="text-sm text-primary/80 font-medium mb-4 italic">
                    "{p.impact}"
                  </p>

                  {/* Content grid: text + visual */}
                  <div className={`grid lg:grid-cols-2 gap-8 mb-6 ${isReversed ? "lg:direction-rtl" : ""}`}>
                    <div className={isReversed ? "lg:order-2" : ""}>
                      <p className="text-sm text-secondary-foreground leading-relaxed mb-5">
                        {p.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Funcionalidades
                        </h4>
                        <ul className="space-y-1.5">
                          {p.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                              <span className="text-primary mt-0.5 text-xs">▸</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learnings */}
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Aprendizados-chave
                        </h4>
                        <ul className="space-y-1.5">
                          {p.learnings.map((l, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                              <span className="text-primary mt-0.5 text-xs">▸</span>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={isReversed ? "lg:order-1" : ""}>
                      {p.projetos[0] && <ProjectVisual type={p.projetos[0].visual} />}

                      {/* Tech groups */}
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {p.techGroups.map((group) => (
                          <div key={group.label}>
                            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider block mb-1">
                              {group.label}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {group.techs.map((t) => {
                                const info = getTechInfo(t);
                                return info ? (
                                  <a
                                    key={t}
                                    href={info.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary font-medium border border-primary/10 hover:border-primary/30 transition-all duration-200"
                                  >
                                    {info.icon}
                                    {t}
                                  </a>
                                ) : (
                                  <span
                                    key={t}
                                    className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary font-medium border border-primary/10"
                                  >
                                    {t}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer: note + CTAs */}
                  <div className="border-t border-border pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {p.note ? (
                      <div className="flex items-start gap-2 text-xs text-muted-foreground italic max-w-md">
                        <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{p.note}</span>
                      </div>
                    ) : (
                      <div />
                    )}

                    <div className="flex items-center gap-3">
                     {p.projetos.map((proj, idx) => (
                        <a
                          key={idx}
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_16px_-4px_hsl(var(--primary)/0.25)]"
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                          Ver código no GitHub
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
