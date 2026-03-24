import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  features: string[];
  learnings: string[];
  githubUrl?: string;
  note?: string;
}

const ProjectCard = ({ title, description, techs, features, learnings, githubUrl, note }: ProjectCardProps) => {
  return (
    <div className="rounded-xl bg-card border border-border p-6 sm:p-8 card-hover">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5">{description}</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {techs.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
            {t}
          </span>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Funcionalidades
          </h4>
          <ul className="space-y-1.5 text-sm text-secondary-foreground">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span> {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Aprendizados
          </h4>
          <ul className="space-y-1.5 text-sm text-secondary-foreground">
            {learnings.map((l, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span> {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {note && (
        <p className="text-xs text-muted-foreground italic border-t border-border pt-4 mb-4">
          {note}
        </p>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
        >
          Ver no GitHub <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
