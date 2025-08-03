import { ElementType, useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

// Simple cn utility function since we don't have @/lib/utils
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface UnderlineProps {
  /**
   * The content to be displayed and animated
   */
  children: React.ReactNode

  /**
   * HTML Tag to render the component as
   * @default span
   */
  as?: ElementType

  /**
   * Optional class name for styling
   */
  className?: string

  /**
   * Animation transition configuration
   * @default { duration: 0.25, ease: "easeInOut" }
   */
  transition?: { duration: number; ease: string }

  /**
   * Height of the underline as a ratio of font size
   * @default 0.1
   */
  underlineHeightRatio?: number

  /**
   * Padding of the underline as a ratio of font size
   * @default 0.01
   */
  underlinePaddingRatio?: number

  /**
   * Additional props to pass to the component
   */
  [key: string]: any
}

const CenterUnderline = ({
  children,
  as = "span",
  className,
  transition = { duration: 0.25, ease: "easeInOut" },
  underlineHeightRatio = 0.1,
  underlinePaddingRatio = 0.01,
  ...props
}: UnderlineProps) => {
  const textRef = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateUnderlineStyles = () => {
      if (textRef.current) {
        const fontSize = parseFloat(getComputedStyle(textRef.current).fontSize)
        const underlineHeight = fontSize * underlineHeightRatio
        const underlinePadding = fontSize * underlinePaddingRatio
        textRef.current.style.setProperty(
          "--underline-height",
          `${underlineHeight}px`
        )
        textRef.current.style.setProperty(
          "--underline-padding",
          `${underlinePadding}px`
        )
      }
    }

    updateUnderlineStyles()
    window.addEventListener("resize", updateUnderlineStyles)

    return () => window.removeEventListener("resize", updateUnderlineStyles)
  }, [underlineHeightRatio, underlinePaddingRatio])

  if (as === "a") {
    return (
      <motion.a
        className={cn("relative inline-block cursor-pointer", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={textRef as any}
        {...props}
      >
        <span>{children}</span>
        <motion.div
          className="absolute left-1/2 bg-current -translate-x-1/2"
          style={{
            height: "var(--underline-height)",
            bottom: "calc(-1 * var(--underline-padding))",
          }}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={transition}
          aria-hidden="true"
        />
      </motion.a>
    )
  }

  return (
    <motion.span
      className={cn("relative inline-block cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={textRef as any}
      {...props}
    >
      <span>{children}</span>
      <motion.div
        className="absolute left-1/2 bg-current -translate-x-1/2"
        style={{
          height: "var(--underline-height)",
          bottom: "calc(-1 * var(--underline-padding))",
        }}
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={transition}
        aria-hidden="true"
      />
    </motion.span>
  )
}

CenterUnderline.displayName = "CenterUnderline"

export default CenterUnderline