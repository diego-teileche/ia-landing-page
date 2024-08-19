import Button from "@/components/Button"

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent">
          AI SEO
        </h1>
        <p className="mt-5 text-center text-lg text-white/70">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  )
}
