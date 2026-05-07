import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RankingProvider, RankingContext } from './context/RankingContext';
import LoginScreen from './screens/LoginScreen';
import VotingScreen from './screens/VotingScreen';
import ResultsScreen from './screens/ResultsScreen';

function NavigationWrapper() {
    const { currentScreen } = useContext(RankingContext);

    return (
        <SafeAreaView style={styles.container}>
            {currentScreen === 'login' && <LoginScreen />}
            {currentScreen === 'voting' && <VotingScreen />}
            {currentScreen === 'results' && <ResultsScreen />}
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <RankingProvider>
            <NavigationWrapper />
        </RankingProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' }
});