import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Website from "@/components/Website";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-spline-sans)] bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Website />
      </main>
      <Footer />
    </div>
  );
}
