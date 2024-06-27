import {AppContext} from '../../../../context';
import {Bitext, Button} from '../../../../components';
import React, {FC, useContext, useEffect, useState} from 'react';
import stylesheet from './stylesheet';
import {View} from 'react-native';
import {SpeakerIcon} from '../../../../assets/svg';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {SERVRER_ADRESS} from '../../../../constants';

const audioRecorderPlayer = new AudioRecorderPlayer();

interface WordCardProps {
  data: any;
}

const Card: FC<WordCardProps> = ({data}) => {
  const {values} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      // Bileşen unmount edildiğinde oynatmayı durdur ve dinleyiciyi kaldır
      audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();
    };
  }, []);

  const startPlaying = async () => {
    const url = `${SERVRER_ADRESS}/api/uploads/voices/${data.voice}`; // Ses dosyasının URL'si
    const headers = {
      Authorization: `Bearer ${data.token}`,
    };

    try {
      setIsPlaying(true);
      await audioRecorderPlayer.startPlayer(url, headers);

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
  return (
    <View style={stylesheet.container}>
      <Button
        variant="custom"
        customContent={<SpeakerIcon size={25} color={colors.gradient[2]} />}
        loading={isPlaying}
        onPress={startPlaying}
      ></Button>
      <Bitext
        leftText={'Word:'}
        rightText={data.word}
        containerStyle={{borderColor: colors.gradient[2], borderWidth: 1}}
      />
      <Bitext
        leftText={'Mean:'}
        rightText={data.mean}
        containerStyle={{borderColor: colors.gradient[2], borderWidth: 1}}
      />
      <Bitext
        leftText={'Other Means:'}
        rightText=""
        containerStyle={{
          borderColor: colors.gradient[2],
          borderWidth: 1,
          gap: 10,
        }}
      />
    </View>
  );
};

export default Card;
