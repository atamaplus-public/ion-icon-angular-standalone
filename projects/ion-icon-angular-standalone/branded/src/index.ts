// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

export type IconName = string & { readonly __brand: unique symbol };

function toKebabCase(name: string) {
  // https://github.com/ionic-team/ionicons/blob/4477c0251291dee6c2aeeebef8df928edf3e620f/src/components/icon/utils.ts#L34
  return name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2').toLowerCase();
}

export function addIcon(icon: { readonly [name: string]: string }): IconName {
  const iconNames = Object.keys(icon);
  if (iconNames.length !== 1) {
    throw new Error('You may specify only single icon per call.');
  }
  addIcons(icon);
  return toKebabCase(iconNames[0]) as IconName;
}

@Component({
  selector: 'ion-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content/>',
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src'],
  standalone: true,
})
export class IonIconWithBrandedName extends IonIcon {
  name?: IconName;
  ios?: IconName;
  md?: IconName;
}
