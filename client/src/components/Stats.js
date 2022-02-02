import React,{useState,useEffect} from 'react';
import Box from './Box';
import {getStats} from '../helper/api.helper';

const Stats = ({data}) => {

    const [stats,setStats] = useState(null);

    useEffect(()=>{
        const fetchStats =async()=>{
            let response = await getStats();
            console.log(response.data);
            setStats(response.data);
        }
        fetchStats();
    },[data]);

  return <div className='flex'>
      <Box title="Create Calls" stat={stats?.createCount} >
            
      </Box>
      <Box title="Update Calls" stat={stats?.updateCount} >
            
            </Box>
  </div>;
};

export default Stats;
