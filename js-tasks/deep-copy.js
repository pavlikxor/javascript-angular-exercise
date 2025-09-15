function isPrimitiveOrNull(value) {
    return value === null || typeof value !== 'object';
}

function deepCopy(source) {
    if (isPrimitiveOrNull(source)) {
        return source;
    }

    const originals = [];
    const copies = [];

    const recursiveCopy = (original) => {
        if (isPrimitiveOrNull(original)) {
            return original;
        }

        const originalIndex = originals.indexOf(original);
        if (originalIndex !== -1) {
            return copies[originalIndex];
        }

        if (Array.isArray(original)) {
            const copy = [];
            originals.push(original);
            copies.push(copy);

            for (const item of original) {
                copy.push(recursiveCopy(item));
            }

            return copy;
        }

        const copy = Object.create(Object.getPrototypeOf(original));
        originals.push(original);
        copies.push(copy);

        for (const key of Object.keys(original)) {
            copy[key] = recursiveCopy(original[key]);
        }
        for (const sym of Object.keys(original)) {
            copy[sym] = recursiveCopy(original[sym]);
        }

        return copy;
    };

    return recursiveCopy(source);
}