"use client"
import { getAlldetailsWithRewaya, getAllSorah, getreciters, getRewaia } from '@/app/redux/quraanSlice'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./styles.module.css"
let {mainContainer , main}=styles

export default function Quraan() {

  const {reciters ,Rewaia,sourahWithRewaya,swar, isLoading} =useSelector((state)=>state.quraanslice)
  const [listOfSurha, setlistOfSurha] = useState('')

  const surahLisa=listOfSurha.split(",")


  const dispatch = useDispatch()
  
  const [serverSrc, setServerSrc] = useState("")
  const [server, setServer] = useState("")

  useEffect(() => {
    
    dispatch( getreciters() )
    dispatch( getAllSorah() )
    
      
    
  }, [])

  function getAllRewaya (idreciter){

    dispatch( getRewaia(idreciter) )



  }
  function sourahSrc (server , id){

    setServerSrc(`${server}${id.padStart(3, 0)}.mp3`)



  }
  function getAllSorahWithreeaya (idrewaya){
    const selectedOption = idrewaya.options[idrewaya.selectedIndex]
    dispatch( getAlldetailsWithRewaya(idrewaya.value) )


setlistOfSurha(selectedOption.dataset.list)
setServer(selectedOption.dataset.server)

  }
  return (<>
    <Head>  
    <title>القرآن الكريم</title> 
    <meta name="description" content="استمع إلى القرآن الكريم بصوت قراء مختلفين مع إمكانية اختيار الرواية." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className={main}  >
  <div className={`pt-20 px-10 mx-auto w-2/3  ${mainContainer}` }>
      <form className=' grid grid-cols-3 gap-4'> 
   <div className='col-span-3'>
         <label htmlFor="" className='text-2xl text-teal-950'>اختر القارئ</label>
      <select  className='outline-2 outline-gray-900 col-span-1 w-full' onChange={(e)=>getAllRewaya(e.target.value)} >

{reciters.map((reciter)=><option key={reciter.id}  value={reciter.id}>{reciter.name}</option> )}

        </select>
   </div>
   <div className='  col-span-3'>
         <label htmlFor="" className='text-2xl text-teal-950'>اختر الروايه</label>
      <select className='outline-2 outline-gray-900 col-span-1  w-full' onChange={(e)=>getAllSorahWithreeaya(e.target)} >
      <option value="">الروايه</option>

      { Rewaia ?Rewaia.map((rewaya) => 
  <option key={rewaya.id} data-server={rewaya.server} data-list={rewaya.surah_list} value={rewaya.id}>{rewaya.name}</option>):""}
        </select>
   </div>
   <div className='  col-span-3'>
         <label htmlFor="" className='text-2xl text-teal-950'>اختر السورة</label> 
      <select onChange={(e)=>sourahSrc(server,e.target.value)} className='outline-2 outline-gray-900 col-span-1  w-full' >
      <option  >اختر السوره</option>
{swar.filter((surah)=>surahLisa?.includes(surah.id.toString())).map((el)=><option key={el.id} value={el.id}> {el.name}</option>
 )}
        </select>
   </div>
        
        </form> 
   <div>
   {serverSrc && (
        <div className="mt-4 w-full">
          <audio key={serverSrc} controls autoPlay className=' w-full '>
            <source src={serverSrc} type="audio/mpeg" />
            المتصفح لا يدعم تشغيل الملفات الصوتية
          </audio>
        </div>
      )}
   </div>
    </div>
  </main>

    </>  )
}
