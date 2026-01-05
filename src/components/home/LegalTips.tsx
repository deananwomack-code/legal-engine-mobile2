import { Lightbulb, ChevronRight } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Always read the fine print",
    description: "Contract terms in small text can significantly impact your rights.",
  },
  {
    id: 2,
    title: "Document everything",
    description: "Keep records of all communications and agreements in legal matters.",
  },
  {
    id: 3,
    title: "Know the statute of limitations",
    description: "Legal claims have time limits. Act promptly to protect your rights.",
  },
];

export function LegalTips() {
  return (
    <section className="px-4 py-4 mb-24">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-accent" />
        <h2 className="font-serif text-xl font-bold text-foreground">
          Legal Tips
        </h2>
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="flex-shrink-0 w-64 p-4 bg-card rounded-xl shadow-card border border-border/50"
          >
            <h3 className="font-semibold text-foreground text-sm mb-2">
              {tip.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
