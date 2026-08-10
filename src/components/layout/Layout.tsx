import { Outlet } from "react-router-dom";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CallbackModal } from "@/components/ui/CallbackModal";
import { CallbackModalProvider } from "@/lib/callbackModal";

export function Layout() {
  return (
    <CallbackModalProvider>
      <ScrollToTop />
      <SkipLink />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <CallbackModal />
    </CallbackModalProvider>
  );
}
