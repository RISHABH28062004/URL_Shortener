"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-xl flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input className='px-4 py-2 bg-white rounded-xl focus:outline-purple-600'
          value={url}
          type="text"
          placeholder="Enter your URL"
          onChange={e => { seturl(e.target.value) }} />

        <input className='px-4 py-2 bg-white rounded-xl focus:outline-purple-600'
          value={shorturl}
          type="text"
          placeholder='Enter your preferred short URL'
          onChange={e => { setshorturl(e.target.value) }} />

        <button onClick={generate} className='bg-purple-500 shadow-lg p-3 my-3 text-white rounded-xl py-1 font-bold hover:bg-purple-400 cursor-pointer'>Generate</button>
      </div>

      {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link>
      </code></>}
    </div>
  )
}

export default Shorten  
