import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {DeleteIcon, PauseIcon, PlayIcon} from '../../assets/svg';
import React, {FC, useContext, useEffect, useState} from 'react';
import Toast from 'react-native-simple-toast';
import {AppContext} from '../../context';
import stylesheet from './stylesheet';
import Button from '../button';
import {
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

interface RecorderProps {
  style?: StyleProp<ViewStyle>;
  onRecordingComplete?: (uri: string) => void;
}
type status = 'Record' | 'Recording...' | 'Recorded' | 'Playing...';
const audioRecorderPlayer = new AudioRecorderPlayer();

const Recorder: FC<RecorderProps> = ({style, onRecordingComplete}) => {
  const {values} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;

  const [status, setStatus] = useState<status>('Record');
  const [redStyle, setRedStyle] = useState<StyleProp<ViewStyle>>();
  const [recording, setRecording] = useState(false);
  const [recordedUri, setRecordedUri] = useState('');
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermissions();
    }
  }, []);

  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
      } else {
        Toast.show('You need to allow microphone', Toast.SHORT);
      }
    } catch (err) {
      Toast.show(`Error:${err}`, Toast.SHORT);
    }
  };

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      return;
    });
    setRecordedUri(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordedUri(result);
    if (onRecordingComplete) {
      onRecordingComplete(result);
    }
  };

  const onPlay = async () => {
    await audioRecorderPlayer.startPlayer(recordedUri);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition === e.duration) {
        audioRecorderPlayer.stopPlayer();
        audioRecorderPlayer.removePlayBackListener();
        setStatus('Recorded');
      }
      return;
    });
  };

  const onStopPlay = async () => {
    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const onDelete = () => {
    setRecordedUri('');
    if (onRecordingComplete) {
      onRecordingComplete('');
    }
  };

  const record = async () => {
    if (status === 'Record') {
      await onStartRecord();
      setRedStyle({width: 30, height: 30, borderRadius: 5});
      setStatus('Recording...');
    } else if (status === 'Recording...') {
      await onStopRecord();
      setRedStyle({width: 40, height: 40, borderRadius: 20});
      setStatus('Recorded');
    }
  };

  return (
    <View
      style={[
        stylesheet.container,
        {backgroundColor: colors.pageBackground},
        style,
      ]}
    >
      {status === 'Recorded' && (
        <Button
          variant="custom"
          style={{position: 'absolute', top: 15, right: 15}}
          customContent={<DeleteIcon size={25} color="#E40202" />}
          onPress={() => {
            onDelete();
            setStatus('Record');
          }}
        />
      )}
      <Text style={[stylesheet.status, {color: colors.gradient[2]}]}>
        {status}
      </Text>
      <Pressable style={stylesheet.record} onPress={record}>
        {status === 'Recorded' && (
          <Button
            variant="custom"
            customContent={<PlayIcon size={20} color={colors.gradient[2]} />}
            onPress={async () => {
              await onPlay();
              setStatus('Playing...');
            }}
            title="Play"
          />
        )}
        {status === 'Playing...' && (
          <Button
            variant="custom"
            customContent={<PauseIcon size={20} color={colors.gradient[2]} />}
            title="Stop"
            onPress={async () => {
              await onStopPlay();
              setStatus('Recorded');
            }}
          />
        )}
        {(status === 'Record' || status === 'Recording...') && (
          <View style={[stylesheet.red, redStyle]} />
        )}
      </Pressable>
    </View>
  );
};

export default Recorder;
