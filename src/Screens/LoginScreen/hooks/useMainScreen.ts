import { useState } from "react";

export const useMainScreen = () => {



    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const toggleShowPassword = () => {
        setIsPasswordHidden(!isPasswordHidden);
    }

    return ({ isPasswordHidden, toggleShowPassword });
}