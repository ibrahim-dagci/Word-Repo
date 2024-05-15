import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import stylesheet from './stylesheet';
import {Picker} from '@react-native-picker/picker';

interface PickerComponentProps {
  data: {label: string; value: any}[];
  selectControlStateArray: [any, React.Dispatch<React.SetStateAction<any>>];
}

const PickerComponent: FC<PickerComponentProps> = ({
  data,
  selectControlStateArray,
}) => {
  const [selectedValue, setSelectedValue] = selectControlStateArray;
  const flag = 'U+1F1F9 U+1F1F7'
    .split(' ') // Unicode kodlarını boşluklardan ayır
    .map(code => String.fromCodePoint(parseInt(code.replace('U+', ''), 16)));
  return (
    <View style={stylesheet.container}>
      <View>
        <Text style={{fontSize: 40}}>{flag}</Text>
      </View>
      <Picker
        style={{flex: 1}}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        mode="dialog"
      >
        {data?.map((item, index) => {
          return (
            <Picker.Item label={item.label} value={item.value} key={index} />
          );
        })}
      </Picker>
    </View>
  );
};

export default PickerComponent;
