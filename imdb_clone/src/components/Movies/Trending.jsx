import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination';
import axios from 'axios'

function Trending() {

  let [data,setData] = useState([]);
  let [page,SetPage] = useState(1);

  function onclick(e){
    if(e.target.id==='back' && page>1){
      SetPage(page-1);
    }else if(e.target.id==='front'){
      SetPage(page+1);
    }
  }

  useEffect(()=>{
     (async ()=>{
      let result1 = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${((page-1)*24)+1}`);
      let result2 = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=4&page[offset]=${((page-1)*24)+21}`);

      setData([...result1.data.data,...result2.data.data]);
     })();
  },[page]);


  return (
    <div >
        <div className='bg-blue-200 p-3 text-center text-4xl font-bold my-8 mb-[3rem]'>Trending Movies</div>
        <div className=' my-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-flow-row auto-cols-max place-items-center gap-y-7'>
            {data.map((item,index)=>{
              return(
                <MovieCard key={index} id={item.id} title={item.attributes.titles['en_jp']} image={item.attributes.posterImage['original']}></MovieCard>
              )
            })}
            
        </div>

        <Pagination page={page} onclick={onclick}/>
    </div>
  )
}

export default Trending