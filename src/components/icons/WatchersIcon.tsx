import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const WatchersIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12c1.73-4.39 6-7.5 11-7.5s9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12Zm19.82 0A9.77 9.77 0 0 0 12 6.5 9.77 9.77 0 0 0 3.18 12 9.77 9.77 0 0 0 12 17.5a9.77 9.77 0 0 0 8.82-5.5ZM12 9.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5ZM7.5 12c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5Z"
      fill={props.fill ?? '#1C1B1F'}
    />
  </Svg>
);

export default WatchersIcon;
