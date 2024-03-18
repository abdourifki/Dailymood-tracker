import { useState } from "react"
import ConfirmationMood from "./ConfirmationMood"

export default function MoodTracker() {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(images/bg.jpg)`, // Utilisez le chemin relatif direct
    };
    
    const [mood, setMood] = useState("")
    const [emoji, setEmoji] = useState("")

    const moodTracker = (mood:string,emoji:string)=>{
      setMood(mood)
      setEmoji(emoji)
    }

    const emojis = [
        {
            id: 1,
            emoji: '../../images/happy.gif',
            name: 'Happy'
        },
        {
            id: 2,
            emoji: '../../images/angry.gif',
            name: 'angry'
        },
        {
            id: 3,
            emoji: '../../images/overthinking.gif',
            name: 'overthinking'
        },
        {
            id: 4,
            emoji: '../../images/sad.gif',
            name: 'sad'
        },
        {
            id: 5,
            emoji: '../../images/crying.gif',
            name: 'crying'
        },
        {
            id: 6,
            emoji: '../../images/sleepy.gif',
            name: 'sleep'
        }
    ]
    return (
        <div className=" flex justify-center items-center h-screen flex-col gap-y-16"  style={backgroundStyle} >
            {!mood ?
                <>
                    <h1 className="capitalize text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-slate-500 to-red-500 bg-clip-text text-transparent ">please could you pick your mood</h1>
                    <div className="grid grid-cols-3 gap-16 ">
                        {emojis.map((emoji) => (
                            <button className="col-span-4 sm:col-span-1 hover:bg-gradient-to-r p-3 rounded-md duration-300  " key={emoji.id} onClick={()=>moodTracker(emoji.name,emoji.emoji)}>
                                <img src={emoji.emoji} alt={emoji.name} className="w-32 h-32 rounded-full" />
                                <h2 className="text-center text-gray-500 text-xl font-bold capitalize ">{emoji.name}</h2>
                            </button>
                        ))}
                    </div>
                </> :
                <ConfirmationMood mood={mood} emoji={emoji} />
            }
        </div>
    )
}
