import React from "react";

export default function AnnouncementCard({publisher_name,publish_date,title,details,onTitleClick}) {
  return (
    <div className="w-1/2 flex flex-col mt-5">
      <div className="flex flex-row gap-3 items-center">
        <div className="text-gray-500">{publisher_name}</div>
        <div className="text-sm text-gray-500">{publish_date}</div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3 flex flex-col">
          <p onClick={onTitleClick} className="font-bold text-red-500 hover:text-red-300 cursor-pointer text-lg pt-3">
           {title}
          </p>

          <p className="font-light text-white text-sm pt-2">
            {details}
          </p>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
}
