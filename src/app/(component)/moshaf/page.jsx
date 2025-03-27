"use client"
import { getRadios } from '@/app/redux/radioSlice'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Moshaf() {
  const [radioSrc, setRadioSrc] = useState(null)
  const [radioname, setRadioname] = useState(null)
  let {radios ,radioLoading} = useSelector((state)=>state.radioslice)

function radioInfo(url , name){
  setRadioSrc(url) ;
  setRadioname(name);

}
  
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getRadios())
  }, [])
  
      return (<>
  <Head>  
    <title>القرآن الكريم</title> 
    <meta name="description" content="استمع إلى القرآن الكريم بصوت قراء مختلفين مع إمكانية اختيار الرواية." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head> 
   <div className='raidoMain p-5'>
   <div className=' flex flex-col justify-between items-center h-[90vh] '>
      <h2 className='textRadio'>الراديو الاسلامي</h2>
      <div className='liveRadio w-full text-center '>
        <h2>اختر القناة </h2>
        {radioLoading && <p>جاري تحميل القنوات...</p>}
        <div className='grid grid-cols-4 '>
        {radios?.length > 0 ? (
              radios.map((channel) => (
                <button 
                  key={channel.id} 
                  onClick={() =>radioInfo(channel.url , channel.name) }
                  className=' block p-2 m-1 bg-cyan-800 rounded-xl cursor-pointer col-span-1 overflow-hidden text-sm'
                >
                  {channel.name}
                </button>
              ))
            ) : (
              !radioLoading && <p>لا توجد قنوات متاحة</p>
            )}        </div>
      </div>

<div className="m-4 w-2/3 text-center gap-2"> 
{radioname&&<h3 className=' textRadio mb-2 text-3xl  '>{radioname}</h3>
}
          <audio key={radioSrc} controls autoPlay className=' w-full '>
            <source src={radioSrc} type="audio/mpeg" />
            المتصفح لا يدعم تشغيل الملفات الصوتية
          </audio>
        </div>



    </div>
   </div>
      </>
  )
}
