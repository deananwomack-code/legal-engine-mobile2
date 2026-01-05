import { Clock, ChevronRight, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: 1,
    title: "Contract Review - Smith LLC",
    status: "pending",
    date: "Jan 3, 2026",
    type: "Contract",
  },
  {
    id: 2,
    title: "Employment Dispute",
    status: "active",
    date: "Dec 28, 2025",
    type: "Employment",
  },
  {
    id: 3,
    title: "Trademark Registration",
    status: "completed",
    date: "Dec 15, 2025",
    type: "IP Law",
  },
];

const statusConfig = {
  pending: {
    icon: Clock,
    label: "Pending",
    color: "text-warning bg-warning/10",
  },
  active: {
    icon: Loader2,
    label: "Active",
    color: "text-accent bg-accent/10",
  },
  completed: {
    icon: CheckCircle2,
    label: "Completed",
    color: "text-success bg-success/10",
  },
};

export function RecentCases() {
  return (
    <section className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl font-bold text-foreground">
          Recent Cases
        </h2>
        <Link 
          to="/cases" 
          className="text-sm font-medium text-accent flex items-center gap-1 hover:gap-2 transition-all"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="space-y-3">
        {cases.map((caseItem) => {
          const status = statusConfig[caseItem.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;
          
          return (
            <Link
              key={caseItem.id}
              to={`/cases/${caseItem.id}`}
              className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-all duration-200 group"
            >
              <div className={cn(
                "h-10 w-10 rounded-lg flex items-center justify-center shrink-0",
                status.color
              )}>
                <StatusIcon className="h-5 w-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm truncate group-hover:text-accent transition-colors">
                  {caseItem.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {caseItem.type}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {caseItem.date}
                  </span>
                </div>
              </div>
              
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
