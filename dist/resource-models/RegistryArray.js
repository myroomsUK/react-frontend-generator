const totalModel = {};
const overrideRegistry = {};
const registry = Object.assign(Object.assign({}, totalModel), overrideRegistry);
export const registryArray = Object.keys(registry).map(resourceName => { return { name: resourceName, resource: registry[resourceName] }; });
