"use client";

import { Switch as ReactSwitch, type SwitchProps } from "@headlessui/react";

const Switch: React.FC<SwitchProps<React.ElementType>> = (props) => {
  return (
    <ReactSwitch
      className="relative inline-flex h-6 w-11 items-center transition-colors rounded-full group bg-sortingpage data-[headlessui-state=checked]:bg-[#3c6780]"
      {...props}
    >
      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1 group-data-[headlessui-state=checked]:translate-x-6" />
    </ReactSwitch>
  );
};

export default Switch;
