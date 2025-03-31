import { IonIcon } from '@ionic/angular/standalone';
import * as i0 from "@angular/core";
export type IconName = string & {
    readonly __brand: unique symbol;
};
export declare function addIcon(icon: {
    readonly [name: string]: string;
}): IconName;
export declare class IonIconWithBrandedName extends IonIcon {
    name?: IconName;
    ios?: IconName;
    md?: IconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonIconWithBrandedName, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonIconWithBrandedName, "ion-icon", never, { "color": { "alias": "color"; "required": false; }; "flipRtl": { "alias": "flipRtl"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "ios": { "alias": "ios"; "required": false; }; "lazy": { "alias": "lazy"; "required": false; }; "md": { "alias": "md"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "name": { "alias": "name"; "required": false; }; "sanitize": { "alias": "sanitize"; "required": false; }; "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; }, {}, never, ["*"], true, never>;
}
