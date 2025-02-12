import React from "react";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  return (
    <div>
      <h2 className="text-3xl font medium text-gray-800">Learn from the best</h2>
      <p>
        Discover our top-related courses astoss various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>

      <Link
        to="/course-list"
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
        onClick={() => scrollTo(0, 0)}
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
