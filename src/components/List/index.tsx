import { FC } from "react";
import Link from "next/link";
import { LayoutGrid } from "@/components/layout/LayoutGrid";
import { Poem } from "../../../types/poems";

interface Props {
  poems: Poem[];
}

const List: FC<Props> = ({ poems }) => {
  return (
    <LayoutGrid className="my-8">
      <div className="col-span-12 lg:col-span-6 xl:col-span-4">
        <h1 className="text-f-s text-c-gray-dark mb-6 font-mono">Poems</h1>
        <ul className="flex flex-col">
          {poems.map((poem) => (
            <li key={poem.slug}>
              <Link
                href={`/poems/${poem.slug}`}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-c-gray transition-colors duration-100"
              >
                <span className="text-f-s select-none" aria-hidden>
                  📄
                </span>
                <span className="font-mono text-f-s text-c-black">
                  {poem.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </LayoutGrid>
  );
};

export default List;
