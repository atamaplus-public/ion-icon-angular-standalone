# `ion-icon-angular-standalone`

Ionic Angular's standalone `IonIcon` component requires indivisual icons to be
imported and registered to the framework via `addIcons`.

https://ionicframework.com/docs/angular/build-options#standalone

This library provides a wrapper for `IonIcon` component for each icon,
that does exactly that.

## Usage

In your component, import the icon components you want to use such as `IonIcon_logoIonic`
from `ion-icon-angular-standalone` instead of `IonIcon` from `@ionic/angular/standalone`:

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
  `, // As long as static `name` attribute is specified, template stays the same.
  standalone: true,
  imports: [
    IonIcon_logoIonic, // instead of IonIcon
  ],
})
export class FooBarComponent {
  // no need to call `addIcons({ logoIonic })`
}
```
