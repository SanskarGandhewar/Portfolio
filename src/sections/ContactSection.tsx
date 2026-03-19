import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

/**
 * Contact Section
 * Contact form with EmailJS integration
 * Features: form validation, loading state, success/error messages
 */
export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: 'idle' })

  // Initialize EmailJS (replace with your actual service ID from EmailJS dashboard)
  // const SERVICE_ID = 'service_xxxxx'
  // const TEMPLATE_ID = 'template_xxxxx'
  // const PUBLIC_KEY = 'xxxxx'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setFormStatus({ type: 'loading' })

      // For now, we'll just validate and show success
      // Uncomment below when you have EmailJS configured
      /*
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      */

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      })

      formRef.current.reset()

      setTimeout(() => {
        setFormStatus({ type: 'idle' })
      }, 3000)
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      })
    }
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id='contact' className='py-20 px-4 md:px-6'>
      <div className='max-w-2xl mx-auto'>
        {/* Header */}
        <motion.div
          className='mb-12 text-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Get in <span className='gradient-text'>Touch</span>
          </h2>
          <p className='text-gray-400 text-lg'>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className='glass p-8 rounded-2xl'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {/* Name Field */}
          <motion.div className='mb-6' variants={itemVariants}>
            <label htmlFor='name' className='block text-sm font-semibold text-white mb-2'>
              Name *
            </label>
            <input
              type='text'
              id='name'
              name='user_name'
              required
              className='w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors'
              placeholder='Your name'
            />
          </motion.div>

          {/* Email Field */}
          <motion.div className='mb-6' variants={itemVariants}>
            <label htmlFor='email' className='block text-sm font-semibold text-white mb-2'>
              Email *
            </label>
            <input
              type='email'
              id='email'
              name='user_email'
              required
              className='w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors'
              placeholder='your.email@example.com'
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div className='mb-6' variants={itemVariants}>
            <label htmlFor='subject' className='block text-sm font-semibold text-white mb-2'>
              Subject *
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              className='w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors'
              placeholder='What is this about?'
            />
          </motion.div>

          {/* Message Field */}
          <motion.div className='mb-6' variants={itemVariants}>
            <label htmlFor='message' className='block text-sm font-semibold text-white mb-2'>
              Message *
            </label>
            <textarea
              id='message'
              name='message'
              required
              rows={5}
              className='w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors resize-none'
              placeholder='Your message here...'
            />
          </motion.div>

          {/* Status Message */}
          <motion.div variants={itemVariants}>
            {formStatus.type === 'success' && (
              <div className='mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3'>
                <FiCheckCircle className='text-green-500' size={20} />
                <p className='text-green-400'>{formStatus.message}</p>
              </div>
            )}

            {formStatus.type === 'error' && (
              <div className='mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3'>
                <FiAlertCircle className='text-red-500' size={20} />
                <p className='text-red-400'>{formStatus.message}</p>
              </div>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            disabled={formStatus.type === 'loading'}
            className='w-full bg-accent text-dark-900 font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
            whileHover={{ scale: formStatus.type !== 'loading' ? 1.02 : 1 }}
            whileTap={{ scale: formStatus.type !== 'loading' ? 0.98 : 1 }}
            variants={itemVariants}
          >
            {formStatus.type === 'loading' ? (
              <>
                <div className='w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin' />
                Sending...
              </>
            ) : (
              <>
                <FiSend size={20} />
                Send Message
              </>
            )}
          </motion.button>

          {/* Note */}
          <motion.p
            className='text-xs text-gray-500 text-center mt-4'
            variants={itemVariants}
          >
            This form is currently configured for demonstration. Update your EmailJS credentials to enable email sending.
          </motion.p>
        </motion.form>
      </div>
    </section>
  )
}
