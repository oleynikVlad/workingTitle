"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Ghost } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Ghost className="h-16 w-16 text-primary mb-8" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        404 - Сторінку не знайдено
      </h1>
      <p className="text-muted-foreground mb-8 text-lg max-w-md">
        Ой! Схоже, що такої сторінки не існує.
      </p>
      <Link href="/">
        <Button size="lg">На головну</Button>
      </Link>
    </section>
  );
}
