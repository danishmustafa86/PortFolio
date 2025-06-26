import { useEffect, useState } from "react";

export default function MainFrontViewSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">I am a passionate developer with skills in Next.js, Tailwind CSS, and more.</p>
      </div>
    </section>
  );
}