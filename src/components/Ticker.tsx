export default function Ticker() {
  const items = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "Laravel",
    "MySQL",
    "Git",
    "GitHub",
    "Vercel",
    "Tailwind CSS",
    "Bootstrap",
    "REST API",
    "Responsive Design",
    "ERP Systems",
    "UI Components",
  ];

  // Duplicate items to create infinite effect
  const displayItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-t border-b border-[var(--color-border-main)] bg-[var(--color-card)] py-[0.85rem] px-0">
      <div className="flex gap-[2.5rem] w-max animate-ticker max-w-none">
        {displayItems.map((t, index) => (
          <span
            key={index}
            className="flex items-center gap-[0.6rem] font-[family-name:var(--font-mono-custom)] text-[0.73rem] text-[var(--color-text3)] whitespace-nowrap tracking-[0.05em]"
          >
            <span className="text-[var(--color-accent)] text-[0.85rem]">✦</span>{" "}
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
