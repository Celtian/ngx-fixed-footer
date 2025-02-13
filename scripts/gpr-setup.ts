/* eslint-disable @typescript-eslint/no-explicit-any */
import { writeFileSync } from 'fs-extra';
import { join } from 'path';
import distPackage from '../dist/ngx-fixed-footer/package.json';

// Modify package.json in dist folder
const pkg: Record<string, any> = distPackage;

pkg.publishConfig = {};
pkg.name = '@celtian/ngx-fixed-footer';
pkg.publishConfig.registry = 'https://npm.pkg.github.com';

writeFileSync(join(__dirname, '..', 'dist', 'ngx-fixed-footer', 'package.json'), JSON.stringify(pkg, null, 2));
console.log('File package.json modified:', pkg);
