import React, { FC, PropsWithChildren, useState, ComponentProps } from 'react';
import { StyleSheet } from 'react-native';

import sizes from '@utils/theme/sizes';
import { Icons, Touchable, Typography } from '@components/atoms';

type IconProps = ComponentProps<typeof Icons.Feather>;
type IconName = IconProps['name'];

type Props = {
  icon?: IconName;
};

const Button: FC<PropsWithChildren<Props>> = ({ children, icon }) => {
  const [pressedIn, setPressedIn] = useState<boolean>(false);

  const styles = StyleSheet.create({
    button: {
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6c32fb',
      borderRadius: 50,
      flexDirection: 'row',
      columnGap: 10,
      opacity: pressedIn ? 0.8 : 1
    }
  });
  return (
    <Touchable
      style={styles.button}
      onPressIn={() => setPressedIn(true)}
      onPressOut={() => setPressedIn(false)}
    >
      {icon && <Icons.Feather name={icon} size={18} color='white' />}
      <Typography weight='bold' variant='h6' color='white'>
        {children}
      </Typography>
    </Touchable>
  );
};

export default Button;
