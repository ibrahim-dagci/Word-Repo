import stylesheet from './stylesheet';
import {
    FC
} from 'react';
import {
    Text, 
    View
} from 'react-native';
import {
    Picker
} from '@react-native-picker/picker';

interface PickerComponentProps {
  data: {label: string; value: any}[];
  selectControlStateArray: [any, React.Dispatch<React.SetStateAction<any>>];
  symbol?: string;
  title?: string;
}

const PickerComponent: FC<PickerComponentProps> = ({
    data,
    selectControlStateArray,
    symbol = '',
    title,
}) => {
    const [selectedValue, setSelectedValue] = selectControlStateArray;
    return (
        <View style={stylesheet.container}>
            <Text style={stylesheet.placeholder}>{title}</Text>
            <View>
                <Text style={{
                    fontSize: 40
                }}>{symbol}</Text>
            </View>
            <Picker
                style={{
                    flex: 1
                }}
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
