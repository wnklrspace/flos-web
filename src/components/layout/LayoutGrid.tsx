import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

interface LayoutGridProps extends useRender.ComponentProps<"div"> {
  fullbleed?: boolean;
}

export const LayoutGrid = ({
  fullbleed = false,
  render,
  className,
  children,
  ...props
}: LayoutGridProps) => {
  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        className: cn(
          "relative grid w-full grid-cols-12 gap-6",
          {
            "max-w-screen-3xl 3xl:mx-auto px-6 lg:px-16": !fullbleed,
          },
          className,
        ),
        children,
      },
      props,
    ),
  });
};
