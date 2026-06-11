export interface Question {
    id: number;
    text: string;
    options: string[];
}

export interface Score {
    history: number;
    party: number;
    outdoor: number;
    fancy: number;
    chill: number;
}