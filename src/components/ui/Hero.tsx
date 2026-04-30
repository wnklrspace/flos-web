import { LayoutGrid } from "@/components/layout/LayoutGrid";

export const Hero = () => {
  return (
    <LayoutGrid className="my-8">
      <section className="col-span-12 lg:col-span-6 xl:col-span-4">
        <p className="text-xl md:text-2xl lg:text-5xl text-zinc-800">
          Collection feed of random things, thoughts, images, drawings,
          snippets, shorts and ideas
        </p>
      </section>
    </LayoutGrid>
  );
};
