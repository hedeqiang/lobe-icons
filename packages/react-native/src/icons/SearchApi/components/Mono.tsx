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
        d="M18.41 20.904a.822.822 0 01-.821.822 3.127 3.127 0 01-3.123-3.123v-3.515a.822.822 0 011.644 0v3.515a1.48 1.48 0 001.479 1.48.822.822 0 01.822.821zm4.768-5.293a.822.822 0 00-.822.822 1.479 1.479 0 11-2.959 0V9.397a7.397 7.397 0 10-14.794 0v7.036a1.48 1.48 0 01-2.96 0 .823.823 0 10-1.643 0 3.123 3.123 0 006.247 0V9.397a5.753 5.753 0 0111.506 0v7.036a3.123 3.123 0 006.247 0 .82.82 0 00-.822-.822zM12 15.15a.822.822 0 00-.822.822v5.589a.822.822 0 001.644 0v-5.59a.823.823 0 00-.822-.821zm-3.288-.885a.82.82 0 00-.822.822v3.515a1.481 1.481 0 01-1.479 1.48.822.822 0 000 1.643 3.127 3.127 0 003.123-3.123v-3.515a.822.822 0 00-.822-.822zm.987-6.02a1.15 1.15 0 100 2.302 1.15 1.15 0 000-2.302zm5.753 1.151a1.151 1.151 0 10-2.302 0 1.151 1.151 0 002.302 0z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'SearchApiMono';

export default Icon;
