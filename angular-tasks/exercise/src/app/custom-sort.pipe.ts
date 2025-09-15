import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customSort'
})
export class CustomSortPipe implements PipeTransform {

    transform(value: any[], sortBy: string | string[]): any[] {
        if (!value || value.length === 0 || !sortBy) {
            return value;
        }

        const sortCriteria = Array.isArray(sortBy) ? sortBy : [sortBy];
        const copy = [...value];

        copy.sort((a, b) => {
            for (const criterion of sortCriteria) {
                const property = criterion.startsWith('-') ? criterion.substring(1) : criterion;
                const direction = criterion.startsWith('-') ? -1 : 1;

                const aValue = this.getNestedKeyValue(a, property);
                const bValue = this.getNestedKeyValue(b, property);

                if (aValue === null || aValue === undefined || bValue === null || bValue === undefined)
                    return (aValue === null || aValue === undefined) ? direction : -direction;

                if (aValue instanceof Date && bValue instanceof Date) {
                    const aTime = aValue.getTime();
                    const bTime = bValue.getTime();
                    return aTime < bTime ? -1 * direction : aTime > bTime ? 1 * direction : 0;
                } else {
                    return aValue < bValue ? -1 * direction : aValue > bValue ? 1 * direction : 0;
                }
            }
            return 0;
        });

        return copy;
    }

    private getNestedKeyValue(obj: any, path: string): any {
        return path.split('.').reduce((current, key) => (current && current[key] !== undefined) ? current[key] : null, obj);
    }
}
