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
        clipRule="evenodd"
        d="M3.908 9.096A8.092 8.092 0 0111.998 1h.006c4.468 0 8.09 3.628 8.09 8.096v3.392h1.942c2.23 0 2.732 3.126.615 3.828l-2.556.85v1.466a1.947 1.947 0 01-2.818 1.742l-1.42-.707c-.067-.03-.149 0-.17.071-1.147 3.587-6.225 3.587-7.373 0a.123.123 0 00-.169-.07l-1.42.706c-1.29.65-2.817-.292-2.817-1.742v-1.466l-2.557-.85c-2.122-.697-1.614-3.828.615-3.828h1.942V9.096zm4.571 2.613a.784.784 0 00-.784.784v1.568a.784.784 0 101.568 0v-1.568a.784.784 0 00-.784-.784zm7.045.779a.784.784 0 100 1.568.784.784 0 000-1.568zm-6.186 3.415a.78.78 0 00.17.254 3.517 3.517 0 004.98 0 .782.782 0 10-1.106-1.107 1.958 1.958 0 01-2.767 0 .78.78 0 00-1.277.254.78.78 0 000 .6z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'CozeMono';

export default Icon;
