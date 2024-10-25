import { useState } from "react"
import { chubbImg } from "../assets/img.data";

const HomeScreenHook = () =>{
    const [ randomImg, setRandomImg ] = useState<string>('')

    const getRandomAvatar = () => {
        const randomIndex = Math.floor(Math.random() * chubbImg.length); 
        return chubbImg[randomIndex].chubb;
    };

    return{
        randomImg,
        setRandomImg,
        getRandomAvatar
    }
}

export default HomeScreenHook