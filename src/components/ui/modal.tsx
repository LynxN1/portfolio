import { motion } from "framer-motion";
import React from "react";

const Backdrop = ({ children, onClick }: { children?: React.ReactNode; onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const Modal = ({
  handleClose,
  children,
}: {
  handleClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full lg:w-3/4 lg:max-w-[1400px]"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
