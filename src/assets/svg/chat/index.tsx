import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Chat = ({
    size = 32,
    color = 'black',
    ...props
}: {
  size?: number;
  color?: string;
}) => {
    const pathScale = 32 / size;
    return (
        <Svg width={size} height={size} fill="none" {...props}>
            <Path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M25 5H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h11l6 4v-4h1a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z"
                scale={1 / pathScale}
            />
            <Path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Chat;
