import React from 'react';

export default function BreadCrumbs() {
  const breadCrumbsArr = ['food and drinks', 'resturants', 'kathmandu'];

  return (
    <div className="flex flex-wrap gap-4 mt-5 md:mt-0 mb-10">
      {breadCrumbsArr.map((name, i, arr) => (
        <React.Fragment key={i}>
          <span className="shrink-0 capitalize hover:text-gray-500 underline underline-offset-2 cursor-pointer text-gray-700 font-merriweathe4">
            {name}
          </span>
          {arr.length !== i + 1 && <span>{'>'}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
