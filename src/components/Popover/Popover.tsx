"use client";

import { Popover as ReactPopover } from "@headlessui/react";
import { useTheme } from "@/hooks";

interface PopoverProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  button: React.ReactNode;
  children: React.ComponentProps<typeof ReactPopover.Panel>["children"];
}

const variantMap = {
  dark: {
    bg: "bg-homepage-secondary",
  },
  darkBlue: {
    bg: "bg-sortingpage-secondary",
  },
  lightBlue: {
    bg: "bg-graphpage-secondary",
  },
  seaBlue: {
    bg: "bg-[#1b3543]",
  },
};

const Popover: React.FC<PopoverProps> = ({
  children,
  button,
  className = "",
  ...props
}) => {
  const { variant } = useTheme();

  return (
    <ReactPopover className="relative" {...props}>
      <ReactPopover.Button
        className={`${className} flex cursor-pointer flex-col items-center gap-0.5`}
      >
        {button}
      </ReactPopover.Button>

      <ReactPopover.Panel
        className={`absolute -right-2 z-10 mt-1 flex flex-col rounded-lg ${variantMap[variant].bg}`}
      >
        {children}
      </ReactPopover.Panel>
    </ReactPopover>
  );
};

export default Popover;
