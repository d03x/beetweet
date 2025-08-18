"use client";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, createBox, motion } from "motion/react";
interface WithChildren {
  children: ReactNode;
}
type TActionType = "click" | "hover";
type PopupContextType = {
  triggerRef: RefObject<HTMLButtonElement | null> | null;
  actionType: TActionType;
  id: string;
  isActive: boolean;
  setTriggerRefElement: (element: RefObject<HTMLButtonElement | null>) => void;
  setContentRefElement: (element: RefObject<HTMLDivElement | null>) => void;
};

let listeners: (() => void)[] = [];
let popupActiveId: string | null = null;

let setPopupActiveId = (id: string | null) => {
  popupActiveId = id;
  listeners.forEach((fn) => fn());
};

const PopupContextInitialValue: PopupContextType = {
  triggerRef: null,
  isActive: false,
  id: "",
  actionType: "hover",
  setTriggerRefElement(element) {},
  setContentRefElement(element) {},
};

const PopupContext = React.createContext<PopupContextType>(
  PopupContextInitialValue
);

interface PopupProps extends WithChildren {
  actionType?: TActionType;
}
const Popup = ({ children, actionType = "hover" }: PopupProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [triggerRef, setTriggerRef] =
    useState<RefObject<HTMLButtonElement | null> | null>(null);
  const [contentRef, seetContentRef] =
    useState<RefObject<HTMLDivElement | null> | null>(null);
  const id = useId();
  function setTriggerRefElement(element: RefObject<HTMLButtonElement | null>) {
    setTriggerRef(element);
  }

  function setContentRefElement(element: RefObject<HTMLDivElement | null>) {
    seetContentRef(element);
  }
  function triggerListener(mouseEv: MouseEvent) {
    setPopupActiveId(popupActiveId === id ? null : id);
  }
  function hoverListener(mouseEv: MouseEvent) {
    setPopupActiveId(id);
  }

  useEffect(() => {
    const updateActive = () => {
      setIsActive(popupActiveId === id);
    };
    listeners.push(updateActive);
    if (actionType == "click") {
      document.addEventListener("mousedown", handleOutsideClick);
      triggerRef?.current?.addEventListener("click", triggerListener);
    } else if (actionType == "hover") {
      document.addEventListener("mouseover", handleOutsideClick);
      triggerRef?.current?.addEventListener("mouseover", hoverListener);
    }
    function handleOutsideClick(e: MouseEvent) {
      if (
        triggerRef?.current &&
        contentRef?.current &&
        !triggerRef?.current?.contains(e.target as Node) &&
        !contentRef?.current?.contains(e.target as Node)
      ) {
        setPopupActiveId(null);
      }
    }

    return () => {
      listeners = listeners.filter((fn) => fn != updateActive);
      if (actionType == "click") {
        document.removeEventListener("mousedown", handleOutsideClick);
        triggerRef?.current?.removeEventListener("click", triggerListener);
      } else if (actionType == "hover") {
        document.removeEventListener("mouseover", handleOutsideClick);
        triggerRef?.current?.removeEventListener("mouseover", triggerListener);
      }
    };
  }, [triggerRef, contentRef, isActive]);

  return (
    <PopupContext.Provider
      value={{
        id,
        isActive,
        actionType,
        setContentRefElement,
        triggerRef,
        setTriggerRefElement,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
const useContext = () => {
  return React.useContext(PopupContext);
};

const Content = ({ children }: WithChildren) => {
  const contentRefElement = useRef<HTMLDivElement | null>(null);
  const ctx = useContext();
  useLayoutEffect(() => {
    ctx.setContentRefElement(contentRefElement);
  }, []);
  return (
    <AnimatePresence>
      {popupActiveId === ctx.id && (
        <motion.div
          ref={contentRefElement}
          onMouseDown={(e) => e.stopPropagation()}
          id={`md-${ctx.id}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className=" border z-50 border-primary-outline shadow-tooltip-box-shadow bg-secondary-background  absolute min-w-xs rounded-lg p-2"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
Popup.Content = Content;
const Trigger = ({ children }: WithChildren) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const ctx = useContext();
  useLayoutEffect(() => {
    ctx.setTriggerRefElement(buttonRef);
  }, []);
  return <button ref={buttonRef}>{children}</button>;
};
Popup.Trigger = Trigger;
export { Popup };
