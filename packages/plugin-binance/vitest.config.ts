import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        testTimeout: 10000
    },
    resolve: {
        alias: {
            '@rons-org/core': resolve(__dirname, '../../packages/core/src/index.ts')
        },
        extensions: ['.ts', '.js', '.json']
    }
});
