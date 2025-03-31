import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
function toKebabCase(name) {
    // https://github.com/ionic-team/ionicons/blob/4477c0251291dee6c2aeeebef8df928edf3e620f/src/components/icon/utils.ts#L34
    return name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2').toLowerCase();
}
function addIcon(icon) {
    const iconNames = Object.keys(icon);
    if (iconNames.length !== 1) {
        throw new Error('You may specify only single icon per call.');
    }
    addIcons(icon);
    return toKebabCase(iconNames[0]);
}
class IonIconWithBrandedName extends IonIcon {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIconWithBrandedName, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIconWithBrandedName, isStandalone: true, selector: "ion-icon", inputs: { color: "color", flipRtl: "flipRtl", icon: "icon", ios: "ios", lazy: "lazy", md: "md", mode: "mode", name: "name", sanitize: "sanitize", size: "size", src: "src" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIconWithBrandedName, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src'],
                    standalone: true,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { IonIconWithBrandedName, addIcon };
//# sourceMappingURL=ion-icon-angular-standalone-branded.mjs.map
