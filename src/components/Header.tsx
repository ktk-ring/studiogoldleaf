"use client";

import Link from "next/link";
import Image from "next/image";
import "@/styles/Header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <header className="site-header">
        <div className="header-container">
          <Link href="/" className="logo-with-icon">
            <Image
              src="/studiogoldleaf/images/favicon.png"
              alt="Studio Goldleaf"
              width={28}
              height={28}
            />
            <span>Studio Goldleaf</span>
          </Link>
          <nav className="nav-links">
            <Link href="/about">팀 소개</Link>
            <Link href="/games">게임</Link>
            <Link href="/contact">문의</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}