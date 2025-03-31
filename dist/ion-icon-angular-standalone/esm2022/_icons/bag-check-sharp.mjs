// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagCheckSharp } from 'ionicons/icons';
import * as i0 from "@angular/core";
export class IonIcon_bagCheckSharp extends IonIcon {
    constructor() {
        addIcons({ bagCheckSharp });
        super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_bagCheckSharp, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIcon_bagCheckSharp, isStandalone: true, selector: "ion-icon[name=\"bag-check-sharp\"]", inputs: { color: "color", flipRtl: "flipRtl", lazy: "lazy", mode: "mode", name: "name", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_bagCheckSharp, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon[name="bag-check-sharp"]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFnLWNoZWNrLXNoYXJwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uLWljb24tYW5ndWxhci1zdGFuZGFsb25lL3NyYy9faWNvbnMvYmFnLWNoZWNrLXNoYXJwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjtBQUVyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFTL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLE9BQU87SUFDaEQ7UUFDRSxRQUFRLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzsrR0FKVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw2TkFKdEIsZUFBZTs7NEZBSWQscUJBQXFCO2tCQVBqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUN0RixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIGF0YW1hIHBsdXMgaW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBOZ1pvbmUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uSWNvbiB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnO1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucyc7XG5pbXBvcnQgeyBiYWdDaGVja1NoYXJwIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24taWNvbltuYW1lPVwiYmFnLWNoZWNrLXNoYXJwXCJdJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQvPicsXG4gIGlucHV0czogWydjb2xvcicsICdmbGlwUnRsJywgJ2xhenknLCAnbW9kZScsIHsgbmFtZTogJ25hbWUnLCByZXF1aXJlZDogdHJ1ZSB9LCAnc2l6ZSddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBJb25JY29uX2JhZ0NoZWNrU2hhcnAgZXh0ZW5kcyBJb25JY29uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYWRkSWNvbnMoeyBiYWdDaGVja1NoYXJwIH0pO1xuICAgIHN1cGVyKGluamVjdChDaGFuZ2VEZXRlY3RvclJlZiksIGluamVjdChFbGVtZW50UmVmKSwgaW5qZWN0KE5nWm9uZSkpO1xuICB9XG4gIG5hbWUhOiAnYmFnLWNoZWNrLXNoYXJwJztcbn1cbiJdfQ==