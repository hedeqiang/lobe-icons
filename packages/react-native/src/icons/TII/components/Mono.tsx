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
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <Path
        d="M11.098 7.563H4.75V9.77h1.77v6.668h2.807V9.77h1.77V7.563zM14.812 7.563h-2.807v8.875h2.807V7.563zM19.433 7.563h-2.807v8.875h2.807V7.563z"
        fill={color}
      />
      <Path
        d="M12 24v-1.055c3.01 0 5.613-1.079 7.737-3.208 2.123-2.13 3.209-4.727 3.209-7.737 0-3.009-1.08-5.607-3.209-7.736-2.128-2.13-4.732-3.21-7.736-3.21V0c3.294 0 6.148 1.184 8.482 3.518C22.817 5.852 24 8.706 24 12c0 3.295-1.183 6.155-3.518 8.483C18.147 22.811 15.3 24 12.001 24z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'TIIMono';

export default Icon;
