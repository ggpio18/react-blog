import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = ({
  title = "Trending Now",
  hasLink = false,
  link = "#",
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h3 className="mb-0 text-2xl border-l-[7px] font-bold border-accent pl-[10px]">
          {title}
        </h3>
        {hasLink && (
          <Link
            to={link}
            className="border rounded-md bg-transparent px-4 py-1 text-gray-500 border-gray-500 hover:text-accent hover:border-accent transition-colors"
          >
            View All
          </Link>
        )}
      </div>
    </>
  );
};

export default SectionHeader;