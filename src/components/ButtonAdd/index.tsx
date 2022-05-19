import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

export function ButtonAdd({ ...rest }: RectButtonProps): JSX.Element {
    return <RectButton style={styles.container} {...rest} />;
}
