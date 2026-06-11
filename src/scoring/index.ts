export interface Scores {
    history: number;
    party: number;
    outdoor: number;
    fancy: number;
    chill: number;
}

export function calculateScores(responses: { trait: string; score: number }[]): Scores {
    const totals: Scores = { history: 0, party: 0, outdoor: 0, fancy: 0, chill: 0 };
    const counts: Scores = { history: 0, party: 0, outdoor: 0, fancy: 0, chill: 0 };

    for (const r of responses) {
        totals[r.trait as keyof Scores] += r.score;
        counts[r.trait as keyof Scores] += 1;
    }

    return {
        history: counts.history ? totals.history / counts.history : 0,
        party: counts.party ? totals.party / counts.party : 0,
        outdoor: counts.outdoor ? totals.outdoor / counts.outdoor : 0,
        fancy: counts.fancy ? totals.fancy / counts.fancy : 0,
        chill: counts.chill ? totals.chill / counts.chill : 0,
    };
}