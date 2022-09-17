import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const GoBackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"
      fill="#1C1B1F"
    />
  </Svg>
);

export default GoBackIcon;
