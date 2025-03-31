// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trophy } from 'ionicons/icons';
import * as i0 from "@angular/core";
export class IonIcon_trophy extends IonIcon {
    constructor() {
        addIcons({ trophy });
        super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_trophy, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIcon_trophy, isStandalone: true, selector: "ion-icon[name=\"trophy\"]", inputs: { color: "color", flipRtl: "flipRtl", lazy: "lazy", mode: "mode", name: "name", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_trophy, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon[name="trophy"]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJvcGh5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uLWljb24tYW5ndWxhci1zdGFuZGFsb25lL3NyYy9faWNvbnMvdHJvcGh5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjtBQUVyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFTeEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxPQUFPO0lBQ3pDO1FBQ0UsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7K0dBSlUsY0FBYzttR0FBZCxjQUFjLG9OQUpmLGVBQWU7OzRGQUlkLGNBQWM7a0JBUDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQ3RGLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgYXRhbWEgcGx1cyBpbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25JY29uIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJztcbmltcG9ydCB7IHRyb3BoeSB9IGZyb20gJ2lvbmljb25zL2ljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWljb25bbmFtZT1cInRyb3BoeVwiXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBpbnB1dHM6IFsnY29sb3InLCAnZmxpcFJ0bCcsICdsYXp5JywgJ21vZGUnLCB7IG5hbWU6ICduYW1lJywgcmVxdWlyZWQ6IHRydWUgfSwgJ3NpemUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uSWNvbl90cm9waHkgZXh0ZW5kcyBJb25JY29uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYWRkSWNvbnMoeyB0cm9waHkgfSk7XG4gICAgc3VwZXIoaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSwgaW5qZWN0KEVsZW1lbnRSZWYpLCBpbmplY3QoTmdab25lKSk7XG4gIH1cbiAgbmFtZSE6ICd0cm9waHknO1xufVxuIl19