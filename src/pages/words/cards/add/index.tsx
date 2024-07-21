import stylesheet from './stylesheet';
import {
    ModalContext
} from '../../../../components/modal/context';
import {
    Recorder,
    Button, 
    Input, 
} from '../../../../components';
import {
    UserWordService
} from '../../../../service/webservice';
import  {
    useContext, 
    useState,
    FC, 
} from 'react';
import {
    SaveIcon
} from '../../../../assets/svg';
import {
    AppContext
} from '../../../../context';
import {
    View
} from 'react-native';

interface AddCardProps {
  primaryLanguage: string;
  currentLanguage: string;
  user: any;
}

const Card: FC<AddCardProps> = ({
    primaryLanguage, currentLanguage, user
}) => {
    const {
        values
    } = useContext(AppContext);
    const {
        theme: {
            colors
        },
    } = values;
    const [recordedUri, setRecordedUri] = useState('');
    const [word, setWord] = useState('');
    const [mean, setMean] = useState('');
    const {
        modalVisibilityControl
    } = useContext(ModalContext);
    const [modalVisibility, setModalVisibility] = modalVisibilityControl || [];

    return (
        <View style={stylesheet.container}>
            <Button
                onPress={() => {
                    const token = user.token;
                    new UserWordService()
                        .createUserWord(token, recordedUri, {
                            primaryLanguage,
                            currentLanguage,
                            word,
                            mean,
                        })
                        .then(() => {
                            setModalVisibility?.(false);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }}
                variant="custom"
                style={{
                    position: 'absolute', right: 15, top: 15
                }}
                customContent={<SaveIcon size={25} color={colors.gradient[2]} />}
            />
            <View style={stylesheet.inputContainer}>
                <Input
                    onChangeText={value => setWord(value)}
                    placeholder="*Word"
                    style={{
                        borderColor: colors.gradient[2], borderWidth: 1
                    }}
                    keyboard="default"
                    value={word}
                />
                <Input
                    onChangeText={value => setMean(value)}
                    placeholder="*Mean"
                    style={{
                        borderColor: colors.gradient[2], borderWidth: 1
                    }}
                    keyboard="default"
                    value={mean}
                />
            </View>
            <Recorder
                onRecordingComplete={uri => {
                    setRecordedUri(uri);
                }}
            />
        </View>
    );
};

export default Card;
