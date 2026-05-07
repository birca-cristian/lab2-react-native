import React, { createContext, useState } from 'react';

export const RankingContext = createContext();

export const RankingProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [history, setHistory] = useState({});
    const [currentScreen, setCurrentScreen] = useState('login');

    const saveResult = (name, winner) => {
        setHistory(prev => ({ ...prev, [name]: winner }));
    };

    const resetSession = () => {
        setUserName('');
        setCurrentScreen('login');
    };

    return (
        <RankingContext.Provider value={{
            userName, setUserName,
            history, saveResult,
            currentScreen, setCurrentScreen,
            resetSession
        }}>
            {children}
        </RankingContext.Provider>
    );
};