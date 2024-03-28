import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface AsideProps extends React.PropsWithChildren {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Aside: React.FC<AsideProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <>
      <div className="hidden w-[248px] flex-shrink-0 xl:block">{children}</div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 xl:hidden"
          onClose={setIsOpen}
        >
          <div className="fixed inset-0 left-0 top-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-150"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-150"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="absolute bottom-20 w-72 pl-6">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Aside;
