"use client"
import React from "react";

export default function Page() {
  return (
    <section className="container flex flex-col items-center">
      <div className="w-full max-w-5xl items-center justify-between mt-16">
        <h4 className="text-2xl mb-4">Seguimiento</h4>
        <p className="justify-center">
          No se encuentra un reclamo relacionado con el código ingresado.
        </p>
      </div>
      <div className="w-full max-w-5xl items-center justify-between mt-16">
        <div className="container mx-auto">
          <div className="seguimiento">
            {/* Fila para Nombres y Apellidos */}
            <div className="flex flex-wrap py-2">
              {/* Fila para Nombres */}
              <div className="w-full md:w-1/3 p-2">
                <div className="font-bold">Rodrigo Francisco</div>
              </div>
              {/* Tipo de reclamo */}
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">Reclamo</div>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">
                  <a
                    className="bg-blue-300 text-black px-4 py-2"
                    href="https://libro-reclamos.vercel.app/tracking"
                  >
                    Atender reclamo
                  </a>
                </div>
              </div>
            </div>
            {/* Fila para Nombres y Apellidos */}
            <div className="flex flex-wrap py-2">
              {/* Fila para Nombres */}
              <div className="w-full md:w-1/3 p-2">
                <div className="font-bold">Juan Garcia</div>
              </div>
              {/* Tipo de reclamo */}
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">Reclamo</div>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">
                  <a
                    className="bg-blue-300 text-black px-4 py-2"
                    href="https://libro-reclamos.vercel.app/tracking"
                  >
                    Atender reclamo
                  </a>
                </div>
              </div>
            </div>
            {/* Fila para Nombres y Apellidos */}
            <div className="flex flex-wrap py-2">
              {/* Fila para Nombres */}
              <div className="w-full md:w-1/3 p-2">
                <div className="font-bold">Maria Perez</div>
              </div>
              {/* Tipo de reclamo */}
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">Reclamo</div>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">
                  <a
                    className="bg-blue-300 text-black px-4 py-2"
                    href="https://libro-reclamos.vercel.app/tracking"
                  >
                    Atender reclamo
                  </a>
                </div>
              </div>
            </div>
            {/* Fila para Nombres y Apellidos */}
            <div className="flex flex-wrap py-2">
              {/* Fila para Nombres */}
              <div className="w-full md:w-1/3 p-2">
                <div className="font-bold">Fernando Zamudio</div>
              </div>
              {/* Tipo de reclamo */}
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">Queja</div>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="camposllenos">
                  <a
                    className="bg-blue-300 text-black px-4 py-2"
                    href="https://libro-reclamos.vercel.app/tracking"
                  >
                    Atender reclamo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-10">
          <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
            <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
              <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                1
              </span>
              <span>
                <h3 className="font-medium leading-tight">Reclamo ingresado</h3>
                <p className="text-sm">Pronto su reclamo se atendido</p>
              </span>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
              <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                2
              </span>
              <span>
                <h3 className="font-medium leading-tight">
                  Evaluando la solución
                </h3>
                <p className="text-sm">Pronto su reclamo se atendido</p>
              </span>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
              <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                3
              </span>
              <span>
                <h3 className="font-medium leading-tight">
                  Solución propuesta
                </h3>
                <p className="text-sm">Pronto su reclamo se atendido</p>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
