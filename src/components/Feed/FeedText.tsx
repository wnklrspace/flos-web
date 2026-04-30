import { FC } from "react";
import { DailyTextContent } from "../../../types/dailies";

interface Props {
  daily: DailyTextContent;
}

const FeedText: FC<Props> = ({ daily }) => {
  return (
    <article className="flex flex-col gap-3">
      <div className="bg-c-white rounded-xl p-6 flex flex-col gap-3">
        {daily.text.map((sentence, index) => (
          <p
            key={sentence + index}
            className="text-f-s m:text-f-m font-mono leading-relaxed"
          >
            {sentence}
          </p>
        ))}
      </div>
      <h2 className="text-f-s m:text-f-m font-normal">{daily.title}</h2>
    </article>
  );
};

export default FeedText;
