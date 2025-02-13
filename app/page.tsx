import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import MVP from "@/components/sections/MVP";
import Philosophy from "@/components/sections/Philosophy";
import Pricing from "@/components/sections/Pricing";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Philosophy />
      <MVP />
      <Pricing />
      <WhyUs />
      <FAQ />
    </main>
  );
}
