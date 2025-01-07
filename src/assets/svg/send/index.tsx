import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Send = ({
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
                fill={color}
                d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699 4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241l5.283-14.605Z"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Send;