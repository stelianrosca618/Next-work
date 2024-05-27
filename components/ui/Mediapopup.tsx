import React, { useEffect, useRef, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Mediapopup({playingVideo, src, closePlayingVideo}: any) {
    const videoPlayer = useRef<any>(null);
   
    const videoEnded = () => {
        closePlayingVideo(false);
    }
    return (
        <Transition
            show={playingVideo}
            as={Fragment}
            afterEnter={() => videoPlayer.current?.play()}
        >
            <Dialog initialFocus={videoPlayer} onClose={() => closePlayingVideo(false)}>
                {/* Modal backdrop */}
                <Transition.Child
                    className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    aria-hidden="true"
                />
                {/* End: Modal backdrop */}

                {/* Modal dialog */}
                <Transition.Child
                    className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="oopacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="max-w-5xl mx-auto h-full flex items-center">
                        <Dialog.Panel className="w-full items-center max-h-full aspect-video bg-black overflow-hidden">
                            <video
                                onEnded={() => {videoEnded()}}
                                onPause={() => {videoEnded()}}
                                ref={videoPlayer}
                                width={1920}
                                height={1080}
                                autoPlay
                                controls
                            >
                                <source src={src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
                {/* End: Modal dialog */}
            </Dialog>
        </Transition>
    )
}