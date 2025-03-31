// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as i0 from "@angular/core";
function toKebabCase(name) {
    // https://github.com/ionic-team/ionicons/blob/4477c0251291dee6c2aeeebef8df928edf3e620f/src/components/icon/utils.ts#L34
    return name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2').toLowerCase();
}
export function addIcon(icon) {
    const iconNames = Object.keys(icon);
    if (iconNames.length !== 1) {
        throw new Error('You may specify only single icon per call.');
    }
    addIcons(icon);
    return toKebabCase(iconNames[0]);
}
export class IonIconWithBrandedName extends IonIcon {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24taWNvbi1hbmd1bGFyLXN0YW5kYWxvbmUvYnJhbmRlZC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBRXJGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBSXBDLFNBQVMsV0FBVyxDQUFDLElBQVk7SUFDL0Isd0hBQXdIO0lBQ3hILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRixDQUFDO0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUF5QztJQUMvRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBYSxDQUFDO0FBQy9DLENBQUM7QUFTRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsT0FBTzsrR0FBdEMsc0JBQXNCO21HQUF0QixzQkFBc0IseVFBSnZCLGVBQWU7OzRGQUlkLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO29CQUNwRyxVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIGF0YW1hIHBsdXMgaW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkljb24gfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuXG5leHBvcnQgdHlwZSBJY29uTmFtZSA9IHN0cmluZyAmIHsgcmVhZG9ubHkgX19icmFuZDogdW5pcXVlIHN5bWJvbCB9O1xuXG5mdW5jdGlvbiB0b0tlYmFiQ2FzZShuYW1lOiBzdHJpbmcpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWNvbnMvYmxvYi80NDc3YzAyNTEyOTFkZWU2YzJhZWVlYmVmOGRmOTI4ZWRmM2U2MjBmL3NyYy9jb21wb25lbnRzL2ljb24vdXRpbHMudHMjTDM0XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLyhbYS16MC05XXwoPz1bQS1aXSkpKFtBLVowLTldKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSWNvbihpY29uOiB7IHJlYWRvbmx5IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSk6IEljb25OYW1lIHtcbiAgY29uc3QgaWNvbk5hbWVzID0gT2JqZWN0LmtleXMoaWNvbik7XG4gIGlmIChpY29uTmFtZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IHNwZWNpZnkgb25seSBzaW5nbGUgaWNvbiBwZXIgY2FsbC4nKTtcbiAgfVxuICBhZGRJY29ucyhpY29uKTtcbiAgcmV0dXJuIHRvS2ViYWJDYXNlKGljb25OYW1lc1swXSkgYXMgSWNvbk5hbWU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1pY29uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGlucHV0czogWydjb2xvcicsICdmbGlwUnRsJywgJ2ljb24nLCAnaW9zJywgJ2xhenknLCAnbWQnLCAnbW9kZScsICduYW1lJywgJ3Nhbml0aXplJywgJ3NpemUnLCAnc3JjJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIElvbkljb25XaXRoQnJhbmRlZE5hbWUgZXh0ZW5kcyBJb25JY29uIHtcbiAgbmFtZT86IEljb25OYW1lO1xuICBpb3M/OiBJY29uTmFtZTtcbiAgbWQ/OiBJY29uTmFtZTtcbn1cbiJdfQ==