import { IDepartmentJoin } from '../types/department';
import { ILevelAchievement } from '../types/level';

export const departmentMap = new Map([
    [9, { id: 9, name: 'Тестирование' }],
    [4, { id: 4, name: 'Фронтенд' }],
]);

export const departmentJoins: IDepartmentJoin[] = [
    {
        id: 259,
        employee: 213,
        department: 9,
        from: '2016-11-01',
        to: '2020-07-15',
        comment: 'Переход в отдел Frontend',
    },
    {
        id: 257,
        employee: 213,
        department: 4,
        from: '2016-02-08',
        to: '2016-10-31',
        comment: 'Принят на стажировку в отдел тестирования',
    },
];

export const levelMap = new Map([
    [1, { id: 1, name: 'L0' }],
    [2, { id: 2, name: 'L1' }],
    [3, { id: 3, name: 'L2' }],
]);

export const levelAchievements: ILevelAchievement[] = [
    {
        id: 250,
        employee: 213,
        level: 1,
        achieved: { from: '2016-02-08', to: '2016-05-31' },
        promoted: { from: '2016-02-08', to: '2016-05-31' },
        comment: '',
    },
    {
        id: 251,
        employee: 213,
        level: 2,
        achieved: { from: '2016-06-01', to: '2017-08-13' },
        promoted: { from: '2016-06-01', to: '2017-08-13' },
        comment: 'Окончание стажировки, зачисление в штат',
    },
    {
        id: 393,
        employee: 213,
        level: 3,
        achieved: { from: '2018-07-01', to: null },
        promoted: { from: '2018-07-01', to: null },
        comment: 'Успешно пройдена аттестация',
    },
];
