import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {ButtonComponent} from "./components/button/button.component";
import {ButtonContentComponent} from "./components/button-content/button-content.component";

@NgModule({
    declarations: [
        ButtonComponent,
        ButtonContentComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [ButtonComponent],
})
export class ButtonModule {
}
