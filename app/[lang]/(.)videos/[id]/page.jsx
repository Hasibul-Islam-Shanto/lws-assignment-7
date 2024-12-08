"use client";
import { getVideo, getVideos } from "@/utils/video-data";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { notFound, useParams, useRouter } from "next/navigation";
import Image from "next/image";
import RecommededVideoCard from "@/components/RecommededVideoCard";
import engJson from "../../dictionaries/en.json";
import bnJson from "../../dictionaries/bn.json";

const InterceptingVideo = () => {
  const router = useRouter();
  const [isModalopen, setIsModalOpen] = useState(true);
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);
  const params = useParams();
  const dict = params.lang === "en" ? engJson : bnJson;
  const id = params.id.toString();

  useEffect(() => {
    const fetchVideo = async () => {
      const [singleVideo, allVideos] = await Promise.all([
        getVideo(id),
        getVideos(),
      ]);
      if (!singleVideo) {
        notFound();
      }
      setVideo(singleVideo);
      setVideos(allVideos);
    };
    fetchVideo();
  }, [id]);
  return (
    <>
      <Modal
        isOpen={isModalopen}
        onRequestClose={() => router.back()}
        ariaHideApp={false}
        className="container mx-auto absolute top-44 left-[50%] translate-x-[-50%] bg-gray-300  shadow-md"
      >
        <main className="flex flex-col lg:flex-row gap-6 bg-colorBg px-10 py-2 rounded-lg relative">
          <div className="lg:w-3/4">
            <div className="relative">
              <iframe
                src={video?.thumbnail}
                title="YouTube video player"
                frameBorder="0"
                className="w-full aspect-video h-[350px] border-2 border-colorGray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center space-x-4">
                  <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                  <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                    LIVE
                  </div>
                  <span className="text-sm">46:02</span>
                  <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold mt-4">{video?.title}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <Image
                src="/avatar.png"
                height={32}
                width={32}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{video?.channelTitle}</p>
              </div>
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
                {dict.Subscribe}
              </button>
            </div>
          </div>

          <div className="lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">{dict.You_may_like}</h2>
            <div className="space-y-4">
              {videos?.slice(3, 6)?.map((video) => (
                <RecommededVideoCard key={video.videoId} video={video} />
              ))}
            </div>
          </div>

          <Image
            src="/close.png"
            height={20}
            width={20}
            alt="Close"
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => router.back()}
          />
        </main>
      </Modal>
    </>
  );
};

export default InterceptingVideo;
