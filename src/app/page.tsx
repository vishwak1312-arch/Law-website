import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CaseResultsStats from "@/components/home/CaseResultsStats";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";
import BlogPreview from "@/components/home/BlogPreview";
import FAQPreview from "@/components/home/FAQPreview";
import VideoSection from "@/components/home/VideoSection";
import TrustBuilders from "@/components/home/TrustBuilders";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PracticeAreasGrid />
      <WhyChooseUs />
      <CaseResultsStats />
      <TestimonialsCarousel />
      <BookConsultationCTA />
      <VideoSection />
      <TrustBuilders />
      <BlogPreview />
      <FAQPreview />
    </>
  );
}
