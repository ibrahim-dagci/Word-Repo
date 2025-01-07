import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Clock = ({
    size = 24,
    color = '#000',
    ...props
}: {
  size?: number;
  color?: string;
}) => {
    const pathScale = 24 / size;
    return (
        <Svg width={size} height={size} fill="none" {...props}>
            <Path
                stroke={color}
                strokeWidth={2}
                d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
                scale={1 / pathScale}
            />
            <Path
                stroke={color}
                strokeLinecap="round"
                strokeWidth={2}
                d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.899-2.829a4 4 0 0 1 2.829 2.829M12 8v3.75c0 .138.112.25.25.25H15"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Clock;