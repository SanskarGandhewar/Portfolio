import { useScrollPosition } from '../hooks/useScrollPosition'
import { motion } from 'framer-motion'

/**
 * ScrollProgress Component
 * Shows scroll progress indicator at the top of the page
 */
export const ScrollProgress = () => {
  const scrollY = useScrollPosition()
  const height = document.documentElement.scrollHeight - window.innerHeight
  const progress = height > 0 ? (scrollY / height) * 100 : 0

  return (
    <motion.div
      className='fixed top-0 left-0 h-1 bg-gradient-to-r from-accent to-purple-500 z-50'
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  )
}
