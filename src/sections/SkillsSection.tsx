import { motion } from 'framer-motion'
import { SkillCard } from '../components/SkillCard'
import skills from '../data/skills.json'

/**
 * Skills Section
 * Showcases technical skills organized by categories
 * Features: dynamic data from JSON, responsive grid, hover effects
 */
export const SkillsSection = () => {
  const skillsData = skills.skills as Record<string, any>

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id='skills' className='py-20 px-4 md:px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <motion.div
          className='mb-16 text-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            My <span className='gradient-text'>Tech Stack</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
            Technologies and tools I use to build amazing experiences
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className='space-y-12'>
          {Object.entries(skillsData).map(([key, category]: [string, any]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Title */}
              <div className='mb-6'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  {category.category}
                </h3>
                <div
                  className='h-1 w-16 rounded-full'
                  style={{ backgroundColor: category.color }}
                />
              </div>

              {/* Skills Grid */}
              <motion.div
                className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                {category.technologies.map(
                  (tech: { name: string; icon: string }, idx: number) => (
                    <motion.div key={idx} variants={itemVariants}>
                      <SkillCard name={tech.name} icon={tech.icon} />
                    </motion.div>
                  ),
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
