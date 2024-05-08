import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Profile = ({
  size = 18,
  fill = '#dddddd',
  ...props
}: {
  size?: number;
  fill?: string;
}) => {
  const pathScale = 18 / size;
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V2Z"
        clipRule="evenodd"
        scale={1 / pathScale}
      />
    </Svg>
  );
};
export default Profile;
