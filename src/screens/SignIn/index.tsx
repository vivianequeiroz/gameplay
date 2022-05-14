import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export function SignIn(): JSX.Element {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text>Hello world! :3 </Text>
            <TextInput onChangeText={setText} style={styles.input} />

            <Text>You've typed: {text}</Text>
        </View>
    );
}
