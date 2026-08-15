type HeroTitleProps = {
  /** Professional title / role, e.g. "Fullstack Software Engineer". */
  role: string;
  firstName: string;
  lastName: string;
};

/** The Hero's mono role label followed by the gradient-accented name heading. */
export function HeroTitle({ role, firstName, lastName }: HeroTitleProps) {
  return (
    <>
      <p className="animate-fade-up [animation-delay:100ms] mt-7 font-mono text-sm font-medium uppercase tracking-widest text-accent">
        {role}
      </p>
      <h1 className="animate-fade-up [animation-delay:150ms] mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        {firstName}{" "}
        <span className="text-gradient animate-gradient-x">{lastName}</span>
      </h1>
    </>
  );
}
