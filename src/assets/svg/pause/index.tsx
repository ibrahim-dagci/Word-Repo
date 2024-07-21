import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Pause = ({
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
                d="M4.494.167H2.351c-.568 0-1.113.197-1.515.549-.402.351-.628.828-.628 1.326v11.25c0 .497.226.974.628 1.325.402.352.947.55 1.515.55h2.143c.569 0 1.114-.198 1.515-.55.402-.351.628-.828.628-1.325V2.042c0-.498-.226-.975-.628-1.326a2.308 2.308 0 0 0-1.515-.55Zm8.572 0h-2.143c-.569 0-1.114.197-1.515.549-.402.351-.628.828-.628 1.326v11.25c0 .497.226.974.628 1.325.401.352.947.55 1.515.55h2.143c.568 0 1.113-.198 1.515-.55.402-.351.628-.828.628-1.325V2.042c0-.498-.226-.975-.628-1.326a2.308 2.308 0 0 0-1.515-.55Z"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Pause;
