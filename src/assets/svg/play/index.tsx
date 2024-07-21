import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Play = ({
    size = 16,
    color = '#000',
    ...props
}: {
  size?: number;
  color?: string;
}) => {
    const pathScale = 16 / size;
    return (
        <Svg width={size} height={size} fill="none" {...props}>
            <Path
                fill={color}
                d="M15.069 9.975a1.978 1.978 0 0 0 .774-1.562 1.955 1.955 0 0 0-.774-1.56 37.383 37.383 0 0 0-10.33-5.578l-.68-.239a2.159 2.159 0 0 0-2.85 1.74 43.26 43.26 0 0 0 0 11.274 2.159 2.159 0 0 0 2.85 1.74l.68-.238a37.381 37.381 0 0 0 10.33-5.577Z"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Play;
