import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Profile() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}> Hello,</Text>
                    <Text style={styles.username}> John</Text>
                </View>

                <Text style={styles.message}>Today is the victory day!</Text>
            </View>
        </View>
    );
}
