import { Linkedin, Github, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          📫 Vamos nos <span className="text-gradient">conectar!</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Estou aberto a oportunidades de estágio em desenvolvimento backend.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground text-sm font-medium card-hover hover:border-primary/30"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground text-sm font-medium card-hover hover:border-primary/30"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
