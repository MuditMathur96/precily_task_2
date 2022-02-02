import React from 'react';

const Box = ({title,stat}) => {
  return <div className='m-2 mb-5 text-center w-32 h-24 border'>
      <div>{title}</div>
      <div className='text-2xl font-bold mt-4'>
        {stat}
      </div>
  </div>;
};

export default Box;
