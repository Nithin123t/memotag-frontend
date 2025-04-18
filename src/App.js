import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TractionSection from './components/TractionSection';
import CTASection from './components/CTASection';
import TestimonialSection from './components/TestimonialSection';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TractionSection />
      <CTASection />
      <TestimonialSection />
      <ThemeToggle />


      {/* CTA Section coming next */}
    </div>
  );
}

export default App;
