import { Bell, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title?: string;
  showNotification?: boolean;
}

export function Header({ title = "Legal Engine", showNotification = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 safe-area-top">
      <div className="bg-card/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <Scale className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-lg font-bold text-foreground">
                {title}
              </h1>
            </div>
          </div>
          
          {showNotification && (
            <Button variant="icon-circle" size="icon">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-accent" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
