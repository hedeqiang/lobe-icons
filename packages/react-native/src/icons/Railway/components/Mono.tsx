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
        d="M.111 10.27c-.057.4-.094.804-.111 1.208h18.23a2.182 2.182 0 00-.236-.346c-3.116-4.026-4.793-3.677-7.19-3.78-.8-.032-1.343-.046-4.525-.046-1.704 0-3.555.005-5.359.01-.233.63-.458 1.24-.568 1.737h9.342v1.217H.11zm18.262 2.426H.01c.02.325.05.645.094.961h16.954c.756 0 1.179-.429 1.316-.96zm-17.318 4.28S3.865 23.878 11.987 24c4.854 0 9.025-2.883 10.92-7.024H1.055z"
        fill={color}
      />
      <Path
        d="M11.987 0C7.5 0 3.593 2.465 1.531 6.108c1.611-.003 4.75-.005 4.75-.005h.001v-.001c3.71 0 3.848.016 4.573.046l.45.017c1.562.052 3.484.22 4.996 1.364.82.62 2.005 1.99 2.712 2.965.653.902.84 1.94.396 2.934-.408.913-1.287 1.458-2.352 1.458H.39s.1.42.248.885h22.75a11.96 11.96 0 00.61-3.766C24 5.375 18.623 0 11.988 0z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'RailwayMono';

export default Icon;
