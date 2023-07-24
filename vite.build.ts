import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import {resolve} from 'path';
import {defineConfig} from 'vite';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        lib: {
            name: 'joy',
            entry: resolve(__dirname, 'src/joy.ts'),
            fileName: 'joy',
        },
    },
    plugins: [dts({staticImport: true}), react()],
});
