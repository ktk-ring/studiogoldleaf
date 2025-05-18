// components/PageBanner.tsx
"use client";

import React from "react";
import "@/styles/PageBanner.css";

interface PageBannerProps {
  title: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, backgroundImage }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage || "/studiogoldleaf/images/default_banner.png"})`,
  };

  return (
    <section className="page-banner" style={bannerStyle}>
      <div className="overlay" />
      <h1>{title}</h1>
    </section>
  );
};

export default PageBanner;