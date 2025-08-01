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
        d="M8.858 17.115c.156-.414.065-.273.495.098 2.073 1.792 10.334-1.855 9.035-3.987-1.605-2.223-7.924-.72-11.499-.048.57-.259 2.835-.998 3.686-1.213 1.169-.296 1.65-.392 2.738-.651-2.45.25-6.216 1.493-9.687 2.797 1.692-1.346 5.077-2.538 5.854-2.901-1.606.363-4.596 1.708-6.845 2.845C1.358 14.7.932 14.94 0 15.458c.696-.595 1.53-1.383 2.951-2.216 1.714-1.003 1.815-1.048 2.333-1.359-1.244.518-2.383 1.037-3.16 1.296.773-.534 2.227-1.347 2.797-1.606-.173.015-.518.155-.725.207 1.036-.57 1.799-.83 2.234-.97 7.42-2.442 15.999-2.182 17.32.528 1.322 2.71-2.766 6.486-8.347 7.709-.966.212-1.821.328-2.626.358-.836.031-1.448-.005-2.037-.12-1.563-.305-2.237-1.232-1.882-2.17z"
        fill={color}
      />
      <Path
        d="M11.5 6.185c.673.104.984.156 1.347.156-.57-.363-.702-.405-2.02-1.14 1.294-.103 1.906-.024 3.366-.052-.621-.362-.932-.362-1.605-.673a33.982 33.982 0 012.797-.104 1.3 1.3 0 00-.415-.362c1.45-.052 3.51.096 4.685.62 2.292 1.027 1.995 2.619-.57 3.063-.471.081-1.315.148-1.874.15a12.536 12.536 0 01-2.138-.212c-1.871-.358-3.314-.98-3.573-1.446z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'AiMassMono';

export default Icon;
