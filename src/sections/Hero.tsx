import Button from "@/components/Button"
import starsBg from "@/assets/stars.png"

export const Hero = () => {
  return (
    <section
      className="flex h-[492px] items-center"
      style={{ backgroundImage: `url(${starsBg.src})` }}
    >
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,.5),-20px_-20px_80px_rgba(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="container relative">
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
