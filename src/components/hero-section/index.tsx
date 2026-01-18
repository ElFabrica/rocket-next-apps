import { ArrowRightIcon, ClockIcon, StoreIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-80 md:h-144 items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-gray-100 text-heading-hg">
            Venda seus produtos como afiliado em um único lugar
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <ClockIcon className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <StoreIcon className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-5 md:items-start lg:items-start">
            <Button className="rounded-full w-fit" asChild>
              <Link href={"/criar-loja"}>
                <ArrowRightIcon /> Criar loja grátis
              </Link>
            </Button>
            <p className="text-white text-body-sm">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        <div className="relative h-80 hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src={"/hero-section.svg"}
            alt="Ilustração com icones de store, tag e sacola"
            width={200}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
