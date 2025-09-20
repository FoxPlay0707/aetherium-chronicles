import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import SeasonInfo from "@/components/sections/SeasonInfo";
import SocialLinks from "@/components/sections/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SeasonInfo />
      <SocialLinks />
    </div>
  );
};

export default Index;
