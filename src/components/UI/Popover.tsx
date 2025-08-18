"use client";
import { AnimatePresence } from "motion/react";
import React, {
  RefObject,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ReactNode } from "react";
import {Button} from "react-aria-components"
import { motion } from "motion/react";
//global state

let listeners: (() => void)[] = [];
let activePopoverId: string | null;

let setActivePopoverId = (id: string | null) => {
  activePopoverId = id;
  listeners.forEach((e) => e());
};

/////////////// TYPES ////////////////////
type PopoverTypeProvider = {
  id: string | null;
  setBodyElement: (element: RefObject<HTMLDivElement | null> | null) => void;
  bodyElement: RefObject<HTMLDivElement | null> | null;
  setTriggerElement: (
    element: RefObject<HTMLButtonElement | null> | null
  ) => void;
  triggerElement: RefObject<HTMLButtonElement | null> | null;
  isActive: boolean;
};
/////////// LOGIC //////////////////////////
const PopoverInitialValue: PopoverTypeProvider = {
  id: "",
  isActive: false,
  setTriggerElement(element) {},
  triggerElement: null,
  bodyElement: null,
  setBodyElement() {},
};

const PopoverProvider =
  React.createContext<PopoverTypeProvider>(PopoverInitialValue);
type PopoverProps = {
  children: ReactNode;
};
const Popover = (props: PopoverProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  // ID UNIQUE
  const id = useId();
  const [bodyElement, setBodyElement] =
    useState<RefObject<HTMLDivElement | null> | null>(null);
  const [triggerElement, setTriggerElement] =
    useState<RefObject<HTMLButtonElement | null> | null>(null);
  function clickTrigger() {
    setActivePopoverId(activePopoverId === id ? null : id);
  }

  function handleOusideInteraction(event: MouseEvent) {
    if (
      bodyElement?.current &&
      triggerElement?.current &&
      !bodyElement.current.contains(event.target as Node) &&
      !triggerElement.current.contains(event.target as Node)
    ) {
      setActivePopoverId(null);
    }
  }

  useEffect(() => {
    function setAcive() {
      setIsActive(activePopoverId === id);
    }
    listeners.push(setAcive);
    if (triggerElement?.current) {
      triggerElement.current.addEventListener("click", clickTrigger);
    }
    document.addEventListener("mousedown", handleOusideInteraction);
    return () => {
      document.removeEventListener("mousedown", handleOusideInteraction);
      listeners = listeners.filter((e) => e != setAcive);
      if (triggerElement?.current) {
        triggerElement.current.removeEventListener("click", clickTrigger);
      }
    };
  }, [bodyElement, triggerElement, isActive]);
  useEffect(()=>{
    if(isActive){
      document.body.style.overflow = 'hidden';
    }
    return ()=>{
       if(isActive){
      document.body.style.overflow = 'auto';
    }
    }
  },[isActive])
  return (
    <PopoverProvider.Provider
      value={{
        isActive,
        triggerElement,
        setTriggerElement,
        id,
        bodyElement,
        setBodyElement,
      }}
    >
      <div className="relative">{props.children}</div>
    </PopoverProvider.Provider>
  );
};
const usePopoverContext = () => {
  return useContext(PopoverProvider);
};
const Body = ({ children }: { children: ReactNode }) => {
  const ctx = usePopoverContext();

  const bodyRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    ctx.setBodyElement(bodyRef);
  }, []);
  return (
    <AnimatePresence>
      {ctx.isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -15, y: -15 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -15, y: -15 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 22,
          }}
          className="border z-50 max-w-sm bg-background overflow-hidden  border-primary-outline min-w-xs rounded-2xl absolute shadow-xl backdrop-blur-md"
          ref={bodyRef}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Trigger = ({ children }: { children: ReactNode }) => {
  const ctx = usePopoverContext();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useLayoutEffect(() => {
    ctx.setTriggerElement(triggerRef);
  }, []);
  return <Button ref={triggerRef}>{children}</Button>;
};
Popover.Trigger = Trigger;
Popover.Body = Body;
export default Popover;
