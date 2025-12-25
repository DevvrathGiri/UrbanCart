import React from "react";

const Description = () => {
  return (
    <div className="my-20 mx-12">
      {/* Navigator */}
      <div className="flex">
        <div className="flex items-center justify-center w-[150px] h-[50px] text-base font-semibold border border-[#d0d0d0]">
          Description
        </div>

        <div className="flex items-center justify-center w-[150px] h-[50px] text-base font-semibold border border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">
          Review (135)
        </div>
      </div>

      {/* Description Content */}
      <div className="flex flex-col gap-5 border border-[#d0d0d0] p-10 pb-12">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          reiciendis exercitationem amet totam nisi ullam cumque fugit magnam
          laudantium. Quis eos quam alias nisi explicabo ut, itaque qui fuga
          officiis. Maxime labore in molestiae, debitis vel, rem modi repudiandae
          ullam ipsam delectus dolores quibusdam reiciendis, hic temporibus
          beatae at aut possimus reprehenderit.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          doloremque facilis neque non nihil quam veritatis a. Ratione dolore
          debitis quia possimus natus quo consequatur exercitationem quae unde,
          laboriosam iure!
        </p>
      </div>
    </div>
  );
};

export default Description;
