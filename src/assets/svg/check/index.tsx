import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Check = ({
    size = 75,
    color = '#000',
    ...props
}: {
  size?: number;
  color?: string;
}) => {
    const pathScale = 75 / size;
    return (
        <Svg width={size} height={size} fill="none" {...props}>
            <Path
                fill={color}
                d="M62.765 6.197 24.55 44.412 12.156 32.018 0 44.174l12.394 12.394L24.63 68.803l12.156-12.156L75 18.432 62.765 6.197Z"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Check;