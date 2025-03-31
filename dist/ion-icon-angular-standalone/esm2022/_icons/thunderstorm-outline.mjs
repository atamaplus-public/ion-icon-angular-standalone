// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { thunderstormOutline } from 'ionicons/icons';
import * as i0 from "@angular/core";
export class IonIcon_thunderstormOutline extends IonIcon {
    constructor() {
        addIcons({ thunderstormOutline });
        super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_thunderstormOutline, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIcon_thunderstormOutline, isStandalone: true, selector: "ion-icon[name=\"thunderstorm-outline\"]", inputs: { color: "color", flipRtl: "flipRtl", lazy: "lazy", mode: "mode", name: "name", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_thunderstormOutline, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon[name="thunderstorm-outline"]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGh1bmRlcnN0b3JtLW91dGxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24taWNvbi1hbmd1bGFyLXN0YW5kYWxvbmUvc3JjL19pY29ucy90aHVuZGVyc3Rvcm0tb3V0bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFFckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFTckQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLE9BQU87SUFDdEQ7UUFDRSxRQUFRLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOytHQUpVLDJCQUEyQjttR0FBM0IsMkJBQTJCLGtPQUo1QixlQUFlOzs0RkFJZCwyQkFBMkI7a0JBUHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQ3RGLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgYXRhbWEgcGx1cyBpbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25JY29uIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJztcbmltcG9ydCB7IHRodW5kZXJzdG9ybU91dGxpbmUgfSBmcm9tICdpb25pY29ucy9pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1pY29uW25hbWU9XCJ0aHVuZGVyc3Rvcm0tb3V0bGluZVwiXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBpbnB1dHM6IFsnY29sb3InLCAnZmxpcFJ0bCcsICdsYXp5JywgJ21vZGUnLCB7IG5hbWU6ICduYW1lJywgcmVxdWlyZWQ6IHRydWUgfSwgJ3NpemUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uSWNvbl90aHVuZGVyc3Rvcm1PdXRsaW5lIGV4dGVuZHMgSW9uSWNvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGFkZEljb25zKHsgdGh1bmRlcnN0b3JtT3V0bGluZSB9KTtcbiAgICBzdXBlcihpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpbmplY3QoRWxlbWVudFJlZiksIGluamVjdChOZ1pvbmUpKTtcbiAgfVxuICBuYW1lITogJ3RodW5kZXJzdG9ybS1vdXRsaW5lJztcbn1cbiJdfQ==