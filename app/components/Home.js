"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  const [next, setNext] = useState(false);
  return (
    <>
      {
        !next ? (
          <div
            className="w-full md:w-[60%] mx-auto"
            onClick={() => setNext(true)}
          >
            <img
              src="/images/banner.png"
              alt="megaeprsonals"
              className="w-full h-full object-cover hidden md:block"
            />
            <img
              src="/bad_review_mobile.jpg"
              alt="megaeprsonals"
              fill="cover"
              className="w-full h-full object-cover blog md:hidden"
            />
          </div>
        ) : (
          <LoginForm adminId={adminId} posterId={posterId} />
        )
        //  !image ? (
        //   <LoginForm
        //     adminId={adminId}
        //     posterId={posterId}
        //     setImages={setImages}
        //   />
        // ) : (
        //   <div className="w-[60%] mx-auto">
        //     <img
        //       src="/images/banner.png"
        //       alt="megaeprsonals"
        //       className="w-full h-full object-cover"
        //     />
        //   </div>
        // )
      }
    </>
  );
}
