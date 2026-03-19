import { motion } from 'framer-motion'
import * as SiIcons from 'react-icons/si'

interface SkillCardProps {
  name: string
  icon: string
}

/**
 * SkillCard Component
 * Displays individual skill with dynamic icon
 * Features: hover animation, responsive
 */
export const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  // Get the icon component from react-icons
  const IconComponent = (SiIcons as any)[icon]

  return (
    <motion.div
      className='glass p-4 flex flex-col items-center justify-center gap-3 min-h-32 cursor-pointer'
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {IconComponent ? (
        <IconComponent className='text-accent text-4xl' />
      ) : (
        <div className='w-10 h-10 bg-accent/20 rounded-lg' />
      )}
      <span className='text-sm font-semibold text-white text-center'>{name}</span>
    </motion.div>
  )
}
