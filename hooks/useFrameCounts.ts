import { useState } from 'react';

const useFrameCounts = () => {
    // Initialize all frames with their max counts (1-16)
    const [frameCounts, setFrameCounts] = useState<Record<number, number>>(() => {
        const counts: Record<number, number> = {};
        for (let i = 1; i <= 16; i++) {
            counts[i] = i; // Frame 1 = 1, Frame 2 = 2, etc.
        }
        return counts;
    });

    const decrementCount = (frameId: number) => {
        setFrameCounts(prev => {
            if (prev[frameId] <= 0) return prev; // Already locked
            const newCounts = {...prev, [frameId]: prev[frameId] - 1};
            return newCounts;
        });
        return true;
    };

    const resetCounts = () => {
        const initialCounts: Record<number, number> = {};
        for (let i = 1; i <= 16; i++) {
            initialCounts[i] = i;
        }
        setFrameCounts(initialCounts);
    };

    return { 
        frameCounts, 
        decrementCount,
        resetCounts 
    };
};

export default useFrameCounts;