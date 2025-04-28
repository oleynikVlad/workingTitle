import Image from "next/image";
import { Button } from "./components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero секція */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Working title</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          fugit magnam expedita ducimus praesentium cumque non delectus ipsa
          nihil excepturi saepe atque velit, corrupti voluptatibus quo, error
          maiores sunt perferendis
        </p>
        <Link href="/blog">
          <Button size="lg">Blog</Button>
        </Link>
      </section>
    </>
  );
}
