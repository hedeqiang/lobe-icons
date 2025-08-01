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
      viewBox="0 0 97 24"
      width={size * 4.04} // 保持宽高比
      {...rest}
    >
      <Path
        d="M15.49 2H2v4.616h11.597a1.539 1.539 0 010 3.076H2v4.616h11.597a1.54 1.54 0 010 3.076H2V22h13.49a6.151 6.151 0 004.802-10A6.154 6.154 0 0015.49 2zM95.362 2h-6.965v20h6.965V2zM73.42 2h-6.966l-8.562 20h6.963l5.086-11.876L75.026 22h6.965L73.427 2h-.008zM43.706 2h-6.965l-8.564 20h6.965l5.085-11.876L45.313 22h6.965L43.713 2h-.007z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'BAAIText';

export default Icon;
