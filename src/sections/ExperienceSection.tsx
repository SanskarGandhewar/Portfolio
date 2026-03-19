import { motion } from 'framer-motion'
import experienceData from '../data/experience.json'

/**
 * Experience Section
 * Highlights work experience and education details.
 * Features: animated card sections and responsive layout.
 */
export const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id='experience' className='py-20 px-4 md:px-6'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-10'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {/* Work Experience */}
          <motion.div variants={itemVariants} className='glass p-8 rounded-2xl'>
            <h2 className='text-4xl font-bold mb-6'>Work Experience</h2>
            {experienceData.experience.work.map((work, idx) => (
              <div key={idx} className='mb-8'>
                <p className='text-lg font-semibold text-white'>
                  {work.role} <span className='text-accent'>@ {work.company}</span>
                </p>
                <p className='text-sm text-gray-400 mb-4'>{work.period}</p>
                <ul className='list-disc list-inside text-gray-300 space-y-2'>
                  {work.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className='glass p-8 rounded-2xl'>
            <h2 className='text-4xl font-bold mb-6'>Education</h2>
            {experienceData.experience.education.map((edu, idx) => (
              <div key={idx} className='mb-8'>
                <p className='text-lg font-semibold text-white'>{edu.degree}</p>
                <p className='text-sm text-gray-400 mb-1'>
                  {edu.institution} • {edu.period}
                </p>
                <ul className='list-disc list-inside text-gray-300 space-y-1'>
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
