import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            external: ['d3'],
            input: {
                main: resolve(__dirname, 'index.html'),
                storyboard: resolve(__dirname, 'storyboard/index.html'),
            },
            output: {
                paths: {
                    d3: 'https://cdn.jsdelivr.net/npm/d3@7/+esm',
                },
            },
        },
    },
});
