import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
    base: './',
    build: {
        minify: false,
        rollupOptions: {
            external: ['d3'],
            input: {
                main: resolve(__dirname, 'index.html'),
                ...getEntryPoints('storyboard'),
            },
            output: {
                paths: {
                    d3: 'https://cdn.jsdelivr.net/npm/d3@7/+esm',
                },
            },
        },
    },
});

function getEntryPoints(directory: string) {
    const files = fs.readdirSync(resolve(__dirname, directory));
    const entryPoints: Record<string, string> = {};

    files.forEach((file) => {
        if (file.endsWith('.html')) {
            const name = file.replace('.html', '');
            entryPoints[name] = resolve(directory, file);
        }
    });

    return entryPoints;
}
