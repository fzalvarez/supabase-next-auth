"use client";

import { ArrowRight } from "@/components/svg";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto">
          Indica que necesitas
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div className="gap-20 grid grid-cols-1 sm:grid-cols-2">
          <a className="p-10 bg-white text-black border" href="/reclamo">Reclamo
            <div className="flex">
              <p className="text-lg font-medium">Realizar un reclamo</p>
              <ArrowRight className="text-2xl" />
            </div>
          </a>
          <a className="p-10 bg-white text-black border" href="/queja">Queja
            <div className="flex">
              <p className="text-lg font-medium">Realizar una queja</p>
              <ArrowRight className="text-2xl" />
            </div>
          </a>
        </div>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex mt-12">
        <div className="gap-20 grid grid-cols-1 sm:grid-cols-1 w-full">
          <div>
            <h3 className="text-3xl">Haz seguimiento a tu reclamo</h3>
          </div>
          <div>
            <p className="col-span-1">
              Ingresa tu número de reclamo para ver su estado en el sistema.
            </p>
            <div className="col-span-1 grid grid-cols-2 gap-x-4">
              <input
                className="border rounded-2xl p-4"
                type="text"
                placeholder="Ingrese código de reclamo"
              ></input>
              <a
                className="border rounded-2xl p-4 bg-red-600 text-white"
                href="/seguimiento"
              >Buscar</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}