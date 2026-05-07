import { useState, useEffect } from 'react';

export const useTournament = (data) => {
    const [items, setItems] = useState([...data]);
    const [winners, setWinners] = useState([]);
    const [step, setStep] = useState(0);
    const [finalWinner, setFinalWinner] = useState(null);

    const currentPair = items.slice(step, step + 2);

    const vote = (selectedItem) => {
        const nextWinners = [...winners, selectedItem];
        const nextStep = step + 2;

        if (nextStep >= items.length) {
            if (nextWinners.length === 1) {
                setFinalWinner(nextWinners[0]);
            } else {
                setItems(nextWinners);
                setWinners([]);
                setStep(0);
            }
        } else {

            if (nextStep === items.length - 1) {
                setWinners([...nextWinners, items[nextStep]]);

                const updatedWinners = [...nextWinners, items[nextStep]];
                if (updatedWinners.length === 1) {
                    setFinalWinner(updatedWinners[0]);
                } else {
                    setItems(updatedWinners);
                    setWinners([]);
                    setStep(0);
                }
            } else {
                setStep(nextStep);
                setWinners(nextWinners);
            }
        }
    };

    return { currentPair, vote, finalWinner };
};