import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
const Speaker = ({
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
                d="M23.348 19.61 20.2 17.604a.424.424 0 0 0-.345-.049.439.439 0 0 0-.158.087.49.49 0 0 0-.116.148l-.568 1.086c-.126.24-.052.548.165.686l3.148 2.006a.424.424 0 0 0 .344.049.439.439 0 0 0 .159-.087.49.49 0 0 0 .116-.148l.568-1.086a.536.536 0 0 0-.165-.686Zm-3.77-12.4c.03.057.069.107.116.148a.413.413 0 0 0 .503.038l3.148-2.006c.217-.138.29-.447.165-.686l-.565-1.083a.49.49 0 0 0-.116-.147.413.413 0 0 0-.503-.038L19.178 5.44a.5.5 0 0 0-.211.305.55.55 0 0 0 .046.381l.565 1.083Zm4.965 4.157H20.89c-.25 0-.456.226-.456.503v1.26c0 .277.205.503.456.503h3.653c.252 0 .457-.226.457-.503v-1.26c0-.277-.206-.503-.457-.503ZM15.751 0c-.169 0-.34.05-.497.167L5.137 7.462H.457c-.252 0-.457.227-.457.504v9.068c0 .277.205.504.457.504h4.68l10.117 7.295a.85.85 0 0 0 .497.167c.476 0 .916-.419.916-1.01V1.01c0-.591-.44-1.01-.916-1.01Z"
                scale={1 / pathScale}
            />
        </Svg>
    );
};
export default Speaker;
