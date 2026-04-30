import { FC } from "react";
import { DailyAudioContent } from "../../../types/dailies";

interface Props {
  daily: DailyAudioContent;
}

const FeedAudio: FC<Props> = ({ daily }) => {
  return (
    <article className="flex flex-col gap-3 bg-c-white rounded-xl p-6">
      <audio controls className="w-full">
        <source src={daily.file} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      {daily.text && (
        <p className="text-f-xs m:text-f-s text-c-gray-dark">{daily.text}</p>
      )}
      <h2 className="text-f-s m:text-f-m font-normal">{daily.title}</h2>
    </article>
  );
};

export default FeedAudio;
