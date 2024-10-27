import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            external: ['d3'],
            input: {
                main: resolve(__dirname, 'index.html'),
                'emissions-by-sector': resolve(
                    __dirname,
                    'storyboard/emissions-by-sector.html'
                ),
                'temperature-trend': resolve(
                    __dirname,
                    'storyboard/temperature-trend.html'
                ),
            },
            output: {
                paths: {
                    d3: 'https://cdn.jsdelivr.net/npm/d3@7/+esm',
                },
            },
        },
    },
});
