import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
}

/**
 * ProjectCard Component
 * Displays individual project with image, description, tech stack, and links
 * Features: hover animations, glassmorphism, responsive design
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  github,
  live,
}) => {
  return (
    <motion.div
      className='glass overflow-hidden group h-full'
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className='relative h-48 overflow-hidden bg-dark-800'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-white mb-2'>{title}</h3>
        <p className='text-gray-400 text-sm mb-4 line-clamp-2'>{description}</p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2 mb-6'>
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className='text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20'
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className='text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400'>
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className='flex gap-3'>
          <motion.a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:border-white/40 transition-colors'
            whileHover={{ scale: 1.05 }}
          >
            <FiGithub size={16} />
            Code
          </motion.a>
          <motion.a
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors'
            whileHover={{ scale: 1.05 }}
          >
            <FiExternalLink size={16} />
            Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
