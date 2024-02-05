# deno-require-node-module

This npm library provides a bridge for Deno scripts to require Node.js modules seamlessly. It aims to make it easier for developers to integrate Node.js modules into their Deno projects without the need for rewriting or extensive configuration. By offering an easy-to-use API, `deno-require-node-module` simplifies the process of leveraging the vast npm ecosystem within Deno applications.

## Setup

To utilize TypeScript support with `deno-require-node-module`, you must install `ts-node` in your project's `node_modules` directory:

```bash
npm install ts-node
```

This ensures that TypeScript files can be properly executed within the Node.js context provided by the library.

## Usage

```typescript
import { requireNodeModule } from 'npm:deno-require-node-module';

// Call a JavaScript module in a Node.js context
requireNodeModule(
  './start',
  import.meta.url
);

// Import from a TypeScript module
const { generate } = requireNodeModule(
  './lib',
  import.meta.url,
  { ts: true }
);

const result = generate(); // Call the function from a Node.js context
```

## API Reference

```typescript
export function requireNodeModule(
  moduleRelativePath: string,
  importMetaUrl?: string,
  options?: { ts?: boolean }
): any;
```

- `moduleRelativePath`: The relative path to the required Node.js module. It can either be the name of a module installed in your local node_modules folder or a relative path to a file from the calling Deno module.
- `importMetaUrl`: The URL of the calling module's import meta, which is typically `import.meta.url`. This is required for resolving the module path relative to the caller.
- `options`: Adds TypeScript support using `ts-node`. You need to manually install `ts-node` into your local node_modules folder.
