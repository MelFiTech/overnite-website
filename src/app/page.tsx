import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Website from "@/components/Website";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-spline-sans)] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#1a1a2e] to-[#2a1a3a]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Website />
      </main>
      <Footer />
    </div>
  );
}
