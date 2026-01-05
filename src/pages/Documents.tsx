import { useState } from "react";
import { 
  FileText, 
  Upload, 
  Search, 
  FolderOpen, 
  File, 
  FileCheck, 
  Clock,
  ArrowLeft,
  Plus,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

const documents = [
  {
    id: 1,
    name: "Employment Contract.pdf",
    type: "Contract",
    size: "2.4 MB",
    date: "Jan 3, 2026",
    status: "analyzed",
  },
  {
    id: 2,
    name: "NDA Agreement.docx",
    type: "Agreement",
    size: "1.1 MB",
    date: "Dec 28, 2025",
    status: "pending",
  },
  {
    id: 3,
    name: "Lease Agreement.pdf",
    type: "Contract",
    size: "3.2 MB",
    date: "Dec 15, 2025",
    status: "analyzed",
  },
  {
    id: 4,
    name: "Power of Attorney.pdf",
    type: "Legal Form",
    size: "0.8 MB",
    date: "Dec 10, 2025",
    status: "analyzed",
  },
];

const folders = [
  { id: 1, name: "Contracts", count: 12, color: "bg-accent/10 text-accent" },
  { id: 2, name: "Agreements", count: 8, color: "bg-primary/10 text-primary" },
  { id: 3, name: "Legal Forms", count: 5, color: "bg-success/10 text-success" },
];

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
                Documents
              </h1>
            </div>
            <Button variant="gold" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pb-24 animate-fade-in">
        {/* Search Bar */}
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-sm"
            />
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Upload Area */}
        <div className="px-4 mb-6">
          <div className="border-2 border-dashed border-border rounded-2xl p-6 text-center bg-card/50 hover:border-accent/50 transition-colors cursor-pointer">
            <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <Upload className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              Upload Document
            </h3>
            <p className="text-sm text-muted-foreground">
              Drag & drop or tap to upload
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PDF, DOC, DOCX up to 10MB
            </p>
          </div>
        </div>

        {/* Folders */}
        <section className="px-4 mb-6">
          <h2 className="font-semibold text-foreground mb-3">Folders</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
            {folders.map((folder) => (
              <div
                key={folder.id}
                className="flex-shrink-0 flex items-center gap-3 px-4 py-3 bg-card rounded-xl shadow-sm border border-border min-w-[140px]"
              >
                <div className={cn(
                  "h-10 w-10 rounded-lg flex items-center justify-center",
                  folder.color
                )}>
                  <FolderOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">
                    {folder.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {folder.count} files
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Documents */}
        <section className="px-4">
          <h2 className="font-semibold text-foreground mb-3">Recent Documents</h2>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm truncate">
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">
                      {doc.type}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {doc.size}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {doc.status === "analyzed" ? (
                    <span className="flex items-center gap-1 text-xs text-success">
                      <FileCheck className="h-3 w-3" />
                      Analyzed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-warning">
                      <Clock className="h-3 w-3" />
                      Pending
                    </span>
                  )}
                  <span className="text-[10px] text-muted-foreground">
                    {doc.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
};

export default Documents;
