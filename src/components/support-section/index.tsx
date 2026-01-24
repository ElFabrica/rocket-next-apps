import {
  HeartHandshakeIcon,
  PaintbrushVerticalIcon,
  StoreIcon,
} from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";

export function SupportSection() {
  return (
    <section className="pb-8 md:py-10 ">
      <div className="container flex flex-col  items-center gap-12">
        <h2
          className={`font-sans text-balance text-center text-heading-xl text-gray-100`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>
        <div className=" grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300">
              <PaintbrushVerticalIcon className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catalago e tenha tudo com
              a sua cara.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200">
              <StoreIcon className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insera qualquer
              link de afiliado.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300">
              <HeartHandshakeIcon className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insera qualquer
              link de afiliado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
