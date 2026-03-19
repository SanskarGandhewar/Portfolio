import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import personalInfo from '../data/personalInfo.json'

/**
 * Footer Component
 * Social links, copyright, and back-to-top button
 */
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='border-t border-white/10 py-12'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between'>
          {/* Social Links */}
          <div className='flex gap-6'>
            <motion.a
              href={personalInfo.personalInfo.social.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-accent transition-colors'
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.personalInfo.social.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-accent transition-colors'
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.personalInfo.email}`}
              className='text-gray-400 hover:text-accent transition-colors'
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <FiMail size={24} />
            </motion.a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className='p-2 rounded-lg border border-white/10 text-gray-400 hover:text-accent hover:border-accent/50 transition-colors'
            whileHover={{ scale: 1.1 }}
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm'>
          <p>© {new Date().getFullYear()} {personalInfo.personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
