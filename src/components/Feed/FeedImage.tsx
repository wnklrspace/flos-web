import { FC } from "react";
import Image from "next/image";
import { DailyImageContent } from "../../../types/dailies";

interface Props {
  daily: DailyImageContent;
}

const FeedImage: FC<Props> = ({ daily }) => {
  return (
    <article className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={daily.media.url}
          alt={daily.media.alt}
          width={daily.media.width ?? 800}
          height={daily.media.height ?? 600}
          className="w-full h-auto object-cover"
        />
      </div>
      {daily.description && (
        <p className="text-f-xs m:text-f-s text-c-gray-dark">
          {daily.description}
        </p>
      )}
      <h2 className="text-f-s m:text-f-m font-normal">{daily.title}</h2>
    </article>
  );
};

export default FeedImage;
