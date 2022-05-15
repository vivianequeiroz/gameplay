import { View, StyleSheet } from 'react-native';
import { SignIn } from './src/screens/SignIn';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <SignIn />
        </View>
    );
}
