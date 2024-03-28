"use client";

import { Switch as ReactSwitch, type SwitchProps } from "@headlessui/react";

const Switch: React.FC<SwitchProps<React.ElementType>> = (props) => {
  return (
    <ReactSwitch
      className="group relative inline-flex h-6 w-11 items-center rounded-full bg-sortingpage transition-colors data-[headlessui-state=checked]:bg-[#3c6780]"
      {...props}
    >
      <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition group-data-[headlessui-state=checked]:translate-x-6" />
    </ReactSwitch>
  );
};

export default Switch;
