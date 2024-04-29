import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <footer>
            <div className="grid col">
                <Link
                    href="/"
                >
                    Home
                </Link>
                <Link
                    href="/"
                >
                    Work
                </Link>
            </div>
            <div>
                <Link
                    href="/"
                >
                    Privacy
                </Link>

            </div>
        </footer>
    );
}
