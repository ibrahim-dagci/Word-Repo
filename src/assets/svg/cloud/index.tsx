import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type propTypes = {
  size?: number;
  color?: string;
  stroke?: string;
  style?: StyleProp<ViewStyle>;
};

const Cloud = ({
  size = 159,
  color = 'black',
  stroke,
  style = {},
  ...props
}: propTypes) => {
  const pathScale = 159 / size;
  return (
    <Svg width={size} height={size / 1.61} fill="none" style={style} {...props}>
      <Path
        fill={color}
        d="M65.964.14C55.37 1.44 46.206 7.068 40.282 15.89c-3.006 4.477-4.924 9.826-5.755 15.986l-.128.959-3.346.021c-2.26 0-3.964.128-5.264.384C12.979 35.733 3.346 45.132.49 57.899.064 59.817 0 60.69 0 64.378 0 69.13.213 70.6 1.513 74.5c1.513 4.561 4.071 8.654 7.652 12.234 4.816 4.838 10.997 7.971 17.732 8.973 2.089.32 6.607.34 46.846.234 48.231-.149 45.823-.085 50.618-1.3 2.835-.703 4.817-1.449 7.779-2.898 10.55-5.137 18.351-14.557 21.207-25.64 5.307-20.439-6.16-41.581-26.215-48.359-4.774-1.598-8.973-2.174-14.493-2.003-3.836.128-6.82.618-10.124 1.62-.788.255-1.449.447-1.492.447-.042 0-.682-.938-1.449-2.089C95.61 9.817 89.75 5.085 83.164 2.442 81.478 1.76 78.111.822 76.023.44 73.806.013 68.18-.136 65.963.141Z"
        scale={1 / pathScale}
        stroke={stroke ? stroke : undefined}
      />
    </Svg>
  );
};
export default Cloud;
