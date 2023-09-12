function SectionHeading({ text, backgroundText }: { text: string; backgroundText: string }) {
  return (
    <div className="relative flex items-center justify-center text-center">
      <h1 className="section-heading relative z-20 text-4xl font-[800]">{text}</h1>
      <span className="absolute z-10 text-[102px] font-[800] uppercase tracking-wider opacity-[0.04]">
        {backgroundText}
      </span>
    </div>
  );
}

export default SectionHeading;
