import React from "react";

export default function AnnouncementCard({
  publisher_name,
  publish_date,
  title,
  details,
  venue
}) {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg bg-gray-900 max-w-sm text-center">
        <div className="py-3 px-6 text-left border-b text-white border-gray-300">
          {publisher_name?"publisher : "+publisher_name:null}<br/>
          {venue?"venue : "+venue:null}<br/>
          {publish_date?"date : "+publish_date:null}
        </div>
        <div className="p-6">
          <h5 className="text-white text-left text-xl font-medium mb-2">
            {title?title:null}
          </h5>
          <p className="text-white text-left text-base mb-4">
            {details?details:null}
          </p>
        </div>
      </div>
    </div>
  );
}
