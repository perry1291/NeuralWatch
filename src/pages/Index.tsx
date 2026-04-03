import HeroSection from '@/components/HeroSection';
import DetectionDemo from '@/components/DetectionDemo';
import NeuralNetwork from '@/components/NeuralNetwork';
import HowItWorks from '@/components/HowItWorks';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <HeroSection />
    <NeuralNetwork />
    <HowItWorks />
    <DetectionDemo />
    <TechStack />
    <Footer />
  </div>
);

export default Index;
