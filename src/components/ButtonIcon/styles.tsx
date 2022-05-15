import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    icon: {
        width: 24,
        height: 18
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 16,
        textAlign: 'center'
    }
});
