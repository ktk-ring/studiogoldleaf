"use client";

import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import Link from "next/link";
import "@/styles/GameDetail.css";

export default function AllThatGlowPage() {
  return (
    <div className="game-detail-page">
      <PageBanner
        title="All That Glow"
        backgroundImage="/images/allthatglow_cover.png"
      />

      {/* Trailer */}
      <section className="game-section">
        <h2>게임 트레일러</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Co11pMf_ncg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Story */}
      <section className="game-section">
        <h2>개요</h2>
        <p>
          🌿 반짝이는 것만을 좇던 욕심 많은 까마귀 &apos;오비&apos;가 진정한 보물의 의미를 찾아가는 힐링 시뮬레이션 게임.
        </p>
      </section>

      {/* Features */}
      <section className="game-section">
        <h2>게임 설명</h2>
        <ul className="game-feature-list">
          “All That Glow”는 죽어가는 섬의 생태계를 회복시키는 감성적인 어드벤처 게임입니다.<br />
          까마귀 &apos;오비&apos;는 우연히 도달한 섬에서 황금빛 씨앗을 발견하고,<br />
          이를 통해 생명을 되살리는 여정을 시작합니다.
        </ul>
      </section>

      {/* Gallery */}
      <section className="game-section">
        <h2>게임 스크린샷</h2>
        <div className="game-gallery">
          {[1, 2, 3].map((i) => (
            <Image
              key={i}
              src={`/studiogoldleaf/images/allthatglow_ss${i}.png`}
              alt={`All That Glow 스크린샷 ${i}`}
              width={300}
              height={200}
              className="gallery-img"
            />
          ))}
        </div>
      </section>

      {/* Back */}
      <section className="game-section" style={{ textAlign: "center" }}>
        <Link href="/games" className="game-back-button">
          ← 게임 목록으로 돌아가기
        </Link>
      </section>
    </div>
  );
}