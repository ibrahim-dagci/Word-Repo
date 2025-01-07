import stylesheet from './stylesheet';
import SendInput from './input';
import Bubble from './bubble';
import {
    FC,
    useContext
} from 'react';
import {
    FlatList,
    View
} from 'react-native';
import { 
    AppContext
} from '../../context';

export type ChatData = {
    message:string,
    status:boolean,
    isMe:boolean
    id:string
}[]

interface ChatProps {
    data: ChatData
}

const Chat: FC<ChatProps> = ({
    data
}) => {

    const {
        values
    } = useContext(AppContext);
    const {
        theme: {
            colors
        },
    } = values;
    
    return <View 
        style={[stylesheet.container, {
            backgroundColor: colors.pageBackground
        }]}
    >
        <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            style={stylesheet.list}
            data={data}
            renderItem={
                (row)=> {
                    return <Bubble
                        text={`${row.item.message}`}
                        isMe={row.item.isMe}
                        status={row.item.status}
                    />;
                }
            }
            ListHeaderComponent={<SendInput/>}
        />
    </View>;
};

export default Chat;