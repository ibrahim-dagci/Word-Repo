import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Profile = ({size = 75, ...props}: {size?: number}) => {
  const pathScale = 75 / size;
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M20.833 16.667a16.667 16.667 0 1 1 33.334 0 16.667 16.667 0 0 1-33.334 0Zm0 25A20.833 20.833 0 0 0 0 62.5 12.5 12.5 0 0 0 12.5 75h50A12.5 12.5 0 0 0 75 62.5a20.833 20.833 0 0 0-20.833-20.833H20.833Z"
        clipRule="evenodd"
        scale={1 / pathScale}
      />
    </Svg>
  );
};
export default Profile;
