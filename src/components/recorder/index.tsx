import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import React, {FC, useContext, useState} from 'react';
import {AppContext} from '../../context';
import stylesheet from './stylesheet';
import Button from '../button';
import {DeleteIcon, PauseIcon, PlayIcon, ProfileIcon} from '../../assets/svg';

interface RecorderProps {
  style?: StyleProp<ViewStyle>;
}
type status = 'Record' | 'Recording...' | 'Recorded' | 'Playing...';

const Recorder: FC<RecorderProps> = ({style}) => {
  const {values} = useContext(AppContext);
  const {
    theme: {colors},
  } = values;

  const [status, setStatus] = useState<status>('Record');
  const [redStyle, setRedStyle] = useState<StyleProp<ViewStyle>>();

  const record = () => {
    if (status === 'Record') {
      setRedStyle({width: 30, height: 30, borderRadius: 5});
      setStatus('Recording...');
    } else if (status === 'Recording...') {
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
            onPress={() => {
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
            onPress={() => {
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
