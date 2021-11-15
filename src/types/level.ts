export interface ILevelAchievement {
    id: number;
    employee: number;
    level: number;
    achieved: {
        from: string;
        to: string | null;
    };
    promoted: {
        from: string;
        to: string | null;
    };
    comment: string;
}
