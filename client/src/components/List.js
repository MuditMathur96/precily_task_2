import React from 'react';
import Thought from './Thought';
const List = ({data,setSelected}) => {
  return(
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-1'>
          {
              data && data.map(item=>(
                  <Thought key={item._id} data={item} setSelected={setSelected} />
              ))
          }
         
      </div>);
};

export default List;
