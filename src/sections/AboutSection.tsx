import { motion } from 'framer-motion'
import { AnimatedSticker } from '../components/AnimatedSticker'
import personalInfo from '../data/personalInfo.json'

/**
 * About Section
 * Personal introduction, background, and highlights
 * Features: smooth animations, responsive design
 */
export const AboutSection = () => {
  const aboutData = personalInfo.personalInfo.about

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id='about' className='py-20 px-4 md:px-6'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className='relative'
          >
            <div className='relative glass p-8 rounded-2xl overflow-hidden'>
              <AnimatedSticker
                src='https://assets5.lottiefiles.com/packages/lf20_tfb3estd.json'
                className='w-full h-80'
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='space-y-6'
          >
            <motion.h2
              className='text-4xl md:text-5xl font-bold'
              variants={itemVariants}
            >
              About <span className='gradient-text'>Me</span>
            </motion.h2>

            <motion.p
              className='text-lg text-gray-400 leading-relaxed'
              variants={itemVariants}
            >
              {aboutData.intro}
            </motion.p>

            <motion.p
              className='text-gray-400 leading-relaxed'
              variants={itemVariants}
            >
              {aboutData.description}
            </motion.p>

            {/* Highlights */}
            <motion.div
              className='grid grid-cols-2 gap-4 pt-6'
              variants={itemVariants}
            >
              {aboutData.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className='glass p-4 rounded-lg border-l-2 border-accent'
                >
                  <p className='text-white font-semibold'>{highlight}</p>
                </div>
              ))}
            </motion.div>

            {/* Fun Facts */}
            {/* <motion.div
              className='grid grid-cols-2 gap-4 pt-6'
              variants={itemVariants}
            >
              {personalInfo.personalInfo.stats.map((fact, idx) => (
                <div key={idx}>
                  <p className='text-xs text-gray-500 uppercase'>{fact.label}</p>
                  <p className='text-white font-semibold'>{fact.value}</p>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
