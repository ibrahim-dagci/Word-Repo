import Toast from 'react-native-simple-toast';
import stylesheet from './stylesheet';
import storage from '../../storage';
import {
    useContext, 
    useEffect, 
    useState,
} from 'react';
import {
    FlatList, 
    Platform, 
    Text, 
    View
} from 'react-native';
import {
    Bitext
} from '../../components';
import {
    UserLanguageService
} from '../../service/webservice';
import {
    fetchAndSaveLanguages
} from '../../service/storageservice';
import {
    ModalContext
} from '../../components/modal/context';

const Select = () => {
    const {
        modalVisibilityControl
    } = useContext(ModalContext);
    const [modalVisible, setModalVisible] = modalVisibilityControl || [];
    const [languages, setLanguages] = useState<any[]>([]);

    const [currentUser, setCurrentUser] = useState<any>();

    useEffect(() => {
        const userString = storage.getString('user');
        const userObject = userString ? JSON.parse(userString) : [];
        setCurrentUser(userObject);
    }, []);

    useEffect(() => {
        setListLata();
    }, []);

    const setListLata = async () => {
        await fetchAndSaveLanguages().catch((e: Error) => {
            Toast.show(`Network Error:${e.message}`, Toast.LONG);
        });
        const languagesString = storage.getString('languages');
        const languagesObject = languagesString ? JSON.parse(languagesString) : [];
        setLanguages(languagesObject);
    };

    const unicodeToSymbol = (unicode: string) => {
    //Converts the flag unicode of the selected language item to emoji
        const flag = unicode
            .split(' ')
            .map((code: string) =>
                String.fromCodePoint(parseInt(code.replace('U+', ''), 16)),
            );
        return flag;
    };
    return (
        <View style={stylesheet.container}>
            <Text style={stylesheet.title}>Select</Text>
            <FlatList
                renderItem={({
                    item
                }) => {
                    return (
                        <Bitext
                            leftText={unicodeToSymbol(item.flagUnicode)}
                            rightText={item.name}
                            leftStyle={{
                                fontSize: Platform.OS === 'android' ? 30 : 35
                            }}
                            rightStyle={{
                                color: 'black'
                            }}
                            onPress={() => {
                                new UserLanguageService()
                                    .createUserLanguage(currentUser.token, item.symbol)
                                    .then(() => {
                                        setModalVisible?.(!modalVisible);
                                    })
                                    .catch(e => {
                                        Toast.show(`${e.name}:${e.message}`, Toast.LONG);
                                    });
                            }}
                            containerStyle={{
                                padding: 5
                            }}
                        />
                    );
                }}
                data={languages}
                keyExtractor={item => item.name}
            />
        </View>
    );
};

export default Select;
