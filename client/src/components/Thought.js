

const Thought = ({data,setSelected}) => {
  return <div className='my-1 p-3 shadow-sm border 
  rounded-md w-64  
  flex justify-between  items-center
  hover:shadow-md
  '>
      <p className='italic text-slate-600  '>
          {`"${data.content}"`}
      </p>
      
          <div onClick={()=>{setSelected(data)}} className='rounded-full bg-slate-600
           text-white p-2   cursor-pointer
           transition duration-200 ease-in-out
           text-sm
           text-center
           h-10 w-15
            hover:scale-110
            hover:text-slate-200
              hover:font-bold
            '>Update</div>

     
     
  </div>;
};

export default Thought;
