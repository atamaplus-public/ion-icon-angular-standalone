# `ion-icon-angular-standalone`

**Simplify IonIcon usage in standalone Ionic Angular applications**

## Overview

Ionic Angular's standalone `IonIcon` component requires individual icons to be imported and registered via `addIcons`.  
https://ionicframework.com/docs/angular/build-options#standalone

This library eliminates that manual work by providing pre-configured wrapper components for each icon.

**Key improvements:**
- **No manual registration** - Icons auto-register when loaded
- **Better tree-shaking** - Only bundle icons you actually use  
- **Type safety** - Catch missing icons at compile-time, not runtime
- **Simpler workflow** - Just import the icon component you need

## Installation

[![NPM Version](https://img.shields.io/npm/v/ion-icon-angular-standalone)](https://npmjs.com/package/ion-icon-angular-standalone)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```
npm i -S ion-icon-angular-standalone
```

This library has peer dependencies, notably:
- `@angular/core >=17.3.0`
- `@ionic/angular >=8.1.3`
- `ionicons >=7.2.3`

(Minimum requirements are intentionally kept low. Please use newer versions of your preference.)

## Usage

### Static icon names (recommended for most use cases)

Standard Ionic usage:

```typescript
// 🔧 Standard Ionic usage
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  template: `<ion-icon name="logo-ionic"></ion-icon>`,
  standalone: true,
  imports: [IonIcon]
})
export class MyComponent {
  constructor() {
    addIcons({ logoIonic }); // Manual registration required
  }
}
```

With this library:

```typescript
// ✅ With ion-icon-angular-standalone
import { IonIcon_logoIonic } from 'ion-icon-angular-standalone';

@Component({
  template: `<ion-icon name="logo-ionic"></ion-icon>`,
  standalone: true,
  imports: [IonIcon_logoIonic] // Icon auto-registers itself!
})
export class MyComponent {
  // No addIcons() call needed - it's handled automatically!
}
```

**Key Benefits:**
- **Zero configuration**: No `addIcons()` calls needed
- **Bundle optimization**: Only icons you import are included
- **Simple workflow**: Just import the specific icon component
- **No runtime errors**: Missing icons caught at build time

**Note:** For `ion-icon` with `src` attribute, use the `IonIconWithoutName` component.

### Dynamic icon names with type safety

For components that accept dynamic icon names via inputs or properties, you can use `ion-icon-angular-standalone/branded`.

Standard Ionic usage:

```typescript
// 🔧 Standard Ionic usage
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'my-icon',
  template: `<ion-icon [name]="iconName ?? fallbackIconName"></ion-icon>`,
  standalone: true,
  imports: [IonIcon]
})
export class MyIconComponent {
  @Input() iconName: string | undefined = undefined; // No type safety!
  // ⚠️ ANY icon passed to iconName must be registered elsewhere with addIcons()
  // or it will result in runtime errors (blank icons)
  
  readonly fallbackIconName = 'logo-ionic';
  
  constructor() {
    addIcons({ logoIonic }); // Manual registration required, but only fallback icon registered here!
  }
}
```

With this library:

```typescript
// ✅ With ion-icon-angular-standalone/branded
import { addIcon, IconName, IonIconWithBrandedName } from 'ion-icon-angular-standalone/branded';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'my-icon',
  template: `<ion-icon [name]="iconName ?? fallbackIconName"></ion-icon>`,
  standalone: true,
  imports: [IonIconWithBrandedName]
})
export class MyIconComponent {
  @Input() iconName: IconName | undefined = undefined; // Compile-time safety!
  // ✅ IconName type ensures ANY icon passed to iconName is already registered!
  // No runtime errors possible - unregistered icons caught at compile-time
  
  readonly fallbackIconName = addIcon({ logoIonic }); // Registers the icon and returns IconName
}
```

**Key Benefits:**
- **Compile-time safety**: `IconName` type prevents unregistered icons
- **Explicit registration**: Each `addIcon()` call is clear and purposeful
- **Runtime error prevention**: No more blank icons from missing registrations

**Important Note:** Components from `ion-icon-angular-standalone` (e.g. `IonIcon_logoIonic`) and `ion-icon-angular-standalone/branded` (i.e. `IonIconWithBrandedName`) have overlapping selectors and **cannot coexist in the same component's imports array**. Choose one method per component.

## Enforcing Consistent Usage

**Highly recommended**: Use ESLint to prevent standard `IonIcon` imports and ensure consistent usage across your codebase:

Add this rule to your `.eslintrc.json`:

```json
{
  "rules": {
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "@ionic/angular",
            "message": "Use @ionic/angular/standalone instead."
          },
          {
            "name": "@ionic/angular/standalone",
            "importNames": ["IonIcon"],
            "message": "Use components from ion-icon-angular-standalone instead."
          }
        ]
      }
    ]
  }
}
```

This prevents developers from accidentally using the standard `IonIcon` and ensures consistent icon usage patterns across your entire codebase.

## Articles

- [New library for easier IonIcon usage in Ionic Angular standalone](https://medium.com/@ippei.ukai/new-library-for-easier-ionicon-usage-in-ionic-angular-standalone-b334a52464a0) - Medium article introducing the library
  - [Standalone時代のIonic Angularでion-iconをスマートに扱う！ 〜ion-icon-angular-standaloneのご紹介〜](https://zenn.dev/atamaplus/articles/dfcaac49c50577) - The same article in Japanese on Zenn

## Contributing

Contributions are welcome! Please check the [GitHub repository](https://github.com/atamaplus-public/ion-icon-angular-standalone) for more information.
