import stylesheet from "./stylesheet";
import {
    FC, 
    useContext
} from "react";
import {
    View 
} from "react-native";
import Input from "../../input";
import Button from "../../button";
import {
    SendIcon
} from "../../../assets/svg";
import { 
    AppContext
} from "../../../context";

interface SendInputProps {
}

const SendInput: FC<SendInputProps> = ()=>{
    const {
        values
    } = useContext(AppContext);
    const {
        theme: {
            colors
        },
    } = values;
    return <View style={stylesheet.container}>
        <Input 
            style={stylesheet.input}
        />
        <Button 
            variant="custom"
            customContent = {<SendIcon size={36} color={colors.gradient[2]}/>}
            onPress={()=>{}}
        />
    </View>;
};

export default SendInput;