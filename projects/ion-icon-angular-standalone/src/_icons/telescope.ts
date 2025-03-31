// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { telescope } from 'ionicons/icons';

@Component({
  selector: 'ion-icon[name="telescope"]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content/>',
  inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
  standalone: true,
})
export class IonIcon_telescope extends IonIcon {
  constructor() {
    addIcons({ telescope });
    super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
  }
  name!: 'telescope';
}
