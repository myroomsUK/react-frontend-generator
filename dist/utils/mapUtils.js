export function createMapFromArray(array) {
    const newMap = new Map();
    (array !== null && array !== void 0 ? array : []).forEach(arrayElement => {
        if (arrayElement.fid === undefined)
            arrayElement.fid = arrayElement.id;
        newMap.set(arrayElement.fid, arrayElement);
    });
    return newMap;
}
export function createArrayFromMap(map) {
    const array = Array.from(map.entries()).map(([id, value]) => {
        const newValue = Object.assign({}, value);
        newValue.fid = id;
        return newValue;
    });
    return array;
}
export function orderByKey(array, key) {
    return array.reduce((r, a) => {
        r[a[key]] = [...r[a[key]] || [], a];
        return r;
    }, {});
}
export function getDistinctKeyValues(array, key) {
    return Object.keys(orderByKey(array, key));
}
export function getFromMap(map) {
    return new Proxy(map, {
        get(obj, prop) {
            return obj.get(prop);
        }
    });
}
