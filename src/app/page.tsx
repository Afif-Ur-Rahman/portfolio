import { Footer, Header } from "@/components/layout";
import { AboutMe, FloatingIcons, Hero, Projects, Skills } from "@/ui/home";

export default async function HomePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <FloatingIcons />
    </>
  );
}
