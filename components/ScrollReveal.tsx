'use client'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)'
      case 'down': return 'translateY(-20px)'
      case 'left': return 'translateX(20px)'
      case 'right': return 'translateX(-20px)'
      case 'none': return 'translate(0)'
    }
  }

  return (
    <div
      ref={ref}
      className={`w-full transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
