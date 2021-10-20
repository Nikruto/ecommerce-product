import React from "react";
import Avatar from "../img/avatar.png";

const ProfilePreview = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full hover:border-orange border-2 cursor-pointer">
        <img alt="user avatar" src={Avatar} />
      </div>
    </div>
  );
};

export default ProfilePreview;
