import { build } from 'vite';
import { copyFileSync } from 'node:fs';

await build();
copyFileSync('dist/index.html', 'dist/404.html');
process.exit(0);
