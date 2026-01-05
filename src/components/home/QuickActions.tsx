import { 
  MessageSquare, 
  FileSearch, 
  Scale, 
  FileText, 
  Users, 
  BookOpen 
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const actions = [
  {
    icon: MessageSquare,
    label: "AI Assistant",
    description: "Ask legal questions",
    path: "/assistant",
    color: "bg-accent/10 text-accent",
    featured: true,
  },
  {
    icon: FileSearch,
    label: "Scan Document",
    description: "Analyze contracts",
    path: "/documents",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Scale,
    label: "Case Lookup",
    description: "Search precedents",
    path: "/cases",
    color: "bg-success/10 text-success",
  },
  {
    icon: FileText,
    label: "Templates",
    description: "Legal documents",
    path: "/documents",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: Users,
    label: "Find Lawyer",
    description: "Connect with pros",
    path: "/profile",
    color: "bg-navy-light/10 text-navy-light",
  },
  {
    icon: BookOpen,
    label: "Legal Guide",
    description: "Know your rights",
    path: "/assistant",
    color: "bg-destructive/10 text-destructive",
  },
];

export function QuickActions() {
  return (
    <section className="px-4 py-4">
      <h2 className="font-serif text-xl font-bold text-foreground mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              to={action.path}
              className={cn(
                "flex flex-col items-center p-4 rounded-2xl bg-card shadow-card transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                action.featured && "col-span-1 ring-2 ring-accent/30"
              )}
            >
              <div className={cn(
                "h-12 w-12 rounded-xl flex items-center justify-center mb-2",
                action.color
              )}>
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold text-foreground text-center leading-tight">
                {action.label}
              </span>
              <span className="text-[10px] text-muted-foreground text-center mt-0.5">
                {action.description}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
