import Button from "@/components/Button"

export const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="border border-white/15 py-24">
          <h2 className="text-center text-5xl font-medium tracking-tighter">
            AI-driven SEO for everyone
          </h2>
          <p className="mt-5 px-4 text-center text-lg tracking-tight text-white/70">
            Achive clear, impactful results without the complexity
          </p>
          <div className="mt-8 flex justify-center">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
