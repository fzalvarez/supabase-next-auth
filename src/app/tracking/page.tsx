"use client"
import React from "react";

export default function Page() {
  return (
    <section className="container flex flex-col items-center bg-white text-black">
      <div className="w-full max-w-5xl items-center justify-between mt-16">
        <h4>Seguimiento</h4>
        <p className="justify-center">
          No se encuentra un reclamo relacionado con el código ingresado.
        </p>
      </div>
      <div className="w-full max-w-5xl items-center justify-between mt-16">
        <h2>Reclamo: X78SND</h2>

        <div className="container mx-auto">
          <div className="seguimiento">
            {/* Fila para Nombres y Apellidos */}
            <div className="flex flex-wrap py-2">
              {/* Fila para Nombres */}
              <div className="w-full md:w-1/2 p-2">
                <div className="font-bold px-2">Nombres</div>
                <div className="camposllenos">Rodrigo Francisco</div>
              </div>
              {/* Fila para Apellidos */}
              <div className="w-full md:w-1/2 p-2">
                <div className="font-bold px-2">Apellidos</div>
                <div className="camposllenos">Casimiro Altamirano</div>
              </div>
            </div>
            <div className="flex flex-wrap py-2">
              {/* Fila para Email */}
              <div className="w-full md:w-1/2 p-2">
                <div className="font-bold px-2">Correo Electrónico</div>
                <div className="camposllenos">rodrigo.rancisco@hotmail.com</div>
              </div>
              {/* Fila para Apellidos */}
              <div className="w-full md:w-1/2 p-2">
                <div className="font-bold px-2">Teléfono</div>
                <div className="camposllenos">999-999-999</div>
              </div>
            </div>
            {/* Fila para Documento */}
            <div className="py-2">
              <div className="p-2">
                <div className="font-bold">Documento</div>
                <div className="camposllenos">123456789</div>
              </div>
            </div>

            {/* Fila para Fecha del reclamo */}
            <div className="py-2">
              <div className="p-2">
                <div className="font-bold">Fecha del reclamo</div>
                <div className="camposllenos">2023-04-21</div>
              </div>
            </div>
            {/* Fila para Fecha del suceso */}
            <div className="py-2">
              <div className="p-2">
                <div className="font-bold">Fecha del suceso</div>
                <div className="camposllenos">2023-04-20</div>
              </div>
            </div>
            {/* Fila para Reclamo */}
            <div className="py-2">
              <div className="p-2">
                <div className="font-bold">Reclamo</div>
                <div className="camposllenos">
                  Descripción detallada del reclamo. Este campo es para texto
                  largo, así que puede extenderse cuanto sea necesario para
                  cubrir todos los detalles pertinentes del reclamo.
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
