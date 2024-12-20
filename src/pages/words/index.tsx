import Toast from 'react-native-simple-toast';
import stylesheet from './stylesheet';
import {
    ModalComponent, 
    Switcher, 
    Button, 
    Word
} from '../../components';
import {
    TabStackNavigationPropsLanguage
} from '../../navigation/types';
import React, {
    useContext, 
    useEffect, 
    useState
} from 'react';
import {
    EarthIcon, 
    PenIcon
} from '../../assets/svg';
import {
    ShowWordCard,
    AddWordCard, 
} from './cards';

import {
    FlatList, View
} from 'react-native';
import {
    AppContext
} from '../../context';

import {
    UserWordService
} from '../../service/webservice';

const Words = ({
    navigation,
    route, 
}: TabStackNavigationPropsLanguage) => {
    const {
        dispatch,
        values, 
    } = useContext(AppContext);
    const {
        theme: {
            colors
        },
    } = values;
    const [primaryLanguage] = useState(route.params.user.user.primaryLanguage);
    const [currentLanguage] = useState(route.params.language);
    const [validSwitchState, setValidSwitchState] = useState<boolean>(false);
    const [wordModalVisibility, setWordModalVisibility] =
    useState<boolean>(false);
    const [addWordModalVisibility, setAddWordModalVisibility] =
    useState<boolean>(false);
    const [listData, setListData] = useState<any[]>([]);
    const [lan1isCurrent, setLan1isCurent] = useState<boolean>(true);
    const [pressedWordData, setPressedWordData] = useState<any>({
    });

    useEffect(() => {
        if(addWordModalVisibility === false){
            getListData();
            isCurrentLanguageLan1();
        }
    }, [addWordModalVisibility]);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    variant="custom"
                    customContent={<EarthIcon size={25} />}
                    onPress={() => navigation.goBack()}
                    style={{
                        marginLeft: 15
                    }}
                />
            ),
            headerRight: () => (
                <Button
                    variant="custom"
                    customContent={<PenIcon size={25} />}
                    onPress={() => {
                        setAddWordModalVisibility(true);
                    }}
                    style={{
                        marginRight: 15
                    }}
                />
            ),
        });
    }, []);

    useEffect(()=>{
        console.log("rerendered");
    },[]);

    const getListData = () => {
        dispatch({
            type: 'UPDATE_LOADING', payload: true
        });
        new UserWordService()
            .getUserWords(route.params.user.token, primaryLanguage, currentLanguage)
            .then(res => {
                setListData(res);
                dispatch({
                    type: 'UPDATE_LOADING', payload: false
                });
            })
            .catch(e => {
                Toast.show(`${e.name}: ${e.message}`, Toast.LONG);
                dispatch({
                    type: 'UPDATE_LOADING', payload: false
                });
            });
    };

    const isCurrentLanguageLan1 = () => {
        primaryLanguage.localeCompare(currentLanguage) > 0
            ? setLan1isCurent(true)
            : setLan1isCurent(false);
    };

    return (
        <View
            style={[stylesheet.container, {
                backgroundColor: colors.pageBackground
            }]}
        >
            <FlatList
                ListHeaderComponent={
                    <Switcher
                        switchStateArray={[validSwitchState, setValidSwitchState]}
                        leftText={currentLanguage}
                        rightText={primaryLanguage}
                    />
                }
                renderItem={({
                    item
                }) => {
                    let key = lan1isCurrent ? 'lan1' : 'lan2';
                    const currentKey = key;
                    const primaryKey = lan1isCurrent ? 'lan2' : 'lan1';
                    if (validSwitchState) {
                        key = key === 'lan1' ? 'lan2' : 'lan1';
                    }
                    return (
                        <Word
                            text={item.meanId[key].word}
                            onPress={() => {
                                setWordModalVisibility(true);
                                setPressedWordData({
                                    word: item.meanId[currentKey].word,
                                    mean: item.meanId[primaryKey].word,
                                    voice: item.voice,
                                    token: route.params.user.token,
                                });
                            }}
                        />
                    );
                }}
                data={listData}
                keyExtractor={item => item._id}
                horizontal={false}
                numColumns={2}
            />
            <ModalComponent
                visibilityControl={[wordModalVisibility, setWordModalVisibility]}
                animationType="fade"
                variant="card"
            >
                <ShowWordCard data={pressedWordData} />
            </ModalComponent>
            <ModalComponent
                visibilityControl={[addWordModalVisibility, setAddWordModalVisibility]}
                animationType="fade"
                variant="card"
            >
                <AddWordCard
                    primaryLanguage={primaryLanguage}
                    currentLanguage={currentLanguage}
                    user={route.params.user}
                />
            </ModalComponent>
        </View>
    );
};

export default Words;
