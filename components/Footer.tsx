import { FloralMark } from "./SectionEyebrow";

export function Footer() {
  return (
    <footer className="bg-cream pt-20 pb-16 px-6 border-t border-ink/15">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <FloralMark className="w-6 h-6 text-ink/60" />
        <div className="caption">Dorothy&rsquo;s Flower Shop</div>
        <div className="font-body text-ink/70 italic">
          Est. — &nbsp;·&nbsp; Kept by the family.
        </div>
        <div className="font-display italic text-ink/80 text-lg mt-2">
          &ldquo;Come back any time.&rdquo;
          <span className="caption ml-3 text-ink/50">— Mom Mom</span>
        </div>
        <div className="hairline w-24 mt-6" />
        <div className="caption text-ink/50">
          © {new Date().getFullYear()} &nbsp;·&nbsp; All rights reserved
        </div>
      </div>
    </footer>
  );
}
