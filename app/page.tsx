import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import LazySections from "@/components/sections/LazySections";

export default function Home() {
  return (
    <AnalyticsProvider>
      <main className="min-h-screen">
        <Hero />
        <About />
        <LazySections />
      </main>
    </AnalyticsProvider>
  );
}
