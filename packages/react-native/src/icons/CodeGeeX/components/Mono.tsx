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
        d="M13.517 12.106c.823 0 1.225.992.659 1.58l-5.377 5.403a.925.925 0 01-1.317 0L.274 11.812a.936.936 0 010-1.323l6.055-6.083a1.287 1.287 0 011.81 0 1.303 1.303 0 010 1.819l-4.243 4.282a.936.936 0 000 1.323L7.5 15.45a.925.925 0 001.317 0l.475-.477a.905.905 0 00.274-.662v-.938c0-.129 0-.257.019-.386a.926.926 0 01.933-.864h2.999v-.018z"
        fill={color}
      />
      <Path
        d="M23.74 12.878L17.67 18.98a1.287 1.287 0 01-1.81 0 1.303 1.303 0 010-1.82l4.26-4.282a.936.936 0 000-1.323l-3.62-3.62a.925.925 0 00-1.317 0l-.475.477a.949.949 0 00-.274.663v.937c0 .13 0 .257-.019.386a.926.926 0 01-.933.864h-2.999c-.823 0-1.226-.992-.659-1.58l4.078-4.1.53-.553.75-.754a.925.925 0 011.318 0l7.225 7.26a.977.977 0 01.018 1.342l-.001.001z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'CodeGeeXMono';

export default Icon;
