"use client";
import { useEffect, useRef, useState } from "react";

export default function JoinBetaPopup({ onHide }: { onHide: Function }) {
  const modalRef: any = useRef(null);

  useEffect(() => {
    // Close the modal if clicked outside of the modal content
    const handleOutsideClick = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onHide();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onHide]);

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          <div
            ref={modalRef}
            className="bg-gray-800 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
          >
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white">Join Beta!</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => onHide()}
              >
                <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className="relative border-b max-w-full">
              <iframe
                src="https://ur3yc6h05b7.typeform.com/to/mc9VlBUW"
                className="w-full aspect-video"
              />
            </div>
            <div className="text-center my-3">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => onHide()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
