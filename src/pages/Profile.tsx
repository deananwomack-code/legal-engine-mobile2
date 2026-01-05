import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  ArrowLeft,
  Edit3,
  Mail,
  Phone,
  MapPin,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    icon: Bell,
    label: "Notifications",
    description: "Manage alerts & reminders",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Shield,
    label: "Privacy & Security",
    description: "Password, 2FA, data",
    color: "bg-success/10 text-success",
  },
  {
    icon: CreditCard,
    label: "Subscription",
    description: "Plan & billing",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Settings,
    label: "App Settings",
    description: "Preferences & display",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: HelpCircle,
    label: "Help & Support",
    description: "FAQ, contact, feedback",
    color: "bg-muted text-muted-foreground",
  },
];

const Profile = () => {
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
                Profile
              </h1>
            </div>
            <Button variant="ghost" size="icon">
              <Edit3 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="pb-24 animate-fade-in">
        {/* Profile Card */}
        <div className="px-4 py-6">
          <div className="bg-card rounded-2xl shadow-card p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  JD
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-success flex items-center justify-center border-2 border-card">
                  <Star className="h-3 w-3 text-white fill-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-xl font-bold text-foreground">
                  John Doe
                </h2>
                <p className="text-sm text-muted-foreground">Premium Member</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-xl font-bold text-foreground">12</div>
                <div className="text-xs text-muted-foreground">Cases</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-xl font-bold text-foreground">28</div>
                <div className="text-xs text-muted-foreground">Documents</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-foreground">156</div>
                <div className="text-xs text-muted-foreground">Queries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <section className="px-4 mb-6">
          <h2 className="font-semibold text-foreground mb-3">Contact Information</h2>
          <div className="bg-card rounded-xl shadow-card divide-y divide-border">
            <div className="flex items-center gap-4 p-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium text-foreground">john.doe@email.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm font-medium text-foreground">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="text-sm font-medium text-foreground">New York, NY</div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="px-4 mb-6">
          <h2 className="font-semibold text-foreground mb-3">Settings</h2>
          <div className="bg-card rounded-xl shadow-card divide-y divide-border">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center gap-4 p-4 w-full hover:bg-muted/50 transition-colors group"
                >
                  <div className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center",
                    item.color
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-foreground text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </button>
              );
            })}
          </div>
        </section>

        {/* Logout */}
        <div className="px-4">
          <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </main>

      <MobileNav />
    </div>
  );
};

export default Profile;
