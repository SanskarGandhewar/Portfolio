import {
  Navbar,
  ScrollProgress,
  Footer,
} from './components'
import {
  HeroSection,
  ProjectsSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
} from './sections'

/**
 * Main App Component
 * Portfolio website with multiple sections
 * Includes: Navigation, Hero, Projects, About, Skills, Contact, Footer
 */
function App() {
  return (
    <div className='min-h-screen bg-dark-900'>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className='pt-20'>
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
