import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <>
      <Link href={"/"} title="Página inicial">
        <Image width={116} height={32} src={"/logo.svg"} alt="/Logo site" />
      </Link>
    </>
  );
}
