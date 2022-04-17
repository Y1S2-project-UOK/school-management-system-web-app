import React from "react";

export default function AnnouncementCard({
  publisher_name,
  publish_date,
  title,
  details,
  onTitleClick,
}) {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg bg-gray-900 max-w-sm text-center">
        <div className="py-3 px-6 border-b text-white border-gray-300">
          Featured
        </div>
        <div className="p-6">
          <h5 className="text-white text-xl font-medium mb-2">
            Special title treatment
          </h5>
          <p className="text-white text-base mb-4">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-white">
          2 days ago
        </div>
      </div>
    </div>
  );
}
