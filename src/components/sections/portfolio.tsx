import SectionLayout from "@/components/section-layout";
import img from "@/assets/Screenshot.png";
import img2 from "@/assets/Screenshot2.png";
import img3 from "@/assets/Screenshot3.png";
import img4 from "@/assets/Screenshot4.png";
import Modal from "react-modal";
import { useState } from "react";

function Portfolio() {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <SectionLayout name="works" dark>
      <SectionLayout.Heading text="Recent Works" backgroundText="Experience" />
      <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2 lg:items-start lg:justify-center">
        <Modal
          className="absolute h-[400px] w-[600px] rounded-md bg-black"
          overlayClassName="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-md z-50 flex justify-center items-center"
          isOpen={open}
          onRequestClose={closeModal}
          shouldFocusAfterRender={false}
        >
          <div onClick={(e) => e.preventDefault()}>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
        <div
          className="group relative aspect-[16/8] w-full cursor-pointer select-none overflow-hidden rounded-lg"
          onClick={() => setOpen(!open)}
        >
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img}
            alt="screenshot"
            draggable={false}
          />
        </div>
        <div className="group relative aspect-[16/8] w-full cursor-pointer select-none overflow-hidden rounded-lg">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img2}
            alt="screenshot"
            draggable={false}
          />
        </div>
        <div className="group relative aspect-[16/8] w-full cursor-pointer select-none overflow-hidden rounded-lg">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img3}
            alt="screenshot"
            draggable={false}
          />
        </div>
        <div className="group relative aspect-[16/8] w-full cursor-pointer select-none overflow-hidden rounded-lg">
          <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/[.6] opacity-0 duration-200 group-hover:opacity-100">
            <p>Coming soon...</p>
          </div>
          <img
            className="h-full w-full object-cover duration-200 group-hover:scale-[1.05]"
            src={img4}
            alt="screenshot"
            draggable={false}
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default Portfolio;
