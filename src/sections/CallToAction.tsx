import Button from "@/components/Button"
import starsBg from "@/assets/stars.png"
import gridLines from "@/assets/grid-lines.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          animate={{ backgroundPositionX: starsBg.width }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="relative overflow-hidden rounded-xl border border-white/15 py-24"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <div className="relative">
            <h2 className="mx-auto max-w-sm text-center text-5xl font-medium tracking-tighter md:text-6xl">
              AI-driven SEO for everyone
            </h2>
            <p className="mx-auto mt-5 max-w-xs px-4 text-center text-lg tracking-tight text-white/70 md:text-xl">
              Achive clear, impactful results without the complexity
            </p>
            <div className="mt-8 flex justify-center">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
