import React, {FC, useState} from 'react';
import {View} from 'react-native';
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
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.icon}></View>
      <Picker
        style={{flex: 1}}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {data.map((item, index) => {
          return (
            <Picker.Item label={item.label} value={item.value} key={index} />
          );
        })}
      </Picker>
    </View>
  );
};

export default PickerComponent;
