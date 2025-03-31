# `ion-icon-angular-standalone`

Ionic Angular's standalone `IonIcon` component requires indivisual icons to be
imported and registered to the framework via `addIcons`.

https://ionicframework.com/docs/angular/build-options#standalone

This library provides a wrapper for `IonIcon` component for each icon,
that does exactly that.

## Per-icon `ion-icon` components

### Usage

In your component, import the icon components such as `IonIcon_logoIonic` from
`ion-icon-angular-standalone` instead of `IonIcon` from `@ionic/angular/standalone`:

```typescript
// instead of:
// import { IonIcon } from '@ionic/angular';
// import { addIcons } from 'ionicons';
// import { logoIonic } from 'ionicons/icons';
import { IonIcon_logoIonic } from 'ion-icon-angular-standalone';

@Component({
  selector: 'foo-bar',
  template: `
    <ion-icon name="logo-ionic"></ion-icon>
  `, // As long as static `name` attribute is used, template stays the same.
  standalone: true,
  imports: [
    IonIcon_logoIonic, // instead of `IonIcon`
  ],
})
export class FooBarComponent {
  // no need to call `addIcons({ logoIonic })`
}
```

For usage of `ion-icon` with `src` attribute, `ion-icon-angular-standalone` contains 
`IonIconWithoutName` component as well.

## `ion-icon` component with branded-type

For `ion-icon` without static `name` attribute, you can use the `IonIconWithBrandedName` component 
from `ion-icon-angular-standalone/branded`. 

This is useful when you have a component that takes an icon name as its input and renders `ion-icon` 
element in its template with that name. Now, you can do so in a type-safe way that prevents you 
and the component's users from missing `addIcons` calls.

### Usage

```typescript
// instead of:
// import { IonIcon } from '@ionic/angular';
// import { addIcons } from 'ionicons';
import { addIcon, IconName, IonIconWithBrandedName } from 'ion-icon-angular-standalone/branded';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'foo-bar',
  template: `
    <ion-icon [name]="iconName ?? fallbackIconName"></ion-icon>
  `,
  standalone: true,
  imports: [
    IonIconWithBrandedName, // instead of IonIcon
  ],
})
export class FooBarComponent {
  // `IconName` type makes sure the input is `addIcon()`ed already. 
  @Input() iconName: IconName | undefined = undefined;
  
  // Instead of plain string, use the return value of `addIcon` function.
  readonly fallbackIconName = addIcon({ logoIonic }); // 'logo-ionic' as IconName
}
```

## Restricting regular `IonIcon`

It is hightly recommended to restrict imports of `IonIcon` from `@ionic/angular/standalone` in your 
codebase.

### ESLint

```json
{
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
```
