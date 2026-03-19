import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

interface AnimatedStickerProps {
  /** URL to a Lottie JSON animation */
  src: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

/**
 * AnimatedSticker Component
 * Renders a lightweight Lottie animation inside a responsive container.
 * Use for dynamic, sticker-like animations (e.g., avatars, mascots, etc.).
 */
export const AnimatedSticker: React.FC<AnimatedStickerProps> = ({
  src,
  className,
  loop = true,
  autoplay = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const instance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      path: src,
    })

    return () => instance.destroy()
  }, [src, loop, autoplay])

  return (
    <div
      ref={containerRef}
      className={className}
      aria-label='Animated sticker'
      role='img'
    />
  )
}
