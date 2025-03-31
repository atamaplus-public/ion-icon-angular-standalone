// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisVerticalCircle } from 'ionicons/icons';
import * as i0 from "@angular/core";
export class IonIcon_ellipsisVerticalCircle extends IonIcon {
    constructor() {
        addIcons({ ellipsisVerticalCircle });
        super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_ellipsisVerticalCircle, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIcon_ellipsisVerticalCircle, isStandalone: true, selector: "ion-icon[name=\"ellipsis-vertical-circle\"]", inputs: { color: "color", flipRtl: "flipRtl", lazy: "lazy", mode: "mode", name: "name", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_ellipsisVerticalCircle, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon[name="ellipsis-vertical-circle"]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMtdmVydGljYWwtY2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uLWljb24tYW5ndWxhci1zdGFuZGFsb25lL3NyYy9faWNvbnMvZWxsaXBzaXMtdmVydGljYWwtY2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjtBQUVyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQVN4RCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsT0FBTztJQUN6RDtRQUNFLFFBQVEsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7K0dBSlUsOEJBQThCO21HQUE5Qiw4QkFBOEIsc09BSi9CLGVBQWU7OzRGQUlkLDhCQUE4QjtrQkFQMUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMkNBQTJDO29CQUNyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDdEYsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBhdGFtYSBwbHVzIGluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdab25lLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkljb24gfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJztcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnO1xuaW1wb3J0IHsgZWxsaXBzaXNWZXJ0aWNhbENpcmNsZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWljb25bbmFtZT1cImVsbGlwc2lzLXZlcnRpY2FsLWNpcmNsZVwiXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBpbnB1dHM6IFsnY29sb3InLCAnZmxpcFJ0bCcsICdsYXp5JywgJ21vZGUnLCB7IG5hbWU6ICduYW1lJywgcmVxdWlyZWQ6IHRydWUgfSwgJ3NpemUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uSWNvbl9lbGxpcHNpc1ZlcnRpY2FsQ2lyY2xlIGV4dGVuZHMgSW9uSWNvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGFkZEljb25zKHsgZWxsaXBzaXNWZXJ0aWNhbENpcmNsZSB9KTtcbiAgICBzdXBlcihpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpbmplY3QoRWxlbWVudFJlZiksIGluamVjdChOZ1pvbmUpKTtcbiAgfVxuICBuYW1lITogJ2VsbGlwc2lzLXZlcnRpY2FsLWNpcmNsZSc7XG59XG4iXX0=