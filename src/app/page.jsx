"use client";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Home() {
  const [chanelSrc, setChanelSrc] = useState("https://win.holol.com/live/quran/playlist.m3u8");
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      // تهيئة المشغل لأول مرة
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: true,
        fluid: true,
      });

      // تعيين المصدر عند أول تحميل
      playerRef.current.src({ src: chanelSrc, type: "application/x-mpegURL" });
      playerRef.current.play();
    } else if (playerRef.current) {
      // تحديث المصدر عند تغيير القناة
      playerRef.current.src({ src: chanelSrc, type: "application/x-mpegURL" });
      playerRef.current.load(); // تحميل المصدر الجديد
      playerRef.current.play(); // تشغيل الفيديو بعد تغيير المصدر
    }
  }, [chanelSrc]);

  return (
    <>
      <Head>
        <title>القرآن الكريم</title>
        <meta name="description" content="استمع إلى القرآن الكريم مباشرة." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="liveContainer flex justify-center items-center h-[100vh]">


      <div className= {`container flex flex-col justify-center items-center  space-y-4 liveChanel`}>
        <div className="flex gap-4 ">
          <button
            onClick={() => setChanelSrc("https://win.holol.com/live/quran/playlist.m3u8")}
            className="rounded-md bg-blue-600 px-6 py-3 text-white text-lg cursor-pointer"
          >
            قناة القرآن الكريم
          </button>
          <button
            onClick={() => setChanelSrc("https://win.holol.com/live/sunnah/playlist.m3u8")}
            className="rounded-md bg-green-950 px-6 py-3 text-white text-lg cursor-pointer"
          >
            قناة السنة النبوية
          </button>
        </div>

        <div className="flex justify-center items-center w-full max-w-full md:w-[600px] lg:w-[800px]  ">
          <video ref={videoRef}  className="video-js vjs-default-skin  aspect-video object-cover w-full " />
        </div>
      </div>
      </div>
    </>
  );
}
 