import { useState } from "react"
import { useUser } from "../context/userContext"
import { UserInfoInterface } from "../interface/user.interface"

const SettingsUserProfileHook = () => {
    const [ user, setUser ] = useState<UserInfoInterface | null>()
    const userContext = useUser()
    
    const [ imgUser, setImgUser ] = useState<string>('')
    

    const fetchUser = async () => {
        const user = await userContext.getUser();
        setUser(user);
        setImgUser(user?.img || ''); 
    };
    
    
    return{
        user,
        imgUser,
        setImgUser,
        userContext,
        fetchUser
    }

}

export default SettingsUserProfileHook