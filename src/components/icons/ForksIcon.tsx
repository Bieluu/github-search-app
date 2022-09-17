import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ForksIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M13 14c-3.36 0-4.46 1.35-4.82 2.24A3.002 3.002 0 0 1 7 22a3 3 0 0 1-3-3c0-1.31.83-2.42 2-2.83V7.83A2.99 2.99 0 0 1 4 5a3 3 0 1 1 6 0c0 1.31-.83 2.42-2 2.83v5.29c.88-.65 2.16-1.12 4-1.12 2.67 0 3.56-1.34 3.85-2.23A3.005 3.005 0 0 1 14 7a3 3 0 0 1 6 0c0 1.34-.88 2.5-2.09 2.86C17.65 11.29 16.68 14 13 14Zm-6 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill="#79747E"
    />
  </Svg>
);

export default ForksIcon;
