export default function Footer() {
  return (
    <footer className="py-[1.75rem] px-[3.5rem] border-t border-[var(--color-border-main)] flex justify-between items-center max-[900px]:flex-col max-[900px]:gap-[0.5rem] max-[900px]:text-center max-[900px]:p-[1.5rem]">
      <p className="font-[family-name:var(--font-mono-custom)] text-[0.68rem] text-[var(--color-text3)] tracking-[0.05em]">
        © {new Date().getFullYear()}{" "}
        <a href="#home" className="text-[var(--color-accent)] no-underline">
          Taqin
        </a>{" "}
        · Semarang, Indonesia
      </p>
      <p className="font-[family-name:var(--font-mono-custom)] text-[0.68rem] text-[var(--color-text3)] tracking-[0.05em]">
        Built with Next.js, Tailwind CSS · Deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] no-underline"
        >
          Vercel
        </a>
      </p>
    </footer>
  );
}
