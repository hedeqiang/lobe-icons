import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 94 24"
      width={size * 3.92} // 保持宽高比
      {...rest}
    >
      <Path
        d="M2 5.33h3.425l.33 1.774C6.415 5.701 7.859 5 9.385 5a5.56 5.56 0 012.002.392l-.805 4.105a3.938 3.938 0 00-2.001-.536c-1.382 0-2.517.928-2.517 3.012v6.622H2V5.33zm10.79 8.335V5.248h4.125V12.9c0 1.547.887 2.373 2.187 2.373 1.32 0 2.455-1.011 2.455-3.24V5.269h4.126v13.286h-3.445l-.454-1.754c-.66 1.052-2.27 2.063-4.27 2.063-2.703-.02-4.725-1.712-4.725-5.198zM27.807 5.33h3.404l.454 1.754c.64-1.053 2.228-2.063 4.208-2.063 2.62 0 4.6 1.67 4.6 5.157v8.438H36.41v-7.592c0-1.568-.804-2.414-2.145-2.414-1.238 0-2.373 1.011-2.373 3.301v6.725h-4.064l-.02-13.306zm13.574-.082h4.064l2.414 9.056 2.145-5.962-1.052-3.094h4.044l2.62 9.056 2.33-9.056h4.086L57.7 18.616h-4.167l-1.795-5.323-1.856 5.323h-4.147L41.382 5.248zm20.878 6.684c0-4.56 3.3-6.911 6.333-6.911 1.856 0 3.197.742 3.858 1.506l.37-1.197h3.755v13.203h-3.568l-.557-1.3c-.557.66-1.754 1.61-4.044 1.61-3.28 0-6.147-2.682-6.147-6.911zm10.335 0c0-2.146-1.382-3.466-3.136-3.466-1.774 0-3.135 1.34-3.135 3.466 0 2.124 1.361 3.465 3.135 3.465 1.754 0 3.136-1.32 3.136-3.465zM80.805 24l2.25-6.086L77.71 5.248h4.374l2.97 8.272 2.682-8.272h4.27L84.974 24h-4.167z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'RunwayText';

export default Icon;
