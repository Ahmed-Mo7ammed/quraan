"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import Head from 'next/head'
export default function NavBar() {
 
    const patheName=usePathname()
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
     function handleScroll(){

        if (window.scrollY > 20){
            setScroll(true)

      }else{
        setScroll(false)
      }

     }
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    
const listOfLinks=[{path:"/" , name:"البث المباشر" },
    {path:"/moshaf" , name:"الراديو الاسلامي " },
    {path:"/quraan" , name:"القران المسموع " } ]
  return (<>
    <Head>  
    <title>القرآن الكريم</title> 
    <meta name="description" content="استمع إلى القرآن الكريم بصوت قراء مختلفين مع إمكانية اختيار الرواية." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className={`flex justify-center items-center fixed w-full z-20    ${scroll?`transition-all ${styles.navBackground} `: "bg-cyan-950"}`} >
<div className='container flex  items-center justify-center px-7'>
<div className='links'>
<ul className=' flex gap-3 list-none '>
{listOfLinks.map((link , i)=>{
return <li className={`${patheName == link.path ? styles.active : ""} text-white px-3 py-2`} key={i}> 

<Link href={`${link.path}`}>{link.name}</Link> </li>


})}
</ul>
</div>
</div>

    </div>
    </> )
}
