// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOffOutline } from 'ionicons/icons';
import * as i0 from "@angular/core";
export class IonIcon_notificationsOffOutline extends IonIcon {
    constructor() {
        addIcons({ notificationsOffOutline });
        super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_notificationsOffOutline, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIcon_notificationsOffOutline, isStandalone: true, selector: "ion-icon[name=\"notifications-off-outline\"]", inputs: { color: "color", flipRtl: "flipRtl", lazy: "lazy", mode: "mode", name: "name", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_notificationsOffOutline, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon[name="notifications-off-outline"]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy1vZmYtb3V0bGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pY29uLWFuZ3VsYXItc3RhbmRhbG9uZS9zcmMvX2ljb25zL25vdGlmaWNhdGlvbnMtb2ZmLW91dGxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBRXJGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBU3pELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxPQUFPO0lBQzFEO1FBQ0UsUUFBUSxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzsrR0FKVSwrQkFBK0I7bUdBQS9CLCtCQUErQix1T0FKaEMsZUFBZTs7NEZBSWQsK0JBQStCO2tCQVAzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0Q0FBNEM7b0JBQ3RELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDO29CQUN0RixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIGF0YW1hIHBsdXMgaW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBOZ1pvbmUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uSWNvbiB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnO1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucyc7XG5pbXBvcnQgeyBub3RpZmljYXRpb25zT2ZmT3V0bGluZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWljb25bbmFtZT1cIm5vdGlmaWNhdGlvbnMtb2ZmLW91dGxpbmVcIl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudC8+JyxcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2ZsaXBSdGwnLCAnbGF6eScsICdtb2RlJywgeyBuYW1lOiAnbmFtZScsIHJlcXVpcmVkOiB0cnVlIH0sICdzaXplJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIElvbkljb25fbm90aWZpY2F0aW9uc09mZk91dGxpbmUgZXh0ZW5kcyBJb25JY29uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYWRkSWNvbnMoeyBub3RpZmljYXRpb25zT2ZmT3V0bGluZSB9KTtcbiAgICBzdXBlcihpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpbmplY3QoRWxlbWVudFJlZiksIGluamVjdChOZ1pvbmUpKTtcbiAgfVxuICBuYW1lITogJ25vdGlmaWNhdGlvbnMtb2ZmLW91dGxpbmUnO1xufVxuIl19