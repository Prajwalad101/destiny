import { CategoryDropdown } from '@features/home-page/components';
import { categoryDropdownData } from 'data';
import React from 'react';

// prevent original data from accidently mutating
const categories = [...categoryDropdownData];

export default function CategoriesDropdown() {
  return (
    <div className="mt-3 mb-10">
      {/* Divider */}
      <div className="absolute left-0 right-0 border-t-[1px] border-gray-300" />
      <div className="pt-4 pb-2 hidden gap-10 font-rubik md:flex">
        {categories.map((data, index) => (
          <React.Fragment key={index}>
            <CategoryDropdown
              name={data.name}
              subcategories={data.subcategories}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="absolute left-0 right-0 border-t-[1px] border-gray-300" />
    </div>
  );
}
