/**
 * Requires a Node.js module using a relative path or the name of the installed module.
 * 
 * @param {string} moduleRelativePath - The relative path to the required Node.js module.
 * It can either be the name of a module installed in your local node_modules folder or a relative path to a file from the calling Deno module.
 * 
 * @param {string} [importMetaUrl] - The URL of the calling module's import meta, which is typically `import.meta.url`.
 * This is required for resolving the module path relative to the caller.
 * 
 * @param {{ ts?: boolean }} [options] - Adds TypeScript support using `ts-node`.
 * You need to manually install `ts-node` into your local node_modules folder.
 * 
 * @returns {any} The required module's exports.
 */
export function requireNodeModule(
  moduleRelativePath: string,
  importMetaUrl?: string,
  options?: { ts?: boolean }
): any;
