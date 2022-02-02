import {useState,useEffect} from 'react';
import List from "./components/List";
import {getAll} from './helper/api.helper.js';
import UpsertForm from "./components/UpsertForm";
import Stats from './components/Stats';



function App() {
  const[data,setData] =useState(null);
  const [selected,setSelected] = useState(null);
  useEffect(()=>{

   async function fetchData()
    {
      let res = await getAll();
      if(res) {
        console.log(res.data);
        setData(res.data);
      };
    }
    fetchData();
  },[]);
  useEffect(()=>{
    console.log("tdata changed",selected);
    
   },[selected]);


  return (
    <div className="p-2 flex flex-col justify-center items-center ">
      <Stats data={data} />
     <UpsertForm selected={selected} setSelected={setSelected}  data={data} setData={setData}/>
     
     
     {
       data?<List data={data} selected={selected} setSelected={setSelected} />
       :<div className="p-2 bg-red-600 rounded text-white mt-5">No data Found</div>
     }
     
     
    </div>
  );
}

export default App;
