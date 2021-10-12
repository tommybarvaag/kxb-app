/* eslint-disable @next/next/no-img-element */
/* next does not yet support blog usage in next image component */
/* active PR: https://github.com/vercel/next.js/pull/23622 */
import { useUserImage } from "@/components/user/hooks";
import * as React from "react";

const UserAvatar = () => {
  const userImage = useUserImage();

  return (
    <div className="w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple ">
      <img
        src={userImage}
        alt="User avatar"
        className="object-cover object-center w-full h-full visible"
      />
    </div>
  );
};

export default UserAvatar;