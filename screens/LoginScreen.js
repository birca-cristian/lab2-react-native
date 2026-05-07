import React, { useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { RankingContext } from '../context/RankingContext';

export default function LoginScreen() {
    const { userName, setUserName, setCurrentScreen } = useContext(RankingContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cat Battle 🐾</Text>
            <TextInput
                style={styles.input}
                placeholder="Numele tău..."
                value={userName}
                onChangeText={setUserName}
            />
            <Pressable
                style={[styles.button, !userName && { opacity: 0.5 }]}
                onPress={() => setCurrentScreen('voting')}
                disabled={!userName}
            >
                <Text style={styles.buttonText}>Începe</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '100%', height: 50, backgroundColor: '#eee', borderRadius: 10, padding: 15, marginBottom: 20 },
    button: { backgroundColor: '#6C5CE7', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
    buttonText: { color: 'white', fontWeight: 'bold' }
});