import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[57%] flex items-center justify-start gap-5 w-full py-5 mt-10 flex-nowrap overflow-x-auto"
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 rounded text-sm">High</h3>
          <h4 className="font-semibold text-sm mr-5 ">2 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn Backend</h2>
        <p className="text-sm mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam qui ab quisquam, voluptatem inventore?</p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 rounded text-sm">High</h3>
          <h4 className="font-semibold text-sm mr-5 ">2 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn Backend</h2>
        <p className="text-sm mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam qui ab quisquam, voluptatem inventore?</p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 rounded text-sm">High</h3>
          <h4 className="font-semibold text-sm mr-5 ">2 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn Backend</h2>
        <p className="text-sm mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam qui ab quisquam, voluptatem inventore?</p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 p-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 rounded text-sm">High</h3>
          <h4 className="font-semibold text-sm mr-5 ">2 Jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn Backend</h2>
        <p className="text-sm mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quibusdam qui ab quisquam, voluptatem inventore?</p>
      </div>
    </div>
  );
};

export default TaskList;
