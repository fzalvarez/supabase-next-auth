"use client";

import { ArrowRight } from "@/components/svg";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto">
          Realizar un reclamo
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
        <p className="left-0 top-0 flex w-full pb-6 pt-8 lg:static lg:w-auto">
          Realizar un reclamo
        </p>
        <div className="grid gap-4">
          <input
            type="text"
            id="reclamo"
            name="reclamo"
            placeholder="Ingresar su nombre"
            value="Fernando Zamudio"
            className="w-full bg-neutral-200 text-black rounded-sm focus:border-none p-4"
          />
          <textarea
            name="reclamo"
            placeholder="Ingresar su reclamo"
            value="Deseo presentar un reclamo por una mala atención en su local de San Isidro."
            className="w-full bg-neutral-200 text-black rounded-sm focus:border-none p-4"
          />
        </div>
        <button
          className="px-5 py-3 bg-red-600 text-white font-medium"
          onClick={async () => {
            const res = await fetch("/api/send", {
              method: "POST",
            });
            const data = await res.json();
            console.log(data);
          }}
        >
          Send Email
        </button>
      </div>
    </main>
  );
}