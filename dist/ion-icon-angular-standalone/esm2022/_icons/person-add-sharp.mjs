// Copyright (c) atama plus inc. All rights reserved. Licensed under the MIT license.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, inject } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personAddSharp } from 'ionicons/icons';
import * as i0 from "@angular/core";
export class IonIcon_personAddSharp extends IonIcon {
    constructor() {
        addIcons({ personAddSharp });
        super(inject(ChangeDetectorRef), inject(ElementRef), inject(NgZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_personAddSharp, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: IonIcon_personAddSharp, isStandalone: true, selector: "ion-icon[name=\"person-add-sharp\"]", inputs: { color: "color", flipRtl: "flipRtl", lazy: "lazy", mode: "mode", name: "name", size: "size" }, usesInheritance: true, ngImport: i0, template: '<ng-content/>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IonIcon_personAddSharp, decorators: [{
            type: Component,
            args: [{
                    selector: 'ion-icon[name="person-add-sharp"]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content/>',
                    inputs: ['color', 'flipRtl', 'lazy', 'mode', { name: 'name', required: true }, 'size'],
                    standalone: true,
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLWFkZC1zaGFycC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pY29uLWFuZ3VsYXItc3RhbmRhbG9uZS9zcmMvX2ljb25zL3BlcnNvbi1hZGQtc2hhcnAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBRXJGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQVNoRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsT0FBTztJQUNqRDtRQUNFLFFBQVEsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOytHQUpVLHNCQUFzQjttR0FBdEIsc0JBQXNCLDhOQUp2QixlQUFlOzs0RkFJZCxzQkFBc0I7a0JBUGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQ3RGLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgYXRhbWEgcGx1cyBpbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25JY29uIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJztcbmltcG9ydCB7IHBlcnNvbkFkZFNoYXJwIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb24taWNvbltuYW1lPVwicGVyc29uLWFkZC1zaGFycFwiXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50Lz4nLFxuICBpbnB1dHM6IFsnY29sb3InLCAnZmxpcFJ0bCcsICdsYXp5JywgJ21vZGUnLCB7IG5hbWU6ICduYW1lJywgcmVxdWlyZWQ6IHRydWUgfSwgJ3NpemUnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uSWNvbl9wZXJzb25BZGRTaGFycCBleHRlbmRzIElvbkljb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBhZGRJY29ucyh7IHBlcnNvbkFkZFNoYXJwIH0pO1xuICAgIHN1cGVyKGluamVjdChDaGFuZ2VEZXRlY3RvclJlZiksIGluamVjdChFbGVtZW50UmVmKSwgaW5qZWN0KE5nWm9uZSkpO1xuICB9XG4gIG5hbWUhOiAncGVyc29uLWFkZC1zaGFycCc7XG59XG4iXX0=