import { SiPhp, SiPostgresql, SiDocker, SiHtml5, SiCss, SiJavascript, SiPython, SiFlask, SiReact, SiPostman, SiSqlalchemy } from "react-icons/si";
import { type ReactNode } from "react";

interface TechInfo {
  icon: ReactNode;
  url: string;
}

export const techMap: Record<string, TechInfo> = {
  "PHP": {
    icon: <SiPhp className="w-3.5 h-3.5" />,
    url: "https://www.php.net/docs.php",
  },
  "PostgreSQL": {
    icon: <SiPostgresql className="w-3.5 h-3.5" />,
    url: "https://www.postgresql.org/docs/",
  },
  "Docker": {
    icon: <SiDocker className="w-3.5 h-3.5" />,
    url: "https://docs.docker.com/",
  },
  "HTML": {
    icon: <SiHtml5 className="w-3.5 h-3.5" />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  "CSS": {
    icon: <SiCss className="w-3.5 h-3.5" />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  "JavaScript": {
    icon: <SiJavascript className="w-3.5 h-3.5" />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  "Python (Flask)": {
    icon: <SiPython className="w-3.5 h-3.5" />,
    url: "https://docs.python.org/3/",
  },
  "Flask": {
    icon: <SiFlask className="w-3.5 h-3.5" />,
    url: "https://flask.palletsprojects.com/",
  },
  "SQLAlchemy": {
    icon: <SiSqlalchemy className="w-3.5 h-3.5" />,
    url: "https://docs.sqlalchemy.org/",
  },
  "React": {
    icon: <SiReact className="w-3.5 h-3.5" />,
    url: "https://react.dev/",
  },
  "Postman": {
    icon: <SiPostman className="w-3.5 h-3.5" />,
    url: "https://learning.postman.com/docs/",
  },
};

export const getTechInfo = (name: string): TechInfo | null => {
  return techMap[name] || null;
};
