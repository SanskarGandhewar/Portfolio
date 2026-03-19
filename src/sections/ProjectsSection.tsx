import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import projects from '../data/projects.json'

/**
 * Projects Section
 * Showcases featured work and projects
 * Features: responsive grid, hover effects, dynamic data from JSON
 */
export const ProjectsSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Get featured projects first, then others
  const sortedProjects = [
    ...projects.projects.filter(p => p.featured),
    ...projects.projects.filter(p => !p.featured),
  ]

  return (
    <section id='projects' className='py-20 px-4 md:px-6'>
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
            Featured <span className='gradient-text'>Projects</span>
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
            A selection of my latest work showcasing my skills in web development,
            design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {sortedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                live={project.live}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
