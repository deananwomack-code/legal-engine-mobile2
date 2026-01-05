import { useState } from "react";
import { 
  Briefcase, 
  Search, 
  Plus, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  Filter,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: 1,
    title: "Contract Review - Smith LLC",
    description: "Review and analysis of partnership agreement",
    status: "active",
    priority: "high",
    date: "Jan 3, 2026",
    deadline: "Jan 15, 2026",
    type: "Contract Law",
  },
  {
    id: 2,
    title: "Employment Dispute Resolution",
    description: "Wrongful termination claim consultation",
    status: "pending",
    priority: "medium",
    date: "Dec 28, 2025",
    deadline: "Feb 1, 2026",
    type: "Employment Law",
  },
  {
    id: 3,
    title: "Trademark Registration",
    description: "Application for brand trademark protection",
    status: "completed",
    priority: "low",
    date: "Dec 15, 2025",
    deadline: "Dec 20, 2025",
    type: "IP Law",
  },
  {
    id: 4,
    title: "Real Estate Transaction",
    description: "Property purchase agreement review",
    status: "active",
    priority: "high",
    date: "Dec 10, 2025",
    deadline: "Jan 20, 2026",
    type: "Real Estate",
  },
  {
    id: 5,
    title: "Business Formation - Tech Startup",
    description: "LLC formation and operating agreement",
    status: "pending",
    priority: "medium",
    date: "Dec 5, 2025",
    deadline: "Jan 30, 2026",
    type: "Business Law",
  },
];

const statusConfig = {
  pending: {
    icon: Clock,
    label: "Pending",
    color: "bg-warning/10 text-warning border-warning/30",
  },
  active: {
    icon: AlertCircle,
    label: "Active",
    color: "bg-accent/10 text-accent border-accent/30",
  },
  completed: {
    icon: CheckCircle2,
    label: "Completed",
    color: "bg-success/10 text-success border-success/30",
  },
};

const priorityColors = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-warning/10 text-warning",
  low: "bg-muted text-muted-foreground",
};

const Cases = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "pending" | "completed">("all");

  const filteredCases = activeFilter === "all" 
    ? cases 
    : cases.filter(c => c.status === activeFilter);

  const stats = {
    active: cases.filter(c => c.status === "active").length,
    pending: cases.filter(c => c.status === "pending").length,
    completed: cases.filter(c => c.status === "completed").length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 safe-area-top">
        <div className="bg-card/95 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Link to="/">
                <Button variant="ghost" size="icon-sm">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="font-serif text-xl font-bold text-foreground">
                My Cases
              </h1>
            </div>
            <Button variant="gold" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pb-24 animate-fade-in">
        {/* Stats */}
        <div className="px-4 py-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card rounded-xl p-4 shadow-card text-center">
              <div className="text-2xl font-bold text-accent">{stats.active}</div>
              <div className="text-xs text-muted-foreground mt-1">Active</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-card text-center">
              <div className="text-2xl font-bold text-warning">{stats.pending}</div>
              <div className="text-xs text-muted-foreground mt-1">Pending</div>
            </div>
            <div className="bg-card rounded-xl p-4 shadow-card text-center">
              <div className="text-2xl font-bold text-success">{stats.completed}</div>
              <div className="text-xs text-muted-foreground mt-1">Completed</div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="px-4 mb-4">
          <div className="relative mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cases..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-sm"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {(["all", "active", "pending", "completed"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                )}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Cases List */}
        <section className="px-4">
          <div className="space-y-3">
            {filteredCases.map((caseItem) => {
              const status = statusConfig[caseItem.status as keyof typeof statusConfig];
              const StatusIcon = status.icon;
              
              return (
                <div
                  key={caseItem.id}
                  className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn(
                            "px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase",
                            priorityColors[caseItem.priority as keyof typeof priorityColors]
                          )}>
                            {caseItem.priority}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {caseItem.type}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {caseItem.title}
                        </h3>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {caseItem.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className={cn(
                        "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                        status.color
                      )}>
                        <StatusIcon className="h-3 w-3" />
                        {status.label}
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Due: {caseItem.deadline}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
};

export default Cases;
