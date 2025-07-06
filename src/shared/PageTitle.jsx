import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ title, description }) {
  return (
    <div className="flex items-center">
      <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
      <div>
        <h2 className="text-2xl font-bold text-blue-500">{title}</h2>
        <p className="text-gray-600 text-sm md:block hidden">{description}</p>
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageTitle;
