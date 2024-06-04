import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Save = ({
  size = 26,
  color = '#000',
  ...props
}: {
  size?: number;
  color?: string;
}) => {
  const pathScale = 26 / size;
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        fill={color}
        d="M6.422.169v5.21A3.127 3.127 0 0 0 9.55 8.507h4.168a3.126 3.126 0 0 0 3.127-3.126V.169h.79c1.105 0 2.166.44 2.947 1.221L23.96 4.77a4.169 4.169 0 0 1 1.221 2.947v13.296a4.169 4.169 0 0 1-4.168 4.17v-9.38a3.126 3.126 0 0 0-3.127-3.127H7.464a3.124 3.124 0 0 0-3.126 3.122v9.384a4.169 4.169 0 0 1-4.17-4.169V4.337A4.169 4.169 0 0 1 4.339.17h2.084Zm2.084 0v5.21A1.042 1.042 0 0 0 9.55 6.423h4.168A1.042 1.042 0 0 0 14.76 5.38V.169H8.506ZM6.422 25.18h12.506v-9.38a1.042 1.042 0 0 0-1.042-1.042H7.464c-.577 0-1.042.465-1.042 1.038v9.384Z"
        scale={1 / pathScale}
      />
    </Svg>
  );
};
export default Save;
