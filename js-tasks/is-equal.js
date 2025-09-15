function isEqual(obj1, obj2) {

    if ((obj1 === undefined || obj1 === null) && (obj2 === undefined || obj2 === null)) {
        return true;
    }

    if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
        return false;
    }

    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return false;
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!isEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }

    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    for (const key of allKeys) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (!isEqual(value1, value2)) {
            return false;
        }
    }

    return true;
}
