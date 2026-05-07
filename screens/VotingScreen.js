import React, { useContext, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { RankingContext } from '../context/RankingContext';
import { useTournament } from '../hooks/useTournaments';
import catsData from '../data/cat_breeds.json';

export default function VotingScreen() {
    const { currentPair, vote, finalWinner } = useTournament(catsData);

    const { userName, saveResult, setCurrentScreen } = useContext(RankingContext);

    useEffect(() => {
        if (finalWinner) {
            saveResult(userName, finalWinner);
            setCurrentScreen('results');
        }
    }, [finalWinner]);

    if (finalWinner || !currentPair || currentPair.length < 2) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Se calculează rezultatul...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rundă Nouă 🐾</Text>
            <Text style={styles.subtitle}>Care este favorita ta?</Text>

            <View style={styles.battleContainer}>
                {currentPair.map((cat) => (
                    <Pressable
                        key={cat.id}
                        style={styles.card}
                        onPress={() => vote(cat)}
                    >
                        <Image
                            source={{ uri: cat.image }}
                            style={styles.image}
                        />
                        <View style={styles.info}>
                            <Text style={styles.name}>{cat.name}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#F8F9FA' },
    title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#2D3436', marginBottom: 5 },
    subtitle: { fontSize: 16, textAlign: 'center', color: '#636E72', marginBottom: 30 },
    battleContainer: { width: '100%' },
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8
    },
    image: { width: '100%', height: 200 },
    info: { padding: 15, alignItems: 'center' },
    name: { fontSize: 20, fontWeight: 'bold', color: '#2D3436' }
});