import {useColorScheme} from 'react-native';
import {createContext, useEffect, useState} from 'react';
type ModalValueType = {
  modalVisibilityControl?: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];
};

const modalValues: ModalValueType = {};

const ModalContext = createContext<ModalValueType>(modalValues);

const ModalPrvider: React.FC<{
  children: React.ReactNode;
  visibilityControl: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}> = ({children, visibilityControl}) => {
  const colorScheme = useColorScheme();

  const [values, setValues] = useState<ModalValueType>(modalValues);
  const updateValues = (updatedValue: Partial<ModalValueType>) => {
    setValues(prevState => ({...prevState, ...updatedValue}));
  };

  useEffect(() => {
    const temp = {modalVisibilityControl: visibilityControl};
    updateValues(temp);
  }, [visibilityControl]);

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export {ModalContext, ModalPrvider};
