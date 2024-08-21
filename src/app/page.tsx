"use client"
import { useTitleChanger } from "@/hooks/useTitleChanger"
import { Features } from "@/sections/Features"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"

export default function Home() {
  useTitleChanger({
    defaultTitle: "AI Startup Home | Diego Tech",
    blurTitle: "I miss you! 😭 | Diego Tech",
  })

  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
    </>
  )
}
