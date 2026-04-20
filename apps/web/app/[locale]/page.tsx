import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import PageWrapper from "../../components/ui/PageWrapper";

export default async function HomePage() {
  return (
    <PageWrapper
      contentClassName="space-y-14 md:space-y-16"
      currentPath="home"
      footer={<Footer />}
    >
      <Hero />
      <Features />
      <HowItWorks />
    </PageWrapper>
  );
}
