import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import { RankingContext } from '../context/RankingContext';

export default function ResultsScreen() {
    const { userName, history, resetSession } = useContext(RankingContext);
    const winner = history[userName];

    if (!winner) return null;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Câștigător: {winner.name}</Text>
            <Image source={{ uri: winner.image }} style={styles.winnerImg} />

            <View style={styles.history}>
                <Text style={styles.historyTitle}>Istoric Sesiune:</Text>
                {Object.entries(history).map(([user, cat]) => (
                    <Text key={user} style={{marginBottom: 5}}>
                        {user} a ales: <Text style={{fontWeight: 'bold'}}>{cat.name}</Text>
                    </Text>
                ))}
            </View>

            <Pressable style={styles.button} onPress={resetSession}>
                <Text style={styles.buttonText}>Resetare (Înapoi la Login)</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
    winnerImg: { width: 200, height: 200, borderRadius: 100, marginVertical: 20 },
    history: { width: '100%', padding: 15, backgroundColor: '#f9f9f9', borderRadius: 10, marginTop: 20 },
    historyTitle: { fontWeight: 'bold', marginBottom: 10 },
    button: { marginTop: 30, backgroundColor: '#6C5CE7', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
    buttonText: { color: 'white', fontWeight: 'bold' }
});