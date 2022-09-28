import { CategoryDropdown } from '@features/home-page/components';
import { categoryDropdownData } from 'data';
import React from 'react';

// prevent original data from accidently mutating
const categories = [...categoryDropdownData];

export default function CategoriesDropdown() {
  return (
    <div className="mt-3 mb-5 md:mb-10 hidden md:block">
      {/* Divider */}
      <div className="absolute left-0 right-0 border-t-[1px] border-gray-300" />
      <div className="pt-4 pb-2 flex gap-12">
        {categories.map((data, index) => (
          <React.Fragment key={index}>
            <CategoryDropdown
              name={data.name}
              subcategories={data.subcategories}
            />
          </React.Fragment>
        ))}
      </div>
      {/* Divider */}
      <div className="absolute left-0 right-0 border-t-[1px] border-gray-300" />
    </div>
  );
}
