import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn(): JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Easily {`\n`}
                    organize {`\n`}
                    your gameplays
                </Text>

                <Text style={styles.subtitle}>
                    Create groups to play {`\n`}
                    your favorites games with friends
                </Text>

                <ButtonIcon title={'Log in with discord'} activeOpacity={0.7} />
            </View>
        </View>
    );
}
