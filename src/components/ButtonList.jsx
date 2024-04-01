import React, { useState } from 'react'


const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller"]

const ButtonList = () => {
  const [active, setActive] = useState("All");


  const videoByTag = (tag) => {
    if (active !== tag) {
      setActive(tag);
    }
  }
  console.log(active);

  return (
    <div className='flex w-[95%] ml-4 my-1 overflow-hidden'>
      {
        buttonList.map((buttonName, index) => {
          return (
            <div key={index}>
              <button onClick={() => { videoByTag(buttonName) }} className={`${active === buttonName ? "bg-black text-white" : "bg-[#f2f2f2]"} w-fit font-small mx-1 cursor-pointer px-3 py-1 rounded-lg`}><span className="">{buttonName}</span></button>
            </div>
          )
        })
      }

    </div>
  )
}

export default ButtonList