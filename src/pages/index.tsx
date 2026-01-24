import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { SupportSection } from "@/components/support-section";
import { CustomerStorySection } from "@/components/customer-story-section";
import { CallToAction } from "@/components/call-to-action";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  );
}
