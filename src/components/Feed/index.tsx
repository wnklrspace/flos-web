import { FC } from "react";
import { DAILY_TYPE, Daily } from "../../../types/dailies";
import { LayoutGrid } from "@/components/layout/LayoutGrid";
import FeedImage from "./FeedImage";
import FeedAudio from "./FeedAudio";
import FeedText from "./FeedText";

interface Props {
  dailies: Daily[];
}

const componentMap = {
  [DAILY_TYPE.IMAGE]: FeedImage,
  [DAILY_TYPE.AUDIO]: FeedAudio,
  [DAILY_TYPE.TEXT]: FeedText,
} as const;

const Feed: FC<Props> = ({ dailies }) => {
  return (
    <LayoutGrid className="mb-8">
      {/* Pinterest-style masonry grid */}
      <div className="col-span-12 columns-1 s:columns-2 m:columns-3 l:columns-4 xl:columns-5 gap-6">
        {dailies.map((daily, index) => {
          const Component =
            componentMap[daily.type as keyof typeof componentMap];
          if (!Component) return null;
          return (
            <div key={daily.title + index} className="break-inside-avoid mb-6">
              {/* @ts-expect-error each Component only accepts its specific Daily subtype */}
              <Component daily={daily} />
            </div>
          );
        })}
      </div>
    </LayoutGrid>
  );
};

export default Feed;
