/** преобразует формат даты из "2021-02-01" в "01.02.2021" */
export function formatDate(date: string) {
    return date.split('-').reverse().join('.');
}
