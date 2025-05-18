"use client";

import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import "@/styles/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageBanner
        title="Contact Us"
        backgroundImage="/images/allthatglow_cover.png"
      />

      <section className="contact-section">
        <h2>문의 및 소식</h2>
        <p>
          이메일 또는 인스타그램을 통해 연락하실 수 있습니다. <br/>궁금하신 점이나 협업 문의는 아래 계정을 통해 메시지를 보내주세요.
        </p>
        <p className="contact-email">✉️ goldleafstudio24@gmail.com</p>
        <Link
          href="https://instagram.com/goldleafstudio.kr"
          target="_blank"
          className="instagram-link"
        >
          @goldleafstudio.kr
        </Link>
      </section>
    </div>
  );
}