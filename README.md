<p align="center">
  <a href="https://github.com/Celtian/ngx-fixed-footer" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxFixedFooter</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-fixed-footer.svg)](https://badge.fury.io/js/ngx-fixed-footer)
[![Package License](https://img.shields.io/npm/l/ngx-fixed-footer.svg)](https://www.npmjs.com/ngx-fixed-footer)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-fixed-footer.svg)](https://www.npmjs.com/ngx-fixed-footer)
[![Snyk](https://snyk.io/advisor/npm-package/ngx-fixed-footer/badge.svg)](https://snyk.io/advisor/npm-package/ngx-fixed-footer)
[![codecov](https://codecov.io/gh/Celtian/ngx-fixed-footer/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/ngx-fixed-footer/)
[![stars](https://badgen.net/github/stars/celtian/ngx-fixed-footer)](https://github.com/celtian/ngx-fixed-footer/)
[![forks](https://badgen.net/github/forks/celtian/ngx-fixed-footer)](https://github.com/celtian/ngx-fixed-footer/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-fixed-footer.svg)](http://hits.dwyl.com/celtian/ngx-fixed-footer)

> Angular directive that adds fixed footer without overlap

> ✓ _Angular 20 compatible_

Here's the [demo](http://celtian.github.io/ngx-fixed-footer/) or [stackblitz live preview](https://stackblitz.com/edit/ngx-fixed-footer) or [codesandbox live preview](https://codesandbox.io/s/ngx-fixed-footer-m4f21)

- Lightweight
- No dependencies!
- Directive way

## 🛠️ Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-fixed-footer
```

2. Add NgxFixedFooterModule into your module `imports`

   2.1. import providers (optional)

   ```typescript
     import { provideFixedFooter } from 'ngx-fixed-footer';

     export const appConfig: ApplicationConfig = {
       providers: [
         // ...
         provideFixedFooter({
           containerSelector: '[data-something]',
           cssAttribute: 'margin'
         })
       ]
     };

     // or

     import { provideFixedFooter } from 'ngx-fixed-footer';

     @NgModule({
      // ...
      imports: [
        // ...
        provideFixedFooter({
          containerSelector: '[data-something]',
          cssAttribute: 'margin'
        })
      ]
     })

   ```

   2.2 import directive

   ```typescript
     import { NgxFixedFooterDirective } from 'ngx-fixed-footer';

     @Component({
        standalone: true,
        imports: [
          // ...
          NgxFixedFooterDirective
        ]
     })

     // or

     import { NgxFixedFooterDirective } from 'ngx-fixed-footer';

     @NgModule({
        // ...
        imports: [
          // ...
          NgxFixedFooterDirective
        ]
     })
   ```

## 🚀 Quick start

### Example code

```html
<div role="main">...some content here</div>
<div ngxFixedFooter [containerSelector]="[role='main']" [cssAttribute]="'padding'">... some content here</div>
```

### Result

```html
<div role="main" style="padding-bottom: {{ /* dynamic height of footer */ }}">...some content here</div>
<div ngxFixedFooter [containerSelector]="[role='main']" [cssAttribute]="'padding'">... some content here</div>
```

## 🛠️ Options

### Root options

_Module can be configured globally._

| Option                | Type                  | Default         | Description                                     |
| --------------------- | --------------------- | --------------- | ----------------------------------------------- |
| **containerSelector** | string                | '[role="main"]' | Css selector used for additional padding/margin |
| **cssAttribute**      | 'margin' or 'padding' | 'padding'       | Css attribute used on 'containerSelector'       |

### Directive

_Each directive can override global options._

| Option                  | Type                  | Default                       | Description                                     |
| ----------------------- | --------------------- | ----------------------------- | ----------------------------------------------- |
| **[containerSelector]** | string                | value taken from root options | Css selector used for additional padding/margin |
| **[cssAttribute]**      | 'margin' or 'padding' | value taken from root options | Css attribute used on 'containerSelector'       |

## 🔧 Compatibility

| Angular   | ngx-fixed-footer | Install                       |
| --------- | ---------------- | ----------------------------- |
| >= 20     | 4.x              | `yarn add ngx-fixed-footer`   |
| >= 18     | 3.x              | `yarn add ngx-fixed-footer@3` |
| >= 14     | 2.x              | `yarn add ngx-fixed-footer@2` |
| >= 12     | 1.x              | `yarn add ngx-fixed-footer@1` |
| >= 5 < 13 | 0.x              | `yarn add ngx-fixed-footer@0` |

## 📦 Dependencies

_None_

## 🪪 License

Copyright &copy; 2021 - 2025 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
