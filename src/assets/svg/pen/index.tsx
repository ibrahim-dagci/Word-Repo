import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Pen = ({
    size = 29, ...props
}: {size?: number}) => {
    const pathScale = 29 / size;
    return (
        <Svg width={size} height={size} fill="none" {...props}>
            <Path
                scale={1 / pathScale}
                fill="#000"
                d="M27.584 8.118c-.43.59-1.005 1.032-1.005 1.474 0 .442.43.884.861 1.474.718.737 1.435 1.326 1.291 2.063 0 .737-.717 1.474-1.434 2.21l-5.884 6.043-2.009-1.916 6.027-6.19-1.435-1.473-2.009 2.063-5.452-5.6 5.74-5.6c.573-.59 1.434-.59 2.008 0l3.3 3.39c.575.589.575 1.62 0 2.062ZM2.184 23.15 15.96 9.003l5.31 5.6L7.638 28.75H2.185v-5.6ZM7.925.75v4.421h4.306v2.947H7.925v4.421h-2.87V8.12H.75V5.17h4.305V.75h2.87Z"
            />
        </Svg>
    );
};
export default Pen;
