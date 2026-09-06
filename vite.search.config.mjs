import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],define:{'process.env.NODE_ENV':JSON.stringify('production')},publicDir:false,css:{postcss:{}},build:{outDir:'github-dist/assets/search-ui',emptyOutDir:false,lib:{entry:'app/search/static-entry.tsx',formats:['es'],fileName:()=> 'search.js'},rolldownOptions:{output:{codeSplitting:false}}}});
