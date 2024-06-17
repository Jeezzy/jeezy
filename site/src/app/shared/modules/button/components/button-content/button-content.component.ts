import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    Input,
} from "@angular/core";
import { ButtonKind, ButtonPalette } from '../../models/button.types';

@Component({
    selector: "as-button-content",
    templateUrl: "./button-content.component.html",
    styleUrls: ["./button-content.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonContentComponent implements AfterContentInit {
    @Input()
    public text?: string;
    @Input()
    public kind: ButtonKind = "large";
    @Input()
    public palette: ButtonPalette = "primary";
    @Input()
    public custom = false;

    @ContentChild("content")
    public content?: ElementRef;

    public hasContent = true;

    public ngAfterContentInit(): void {
        this.hasContent = !!this.content?.nativeElement?.childNodes?.length;
    }
}
