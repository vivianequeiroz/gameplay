import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
//1h13

export function SignIn(): JSX.Element {
    const navigation = useNavigation<StackNavigationProp<any>>();
    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Easily connect{'\n'}
                    and organize {'\n'}
                    your gameplays
                </Text>

                <Text style={styles.subtitle}>
                    Create groups to play {'\n'}
                    your favorites games with friends
                </Text>

                <ButtonIcon
                    title={'Log in with discord'}
                    onPress={handleSignIn}
                />
            </View>
        </View>
    );
}
