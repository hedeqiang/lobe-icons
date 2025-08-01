import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE, 3);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M7.242 1.613A1.11 1.11 0 018.295.857h6.977L8.03 22.316a1.11 1.11 0 01-1.052.755h-5.43a1.11 1.11 0 01-1.053-1.466L7.242 1.613z"
        fill={a.fill}
      />
      <Path
        d="M18.397 15.296H7.4a.51.51 0 00-.347.882l7.066 6.595c.206.192.477.298.758.298h6.226l-2.706-7.775z"
        fill="#0078D4"
      />
      <Path
        d="M15.272.857H7.497L0 23.071h7.775l1.596-4.73 5.068 4.73h6.665l-2.707-7.775h-7.998L15.272.857z"
        fill={b.fill}
      />
      <Path
        d="M17.193 1.613a1.11 1.11 0 00-1.052-.756h-7.81.035c.477 0 .9.304 1.052.756l6.748 19.992a1.11 1.11 0 01-1.052 1.466h-.12 7.895a1.11 1.11 0 001.052-1.466L17.193 1.613z"
        fill={c.fill}
      />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="8.247"
          x2="1.002"
          y1="1.626"
          y2="23.03"
        >
          <Stop stopColor="#114A8B" />
          <Stop offset="100%" stopColor="#0669BC" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="14.042"
          x2="12.324"
          y1="15.302"
          y2="15.888"
        >
          <Stop stopOpacity=".3" />
          <Stop offset="7.1%" stopOpacity=".2" />
          <Stop offset="32.1%" stopOpacity=".1" />
          <Stop offset="62.3%" stopOpacity=".05" />
          <Stop offset="100%" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="12.841"
          x2="20.793"
          y1="1.626"
          y2="22.814"
        >
          <Stop stopColor="#3CCBF4" />
          <Stop offset="100%" stopColor="#2892DF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'AzureColor';

export default Icon;
