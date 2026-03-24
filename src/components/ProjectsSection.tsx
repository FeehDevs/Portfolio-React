import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sistema de Autenticação (PHP)",
    description:
      "Sistema completo de autenticação de usuários desenvolvido com foco em boas práticas de backend.",
    techs: ["PHP", "PostgreSQL", "Docker", "HTML", "CSS", "JavaScript"],
    features: [
      "Cadastro e login de usuários",
      "Validação de dados no frontend e backend",
      "Hash de senha para segurança",
      "Estrutura MVC",
    ],
    learnings: [
      "Organização de backend com MVC",
      "Integração com banco de dados via PDO",
      "Boas práticas de segurança em autenticação",
      "Estruturação de aplicações web completas",
    ],
    githubUrl: "#",
  },
  {
    title: "Sistema de Gestão para Loja de Acrílicos",
    description:
      "Sistema de gerenciamento desenvolvido para simular um ambiente real de negócio, com controle de clientes, pedidos e operações internas.",
    techs: ["Python (Flask)", "SQLAlchemy", "PostgreSQL", "Docker", "React", "Postman"],
    features: [
      "Cadastro e gerenciamento de clientes",
      "Controle de pedidos",
      "Estrutura de API REST",
      "Arquitetura MVC",
      "Controle de usuários e permissões",
    ],
    learnings: [
      "Construção de APIs com Flask",
      "Uso do SQLAlchemy para ORM",
      "Estruturação de sistemas maiores",
      "Integração entre backend e banco de dados",
      "Containerização com Docker",
    ],
    note: "Projeto desenvolvido em ambiente privado por conter dados de uma empresa real. Disponível para demonstração mediante solicitação.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          Meus <span className="text-gradient">projetos</span>
        </h2>
        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
