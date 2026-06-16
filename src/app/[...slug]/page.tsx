import { notFound } from "next/navigation";
import { Metadata } from "next";
import { poems } from "../../../content/poems";
import List from "@/components/List";
import Poem from "@/components/Poem";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return [
    { slug: ["poems"] },
    ...poems.map((poem) => ({ slug: ["poems", poem.slug] })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (slug[0] !== "poems") return {};

  if (slug.length === 1) {
    return { title: "Poems" };
  }

  const poem = poems.find((p) => p.slug === slug[1]);
  if (!poem) return {};

  return {
    title: poem.title,
    description: poem.description,
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  if (slug[0] !== "poems") {
    notFound();
  }

  if (slug.length === 1) {
    return <List poems={poems} />;
  }

  if (slug.length === 2) {
    const poem = poems.find((p) => p.slug === slug[1]);
    if (!poem) notFound();
    return <Poem poem={poem} />;
  }

  notFound();
}
