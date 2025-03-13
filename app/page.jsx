import {Hero} from "@/components/Hero";
import {Stats} from "@/components/Stats";
import {Trades} from "@/components/Trades";
import {About} from "@/components/About";
import {Tariffs} from "@/components/Tariffs";
import {Faq} from "@/components/FAQ";

export default function Home() {
  return (
      <main>
          <Hero/>
          <Stats/>
          <Trades/>
          <About/>
          <Tariffs/>
          <Faq/>
      </main>
  );
}
