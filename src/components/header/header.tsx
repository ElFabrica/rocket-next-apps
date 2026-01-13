import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { ActiveLink } from "../active-link";

export function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const isBlogPage = router.pathname.startsWith("/blog");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"}>Logo</Link>
          <nav className="flex items-center gap-6">
            <ActiveLink href={"/"}>Início</ActiveLink>
            <ActiveLink href={"/Blog"}>Blog</ActiveLink>
            <Button asChild variant={"secondary"}>
              <Link href={"comecar"}>Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
