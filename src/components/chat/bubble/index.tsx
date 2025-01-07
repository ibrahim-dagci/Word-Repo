import stylesheet from "./stylesheet";
import {
    FC, 
    useContext
} from "react";
import {
    Text,
    View 
} from "react-native";
import {
    AppContext 
} from "../../../context";
import {
    CheckdIcon, 
    ClockIcon
} from "../../../assets/svg";

interface BubbleProps {
    status: boolean
    isMe: boolean
    text: string
}

const Bubble: FC<BubbleProps> = ({
    status,
    text,
    isMe
})=>{

    const {
        values
    } = useContext(AppContext);
    const {
        theme: {
            colors
        },
    } = values;

    return <View 
        style={
            [
                stylesheet.container, 
                {
                    alignItems: isMe ? "flex-end" : "flex-start",
                }
            ]
        }
    >
        <View 
            style={
                [
                    stylesheet.textContainer, 
                    {
                        backgroundColor:colors.secondary
                    }
                ]
            }
        >
            <Text style={stylesheet.text}>
                {text}
            </Text>
            <View style={stylesheet.statusView}>
                {status ? <CheckdIcon size={10} color={colors.gradient[2]}/> : <ClockIcon size={10}/>  }
            </View>
        </View>
    </View>;
};

export default Bubble;