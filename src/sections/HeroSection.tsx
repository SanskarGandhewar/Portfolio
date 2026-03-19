import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { Button } from '../components/Button'
import { AnimatedSticker } from '../components/AnimatedSticker'
import personalInfo from '../data/personalInfo.json'

/**
 * Hero Section
 * Landing/introduction section with name, title, and CTA buttons
 * Features: smooth animations, gradient text, responsive design
 */
export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-4 md:px-6 pt-20'
    >
      <div className='max-w-6xl w-full'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {/* Left Content */}
          <div className='space-y-6'>
            {/* Greeting */}
            <motion.p
              className='text-accent font-semibold text-lg'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              👋 Hey there, welcome to my portfolio!
            </motion.p>

            {/* Name */}
            <motion.h1
              className='text-5xl md:text-6xl lg:text-7xl font-bold'
              variants={itemVariants}
            >
              I&apos;m{' '}
              <span className='gradient-text'>
                {personalInfo.personalInfo.name}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              className='text-2xl md:text-3xl text-gray-400 font-light'
              variants={itemVariants}
            >
              {personalInfo.personalInfo.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className='text-lg text-gray-400 leading-relaxed'
              variants={itemVariants}
            >
              {personalInfo.personalInfo.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className='flex flex-wrap gap-4 pt-4'
              variants={itemVariants}
            >
              <Button
              variant='primary'
              onClick={() => {
                const el = document.getElementById('contact')
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              Get in Touch
              <FiArrowRight className='ml-2 inline' />
            </Button>
            <a
              href='/resume.pdf'
              download
              className='inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:border-white/40 transition-all duration-300 hover:scale-105'
            >
              <FiDownload className='inline' />
              Download CV
            </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className='grid grid-cols-2 md:grid-cols-3 gap-8 pt-8'
              variants={itemVariants}
            >
              {personalInfo.personalInfo.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className='text-2xl font-bold text-accent'>{stat.value}</p>
                  <p className='text-sm text-gray-400'>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Animated Sticker */}
          <motion.div
            variants={itemVariants}
            className='relative'
          >
            <motion.div
              className='relative w-80 h-80 mx-auto'
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              {/* Glow Background */}
              <div className='absolute inset-0 bg-gradient-to-r from-accent to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse' />

              {/* Sticker */}
              <div className='relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 bg-black/30 relative z-10'>
                <AnimatedSticker
                  src='https://assets5.lottiefiles.com/packages/lf20_tfb3estd.json'
                  className='w-full h-full'
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
