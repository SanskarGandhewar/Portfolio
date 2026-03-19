import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  className?: string
}

/**
 * Button Component
 * Reusable button with variants: primary, secondary
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  target,
  rel,
  disabled,
  className = '',
}) => {
  const baseClass = 'font-semibold px-6 py-3 rounded-lg transition-all duration-300'
  const variantClass = {
    primary: 'bg-accent text-dark-900 hover:shadow-lg hover:shadow-accent/50',
    secondary: 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
  }

  const Element = href ? 'a' : 'button'

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Element
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        disabled={disabled}
        className={`${baseClass} ${variantClass[variant]} ${className} inline-block`}
      >
        {children}
      </Element>
    </motion.div>
  )
}
