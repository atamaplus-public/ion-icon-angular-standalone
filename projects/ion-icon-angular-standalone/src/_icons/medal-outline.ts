// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { medalOutline } from 'ionicons/icons';

@Component({
  selector: 'ion-icon[name="medal-outline"]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content/>',
  inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
  standalone: true,
})
export class IonIcon_medalOutline extends IonIcon {
  constructor() {
    addIcons({ medalOutline });
    super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
  }
  name!: 'medal-outline';
}
