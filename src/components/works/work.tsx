import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Modal from "@/components/ui/modal";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Work({ img, otherImgs, name }: { img: string; otherImgs?: string[]; name: string }) {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Modal handleClose={closeModal}>
            <div className="relative w-full">
              <h1 className="mb-5 text-center text-2xl font-semibold">{name}</h1>
              <Slider {...settings}>
                <div className="relative aspect-[16/8] w-[500px] select-none px-2 focus-visible:outline-none">
                  <img
                    className="h-full w-full object-cover"
                    src={img}
                    alt="asd"
                    draggable={false}
                  />
                </div>
                {otherImgs &&
                  otherImgs.map((otherImg) => (
                    <div className="relative aspect-[16/8] w-[500px] select-none px-2 focus-visible:outline-none">
                      <img
                        className="h-full w-full object-cover"
                        src={otherImg}
                        alt="asd"
                        draggable={false}
                      />
                    </div>
                  ))}
              </Slider>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <div
        className="group relative aspect-[16/8] w-full cursor-pointer select-none overflow-hidden rounded-lg"
        onClick={openModal}
      >
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
          <p className="text-xl lg:text-2xl xl:text-3xl">{name}</p>
        </div>
        <img
          className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
          src={img}
          alt="screenshot"
          draggable={false}
        />
      </div>
    </React.Fragment>
  );
}

export default Work;
