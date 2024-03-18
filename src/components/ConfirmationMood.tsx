import React from 'react'

const ConfirmationMood = ({ mood,emoji }: { mood: string ,emoji:string}) => {
    return (
        <div className=' w-fit h-28 flex items-center'>
            <h1 className="text-5xl font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-slate-500 to-red-500 p-2">You picked {mood}</h1>
             <img src={emoji} alt="" className='w-20 h-20 rounded-full'/>
        </div>
    )
}

export default ConfirmationMood
