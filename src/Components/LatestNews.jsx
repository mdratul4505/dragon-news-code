import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-x-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-4 py-2 font-semibold">
        Latest
      </p>
      <Marquee className="gap-6" pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          nostrum quae eos quos labore laborum in neque? Quas praesentium nobis
          itaque iste officiis
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          nostrum quae eos quos labore laborum in neque? Quas praesentium nobis
          itaque iste officiis
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          nostrum quae eos quos labore laborum in neque? Quas praesentium nobis
          itaque iste officiis
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          nostrum quae eos quos labore laborum in neque? Quas praesentium nobis
          itaque iste officiis
        </p>

      </Marquee>
    </div>
  );
};

export default LatestNews;
