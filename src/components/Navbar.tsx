import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import personalInfo from '../data/personalInfo.json'

/**
 * Navbar Component
 * Sticky navigation with links and social icons
 * Features: active link highlighting, mobile menu, smooth scrolling
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className='text-xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent'
            whileHover={{ scale: 1.05 }}
          >
            {'<S />'}
          </motion.button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative font-medium transition-colors ${
                  activeSection === link.id ? 'text-accent' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className='absolute bottom-0 left-0 right-0 h-0.5 bg-accent'
                    layoutId='navbar-underline'
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className='hidden md:flex items-center gap-4'>
            <motion.a
              href={personalInfo.personalInfo.social.github}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-gray-400 hover:text-accent transition-colors'
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.personalInfo.social.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-gray-400 hover:text-accent transition-colors'
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.personalInfo.email}`}
              className='p-2 text-gray-400 hover:text-accent transition-colors'
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <FiMail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 text-white'
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className='overflow-hidden md:hidden'
        >
          <div className='flex flex-col gap-4 mt-4 pt-4 border-t border-white/10'>
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left font-medium transition-colors ${
                  activeSection === link.id ? 'text-accent' : 'text-gray-400'
                }`}
              >
                {link.label}
              </motion.button>
            ))}
            <div className='flex gap-4 pt-4 border-t border-white/10'>
              <a href={personalInfo.personalInfo.social.github} target='_blank' rel='noopener noreferrer'>
                <FiGithub size={20} />
              </a>
              <a href={personalInfo.personalInfo.social.linkedin} target='_blank' rel='noopener noreferrer'>
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.personalInfo.email}`}>
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
