import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "@tanstack/react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-right" />
    </div>
  );
}
