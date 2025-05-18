"use client";

// import Image from "next/image";
import Link from "next/link";
import "../styles/Homepage.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    const bg = document.querySelector(".hero-bg") as HTMLElement;
    const onScroll = () => {
      if (!bg) return;
      const scrollY = window.scrollY;
      const blur = Math.min(scrollY / 100, 8); // 최대 8px
      bg.style.filter = `blur(${blur}px)`;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1>All That Glow</h1>
          <p>황금빛 생명의 흔적을 되살리는 감성 어드벤처</p>
          <Link href="/games/allthatglow" className="cta-button">
            게임 보기
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="intro">
        <div className="fade-up">
          <h2>Goldleaf Studio</h2>
          <p>
            감성적인 게임을 통해 세계와 소통하는 창작 스튜디오입니다.
            <br />
            상호작용과 서사를 바탕으로 플레이어에게 따뜻한 경험을 선사합니다.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features">
        <div className="fade-up feature-card">
          <h3>🌿 생태 복원</h3>
          <p>플레이를 통해 섬의 생명이 서서히 회복되는 구조</p>
        </div>
        <div className="fade-up feature-card">
          <h3>🎨 아기자기한 연출</h3>
          <p>섬세하고 따뜻한 스타일의 3D 그래픽과 귀여운 캐릭터들</p>
        </div>
        <div className="fade-up feature-card">
          <h3>📖 스토리 중심</h3>
          <p>의미 있는 선택과 내러티브 중심의 게임 스토리 진행</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="fade-up">
          <h2>Studio Goldleaf와 함께하고 싶으신가요?</h2>
          <Link href="/contact" className="cta-button light">
            문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
