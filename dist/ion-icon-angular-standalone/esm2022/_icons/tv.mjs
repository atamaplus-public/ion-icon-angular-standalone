// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { tv } from 'ionicons/icons';
import * as i0 from "@angular/core";
export class IonIcon_tv extends IonIcon {
    constructor() {
        addIcons({ tv });
        super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_tv, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIcon_tv, isStandalone: true, selector: "ion-icon[name=\"tv\"]", inputs: { color: "color", flipRtl: "flipRtl", lazy: "lazy", mode: "mode", name: "name", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_tv, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon[name="tv"]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24taWNvbi1hbmd1bGFyLXN0YW5kYWxvbmUvc3JjL19pY29ucy90di50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBU3BDLE1BQU0sT0FBTyxVQUFXLFNBQVEsT0FBTztJQUNyQztRQUNFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOytHQUpVLFVBQVU7bUdBQVYsVUFBVSxnTkFKWCxlQUFlOzs0RkFJZCxVQUFVO2tCQVB0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUN0RixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIGF0YW1hIHBsdXMgaW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBOZ1pvbmUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uSWNvbiB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnO1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucyc7XG5pbXBvcnQgeyB0diB9IGZyb20gJ2lvbmljb25zL2ljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWljb25bbmFtZT1cInR2XCJdJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGlucHV0czogWydjb2xvcicsICdmbGlwUnRsJywgJ2xhenknLCAnbW9kZScsIHsgbmFtZTogJ25hbWUnLCByZXF1aXJlZDogdHJ1ZSB9LCAnc2l6ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBJb25JY29uX3R2IGV4dGVuZHMgSW9uSWNvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGFkZEljb25zKHsgdHYgfSk7XG4gICAgc3VwZXIoaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSwgaW5qZWN0KEVsZW1lbnRSZWYpLCBpbmplY3QoTmdab25lKSk7XG4gIH1cbiAgbmFtZSE6ICd0dic7XG59XG4iXX0=