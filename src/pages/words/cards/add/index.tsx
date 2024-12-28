import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Toast from 'react-native-simple-toast';
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
    DictionaryService,
    UserWordService
} from '../../../../service/webservice';
import  {
    useContext, 
    useEffect, 
    useState,
    FC,
} from 'react';
import {
    SpeakerIcon,
    SaveIcon,
} from '../../../../assets/svg';
import {
    AppContext
} from '../../../../context';
import {
    TextInputEndEditingEventData,
    NativeSyntheticEvent,
    Text,
    View
} from 'react-native';

const audioRecorderPlayer = new AudioRecorderPlayer();

interface AddCardProps {
  primaryLanguage: string;
  currentLanguage: string;
  user: any;
}

const Card: FC<AddCardProps> = ({
    primaryLanguage, currentLanguage, user
}) => {
    const {
        values,
    } = useContext(AppContext);
    const {
        theme: {
            colors
        },
    } = values;
    const [recordedUri, setRecordedUri] = useState('');
    const [word, setWord] = useState('');
    const [mean, setMean] = useState('');
    const [saveButtonLoading, setSaveButtonLoading] = useState(false);
    const [sounds,setSounds] = useState([]);
    const {
        modalVisibilityControl
    } = useContext(ModalContext);
    const [modalVisibility, setModalVisibility] = modalVisibilityControl || [];

    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
        return () => {
            // Bileşen unmount edildiğinde oynatmayı durdur ve dinleyiciyi kaldır
            audioRecorderPlayer.stopPlayer();
            audioRecorderPlayer.removePlayBackListener();
        };
    }, []);

    const startPlaying = async (url:string) => {
        try {
            setIsPlaying(true);
            await audioRecorderPlayer.startPlayer(url);
    
            audioRecorderPlayer.addPlayBackListener(e => {
                if (e.currentPosition >= e.duration) {
                    // Oynatma tamamlandığında yapılacak işlemler
                    audioRecorderPlayer.stopPlayer();
                    audioRecorderPlayer.removePlayBackListener();
                    setIsPlaying(false);
                }
            });
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    };

    const save = () => {
        if (word === "" || mean === "" || recordedUri === ""){
            Toast.show(`Please fill in the required fields.`, Toast.SHORT);
            return null;
        }
        setSaveButtonLoading(true);
        const token = user.token;
        new UserWordService()
            .createUserWord(token, recordedUri, {
                primaryLanguage,
                currentLanguage,
                word,
                mean,
            })
            .then(() => {
                setSaveButtonLoading(false);
                setModalVisibility?.(false);
            })
            .catch(e => {
                setSaveButtonLoading(false);
                Toast.show(`${e.name}:${e.message}`, Toast.SHORT);
            });
    };

    const fetchPronunciations = (event: NativeSyntheticEvent<TextInputEndEditingEventData>)=> {
        new DictionaryService().getPronunciation(event.nativeEvent.text)
            .then((res)=>{
                setSounds(res.voices);
            }).catch((err)=>{
                setSounds([]);
            });
    };

    return (
        <View style={stylesheet.container}>
            <Button
                onPress={save}
                variant="custom"
                style={{
                    position: 'absolute', right: 15, top: 15
                }}
                customContent={<SaveIcon size={25} color={colors.gradient[2]} />}
                loading = {saveButtonLoading}
            />
            <View style={stylesheet.soundsContainer}>
                {sounds.map((value:string ,index)=>{
                    return <Button 
                        key={index}
                        onPress={()=>{
                            startPlaying(value);
                        }}
                        variant='custom'
                        customContent={
                            <View style={stylesheet.soundButtonContent}>
                                <Text style={stylesheet.soundButtonContentText}>
                                    {value.split("-")[value.split("-").length-1].split(".")[0]}
                                </Text>
                                <SpeakerIcon
                                    size={20} 
                                    color={colors.gradient[2]}
                                />
                            </View>
                        }
                        style={{
                            marginRight:10
                        }}
                    />;
                })}
            </View>
            <View style={stylesheet.inputContainer}>
                <Input
                    onChangeText={value => setWord(value)}
                    placeholder="*Word"
                    style={{
                        borderColor: colors.gradient[2], 
                        borderWidth: 1
                    }}
                    keyboard="default"
                    value={word}
                    onEndEditing={fetchPronunciations}
                />
                <Input
                    onChangeText={value => setMean(value)}
                    placeholder="*Mean"
                    style={{
                        borderColor: colors.gradient[2], 
                        borderWidth: 1
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
