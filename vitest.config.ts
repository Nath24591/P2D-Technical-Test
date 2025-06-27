import { defineConfig, configDefaults } from 'vitest/config';


export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            exclude: [
                ...configDefaults.exclude,
                'src/main.tsx',
                'src/components/*',
                'src/constants/*',
                'src/scripts/Sprite.ts',
                'src/scripts/engine/Renderer.ts',
                'src/scripts/engine/Game.ts'
            ]
        }

    },
});
