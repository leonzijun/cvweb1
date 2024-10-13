import { HeroParallaxDemo } from "@/components/hero-parallax-demo"
import { TimelineDemo } from "@/components/timeline-demo"
import { InfiniteMovingCardsDemo } from "@/components/infinite-moving-cards-demo"
import { TextGenerateEffectDemo } from "@/components/text-generate-effect-demo"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroParallaxDemo />
      <TimelineDemo />
      <InfiniteMovingCardsDemo />
      <div className="py-20 px-4 bg-white dark:bg-black">
        <TextGenerateEffectDemo />
      </div>
    </div>
  )
}