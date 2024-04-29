"use client";

import { ArrowRight } from "@/components/svg";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto">
          Realizar un reclamo
        </p>
        <button
          onClick={async () => {
            const res = await fetch("/api/send", {
              method: "POST",
            });
            const data = await res.json();
            console.log(data)
          }}
        >
          Send Email
        </button>
      </div>
    </main>
  )
}