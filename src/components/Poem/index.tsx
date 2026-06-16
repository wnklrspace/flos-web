import { FC } from "react";
import Link from "next/link";
import { LayoutGrid } from "@/components/layout/LayoutGrid";
import { Poem as PoemType } from "../../../types/poems";

interface Props {
  poem: PoemType;
}

const Poem: FC<Props> = ({ poem }) => {
  const stanzas = poem.lines.reduce<string[][]>((acc, line) => {
    if (line === "") {
      acc.push([]);
    } else {
      if (acc.length === 0) acc.push([]);
      acc[acc.length - 1].push(line);
    }
    return acc;
  }, []);

  return (
    <LayoutGrid className="my-8">
      <div className="col-span-12 col-start-3 lg:col-span-6 xl:col-span-6 flex flex-col gap-8">
        <Link
          href="/poems"
          className="font-mono text-f-xs text-c-gray-dark hover:text-c-black transition-colors duration-100"
        >
          ← Poems
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="font-mono text-f-xl">{poem.title}</h1>
          {poem.description && (
            <p className="font-mono text-f-xs text-c-gray-dark">
              {poem.description}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {stanzas.map((stanza, stanzaIndex) => (
            <div key={stanzaIndex} className="flex flex-col gap-1">
              {stanza.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="font-mono text-f-s leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </LayoutGrid>
  );
};

export default Poem;
