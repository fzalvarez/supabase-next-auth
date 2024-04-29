import Link from "next/link";
import React from "react";

export default function Header() {
    return (
      <footer className="bg-slate-300 text-black">
        <div className="container">
          <div className="grid">
            <Link href="/">Home</Link>
            <Link href="/">Work</Link>
          </div>
          <div>
            <Link href="/">Privacy</Link>
          </div>
        </div>
      </footer>
    );
}
