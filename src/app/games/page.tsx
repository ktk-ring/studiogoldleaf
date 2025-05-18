'use client';

import Link from "next/link";
import Image from "next/image";
import "@/styles/GamesPage.css";

export default function GamesPage() {
  return (
    <div className="games-page">
      <h1 className="games-title">우리가 만든 게임</h1>

      <div className="game-card-list">
        <div className="game-card">
          <div className="game-card-img-wrapper">
            <Image
              src="/studiogoldleaf/images/allthatglow_cover.png"
              alt="All That Glow"
              width={480}
              height={270}
              className="game-card-img"
            />
          </div>
          <div className="game-card-content">
            <h2>All That Glow</h2>
            <p>
              죽어가는 섬의 생태계를 되살리는 감성 어드벤처.
              황금빛 생명의 흔적을 따라 회복의 여정을 떠나보세요.
            </p>
            <Link href="/games/allthatglow" className="game-card-button">
              자세히 보기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
