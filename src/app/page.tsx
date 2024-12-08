import MatrixBackground from "@/components/background";
import LogoSVG from "@/components/logo";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

export const dynamic = "force-static";

const nav = [
  { name: "Projects", href: "/projects" },
  {
    name: "Resume",
    href: "https://utfs.io/f/YJilwUmdv7MfrCWZPxlFqfHJ0EhViwZmMsYQeyR5lo3Ct1zA",
  },
];

const socials = [
  {
    name: "Github",
    icon: <FaGithub className="h-8 w-8" />,
    href: "https://github.com/xfn14",
  },
  {
    name: "Fiverr",
    icon: <SiFiverr className="h-8 w-8" />,
    href: "https://www.fiverr.com/xxxfn14",
  },
];

export default function HomePage() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-between py-6">
      <MatrixBackground />

      <header>
        <LogoSVG className="h-96 w-96 pt-10 transition-all duration-300 ease-in-out hover:scale-110" />
      </header>

      <nav className="flex flex-col justify-center gap-2 text-2xl">
        {nav.map(({ name, href }) => (
          <Link key={name} href={href}>
            <li className="group flex py-1 transition-all duration-100 ease-in-out hover:scale-110">
              <p className="invisible px-2 text-accent group-hover:visible">
                #
              </p>
              {name}
            </li>
          </Link>
        ))}
      </nav>

      <footer className="flex gap-6">
        {socials.map(({ name, icon, href }) => (
          <Link
            key={name}
            href={href}
            className="transition-all duration-100 ease-in-out hover:scale-110"
          >
            {icon}
          </Link>
        ))}
      </footer>
    </main>
  );
}
