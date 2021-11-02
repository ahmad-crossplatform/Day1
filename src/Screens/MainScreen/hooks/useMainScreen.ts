import { useState } from "react";

export const useMainScreen = () => {


    const [isPressed, setIsPressed] = useState(false);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const toggleShowPassword = () => {
        setIsPasswordHidden(!isPasswordHidden);
    }

    return ({ isPressed, setIsPressed, isPasswordHidden, toggleShowPassword });
}