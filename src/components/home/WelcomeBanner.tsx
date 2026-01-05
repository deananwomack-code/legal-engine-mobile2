import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function WelcomeBanner() {
  return (
    <section className="px-4 py-4">
      <div 
        className="relative overflow-hidden rounded-2xl p-6"
        style={{ background: "var(--gradient-primary)" }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">
              AI-Powered
            </span>
          </div>
          
          <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
            Your Personal Legal Assistant
          </h2>
          
          <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
            Get instant answers to legal questions, analyze documents, and navigate the law with confidence.
          </p>
          
          <Link to="/assistant">
            <Button variant="gold" size="lg" className="w-full sm:w-auto">
              <MessageSquareIcon className="h-5 w-5 mr-2" />
              Start Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
