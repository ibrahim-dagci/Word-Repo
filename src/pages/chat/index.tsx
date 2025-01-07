import  {
    useState
} from 'react';
import stylesheet from './stylesheet';
import {
    View
} from 'react-native';
import {
    TabStackNavigationPropsChat
} from '../../navigation/types';
import {
    ChatComponent
} from "../../components";
import {
    ChatData 
} from '../../components/chat';

const Chat = ({
    navigation, 
    route
}: TabStackNavigationPropsChat) => {

    const [data,setData] = useState<ChatData>(
        [
            {
                id:"12",message:"OK.",isMe:true,status:true
            },
            {
                id:"11",message:"Okay then, let's review the words you learned before, shall we?",isMe:false,status:true
            },
            {
                id:"10",message:"I' don't know.",isMe:true,status:true
            },
            {
                id:"9",message:"uups! So what other words did you learn?",isMe:false,status:true
            },
            {
                id:"8",message:"thank uuuu",isMe:true,status:true
            },
            {
                id:"7",message:"I appreciate you :)",isMe:false,status:true
            },
            {
                id:"6",message:"appreciate",isMe:true,status:true
            },
            {
                id:"5",message:"I'm glad you're well. What new word did you learn today?",isMe:false,status:true
            },
            {
                id:"4",message:"Thanks. Me too.",isMe:true,status:true
            },
            {
                id:"3",message:"I'm fine. You?",isMe:false,status:true
            },
            {
                id:"2",message:"How are you?",isMe:true,status:true
            },
            {
                id:"1",message:"hello ! How can i help you?",isMe:false,status:true
            },
            {
                id:"0",message:"hello",isMe:true,status:true
            },
        ]
    );

    return <View style={stylesheet.container}>
        <ChatComponent
            data={data}
        />
    </View>;
};

export default Chat;
