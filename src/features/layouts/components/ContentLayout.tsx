"use client";

import { HTMLAttributes, useCallback, useState } from "react";
import Aside from "@/features/layouts/components/Aside";
import { Button } from "@/components";
import { Settings2 } from "lucide-react";

interface ContentLayoutProps extends HTMLAttributes<HTMLDivElement> {
  aside?: React.ReactNode;
  floatings?:
    | ((props: {
        isOpen: boolean;
        open: () => void;
        close: () => void;
        toggle: () => void;
      }) => React.ReactNode)
    | React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
  aside,
  floatings,
  className = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleToggle = useCallback(
    () => setIsOpen((wasOpened) => !wasOpened),
    [],
  );

  return (
    <>
      <div className={`mx-auto max-w-[1220px] ${className}`} {...props}>
        <div className="flex gap-4">
          {aside && (
            <Aside isOpen={isOpen} setIsOpen={setIsOpen}>
              {aside}
            </Aside>
          )}
          {children}
        </div>
      </div>
      <div className="fixed bottom-5 left-6 xl:hidden">
        {!floatings ? (
          <Button
            icon={Settings2}
            className="p-3 drop-shadow-md"
            onClick={handleToggle}
            rounded
          />
        ) : typeof floatings === "function" ? (
          floatings({
            isOpen,
            open: handleOpen,
            close: handleClose,
            toggle: handleToggle,
          })
        ) : (
          floatings
        )}
      </div>
    </>
  );
};

export default ContentLayout;
