import { Hero } from "@/components/Hero";
import { Prologue } from "@/components/Prologue";
import { OurStory } from "@/components/OurStory";
import { Represents } from "@/components/Represents";
import { Archive } from "@/components/Archive";
import { World } from "@/components/World";
import { Letter } from "@/components/Letter";
import { Footer } from "@/components/Footer";
import { PlateBand } from "@/components/PlateBand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Prologue />
      <OurStory />
      <PlateBand
        src="/archive/drive-through.png"
        alt="The drive-through window of the shop"
        plate="Plate VII"
        caption="The drive-through, on a quiet morning."
      />
      <Represents />
      <Archive />
      <World />
      <Letter />
      <Footer />
    </main>
  );
}
