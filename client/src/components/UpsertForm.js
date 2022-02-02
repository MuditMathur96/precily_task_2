import {useState,useEffect} from 'react';
import {create,update} from '../helper/api.helper.js'

const UpsertForm = ({selected,setSelected,setData,data}) => {

    const [content,setContent] = useState("");

    //Async Funtion to call create/Update method and update the state
    const Upsert =async (e)=>{
        e.preventDefault();
       // console.log(content);

        if(selected){
            let response=await update(selected._id,content);
            if(response)
            {
                
                console.log(response.data);
                let newData = data.map(t=>
                    t._id===response.data._id?response.data
                    :t
                    );
                setSelected(null);
                setContent("");
                setData(newData);

            }
        }
        else{
           const response = await create({content:content});
           setData([response.data,...data]);
           //console.log(response);
        }

    }


    useEffect(()=>{
        if(!selected) return;
        setContent(selected.content);
        
    },[selected,setSelected]);
  return <div className=''>

     <div className='text-xl mb-5 text-slate-800 text-center'>Whats On Your Mind Today!!!
         </div> 
      <form onSubmit={(e)=>Upsert(e)}>
          <div className='mb-5'>
          <input
            className='p-2 rounded-l outline-none border w-80 '
            required placeholder='Enter Your Thought Here'
            onChange={e=>setContent(e.target.value)}
            value={content}
          />
          <button
           className=' bg-slate-900 text-white py-2 px-3 rounded-r-lg '
           type='submit' >{!selected?"Add":"Update"}</button>
           {selected && <button
            className='text-red-500 ml-2 underline'
           type='Cancel' onClick={()=>{
               setSelected(null)
               setContent("")
               }} >Cancel</button>}
          </div>
       
          
      </form>

      </div>;
};

export default UpsertForm;
