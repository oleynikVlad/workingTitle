import Image from "next/image";

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
          maiores sunt perferendis!
        </p>
        <a
          href="#services"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold"
        >
          Blog
        </a>
      </section>
    </>
  );
}
