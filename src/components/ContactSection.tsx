import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="container max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-4">
            📫 Vamos nos <span className="text-gradient">conectar!</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Estou aberto a oportunidades de estágio em desenvolvimento backend.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/fsilvagoncalves"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground text-sm font-medium transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)]"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/FeehDevs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground text-sm font-medium transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)]"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="mailto:felipedsg.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground text-sm font-medium transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)]"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="https://wa.me/5511958273689"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-secondary-foreground text-sm font-medium transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)]"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;