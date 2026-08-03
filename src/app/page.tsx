import { Footer, Header } from "@/components/layout";
import { Home } from "@/ui/home";

export default async function HomePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Home />
      </main>
      <Footer />
    </>
  );
}
