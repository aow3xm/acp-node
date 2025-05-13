import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/**/*.ts'],
    clean: true,
    format: ['cjs', 'esm'],
    minify: true,
    bundle: true,
    dts: true,
    noExternal: ['axios'],
    outDir: 'dist',
})