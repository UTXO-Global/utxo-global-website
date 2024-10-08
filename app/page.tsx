"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomeView from "@/views/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animation in milliseconds
    });
  }, []);

  return (
    <main>
      <HomeView />
    </main>
  );
}
