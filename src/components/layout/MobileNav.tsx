import { Home, MessageSquare, FileText, Briefcase, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: MessageSquare, label: "Assistant", path: "/assistant" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: Briefcase, label: "Cases", path: "/cases" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-lg">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center py-2 px-4 rounded-xl transition-all duration-200",
                  isActive 
                    ? "text-accent bg-accent/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon 
                  className={cn(
                    "h-5 w-5 mb-1 transition-transform",
                    isActive && "scale-110"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className={cn(
                  "text-[10px] font-medium",
                  isActive && "font-semibold"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
