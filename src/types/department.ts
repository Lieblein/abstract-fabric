export interface IDepartmentJoin {
    id: number;
    employee: number;
    department: number;
    from: string;
    to: string | null;
    comment: string;
}
