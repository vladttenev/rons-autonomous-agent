import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
    },
    resolve: {
        alias: {
            '@rons-org/core': resolve(__dirname, '../core/src'),
        },
    },
});
