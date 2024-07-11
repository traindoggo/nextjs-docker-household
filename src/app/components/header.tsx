import Link from "next/link";

const links = [
  {
    title: "Top",
    href: "/",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Create",
    href: "/household/create",
  },
];

export default function Header() {
  return (
    <div className={`p-4 flex gap-4 text-xl border-b-4 border-neutral-900`}>
      <h1>Header</h1>

      <ul className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`border-b border-b-neutral-500 hover:border-b-neutral-200
              duration-100`}
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
