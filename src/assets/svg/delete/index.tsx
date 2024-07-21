import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Delete = ({
    size = 25,
    color = '#000',
    ...props
}: {
  size?: number;
  color?: string;
}) => {
    const pathScale = 25 / size;
    return (
        <Svg width={size} height={size} fill="none" {...props}>
            <Path
                fill={color}
                d="M6.25 19.792a2.09 2.09 0 0 0 2.084 2.083h8.333a2.09 2.09 0 0 0 2.083-2.083V9.375a2.09 2.09 0 0 0-2.083-2.083H8.333A2.09 2.09 0 0 0 6.25 9.375v10.417Zm12.5-15.625h-2.604l-.74-.74a1.05 1.05 0 0 0-.729-.302h-4.354c-.27 0-.542.115-.73.302l-.739.74H6.25c-.573 0-1.042.468-1.042 1.041S5.678 6.25 6.25 6.25h12.5c.573 0 1.042-.469 1.042-1.042 0-.573-.469-1.041-1.042-1.041Z"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Delete;
