import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { getTechInfo } from "@/lib/techIcons";

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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-xl bg-card border border-border p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.15)] hover:border-primary/20"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5">{description}</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {techs.map((t) => {
          const techInfo = getTechInfo(t);
          const content = (
            <>
              {techInfo?.icon}
              {t}
            </>
          );

          return techInfo ? (
            <a
              key={t}
              href={techInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium border border-primary/10 hover:border-primary/30 hover:bg-primary/15 transition-all duration-200"
            >
              {content}
            </a>
          ) : (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium border border-primary/10"
            >
              {content}
            </span>
          );
        })}
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
    </motion.div>
  );
};

export default ProjectCard;
