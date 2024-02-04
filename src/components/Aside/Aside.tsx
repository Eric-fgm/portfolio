"use client";

import React, {
  useState,
  Fragment,
  useContext,
  createContext,
  type HTMLAttributes,
} from "react";
import { Dialog, Transition } from "@headlessui/react";

interface AsideProps {
  children?: React.ReactNode;
}

const AsideContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: () => {} });

const AsideRoot: React.FC<AsideProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AsideContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AsideContext.Provider>
  );
};

const AsidePanel: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => {
  const { isOpen, setIsOpen } = useContext(AsideContext);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen} {...props}>
        <div className="fixed left-0 top-0 inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-150"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-150"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className={`absolute w-[320px] ${className}`}>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const AsideButton: React.FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  const { setIsOpen } = useContext(AsideContext);

  return (
    <div onClick={() => setIsOpen((wasOpened) => !wasOpened)} {...props}>
      {children}
    </div>
  );
};

export const Root = AsideRoot;
export const Panel = AsidePanel;
export const Button = AsideButton;
