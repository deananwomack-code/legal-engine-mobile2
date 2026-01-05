import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { WelcomeBanner } from "@/components/home/WelcomeBanner";
import { QuickActions } from "@/components/home/QuickActions";
import { RecentCases } from "@/components/home/RecentCases";
import { LegalTips } from "@/components/home/LegalTips";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="animate-fade-in">
        <WelcomeBanner />
        <QuickActions />
        <RecentCases />
        <LegalTips />
      </main>
      
      <MobileNav />
    </div>
  );
};

export default Index;
