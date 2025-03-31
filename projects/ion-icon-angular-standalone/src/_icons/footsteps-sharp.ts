// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { footstepsSharp } from 'ionicons/icons';

@Component({
  selector: 'ion-icon[name="footsteps-sharp"]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content/>',
  inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
  standalone: true,
})
export class IonIcon_footstepsSharp extends IonIcon {
  constructor() {
    addIcons({ footstepsSharp });
    super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
  }
  name!: 'footsteps-sharp';
}
