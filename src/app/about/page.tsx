'use client';

import "@/styles/AboutPage.css";
import Image from "next/image";

const teamMembers = [
  { name: "백송이", role: "팀장 / 기획 / 아트 / UI 디자인", img: "/studiogoldleaf/images/member1.png" },
  { name: "이예진", role: "일러스트 / 2D 디자인", img: "/studiogoldleaf/images/member2.png" },
  { name: "이재리", role: "아트 / 애니메이팅", img: "/studiogoldleaf/images/member3.png" },
  { name: "김태균", role: "기획 / 시스템 설계 / 개발", img: "/studiogoldleaf/images/member4.png" },
  { name: "이민경", role: "시스템 개발", img: "/studiogoldleaf/images/member5.png" },
  { name: "황유나", role: "시스템 개발", img: "/studiogoldleaf/images/member6.png" },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Studio Goldleaf</h1>
        <p>
          <strong>스튜디오 골드리프</strong>는<br/>
          서울예술대학교 디지털아트전공에서 만난 여섯 명의 학생으로 이루어져 있습니다. <br/>
          서로 다른 색과 기술을 가진 친구들이 한자리에 모여<br/>
          오랫동안 마음에 남을 게임을 만드는 것을 목표로 합니다.
        </p>
      </section>

      <section className="team-section">
        <h2>팀원 소개</h2>
        <ul className="team-list">
          {teamMembers.map((member, i) => (
            <li key={i} className="team-row">
              <Image
                src={member.img}
                alt={member.name}
                width={64}
                height={64}
                className="team-row-img"
              />
              <div className="team-row-info">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-philosophy">
        <h2>우리가 추구하는 방향</h2>
        <p>
          게임은 누군가에게 언어이자 위로가 될 수 있다고 믿습니다.
          우리는 그 믿음을 바탕으로 우리만의 콘텐츠를 만들어갑니다.
        </p>
      </section>
    </div>
  );
}
