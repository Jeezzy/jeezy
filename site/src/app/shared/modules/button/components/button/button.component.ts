import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import {ButtonKind, ButtonPalette, ButtonTypes} from '../../models/button.types';

@Component({
  selector: "as-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  public type: ButtonTypes = "button";
  @Input()
  public kind: ButtonKind = "large";
  @Input()
  public palette: ButtonPalette = "primary";
  @Input()
  public width = "";
  @Input()
  public disabled: boolean = false;
  @Input()
  public isLoading: boolean = false;
  @Input()
  public text?: string;
  @Input()
  public classList?: string;
  @Input()
  public custom: boolean = false;

  @Output()
  public tdOnClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  public lsOnHover: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isActive: boolean = false;
  public isFocused: boolean = false;

  public hover(): void {
    !this.disabled && this.lsOnHover.emit();
  }

  public click(): void {
    !this.isActive && this.tdOnClick.emit();
  }

  public keyDown(event: KeyboardEvent): void {
    if (!this.isActive && (event.code === "Enter" || event.code === "Space")) {
      this.isActive = true;
    }
  }

  public keyUp(event: KeyboardEvent): void {
    if (this.isActive && (event.code === "Enter" || event.code === "Space")) {
      this.isActive = false;
      this.tdOnClick.emit();
    }
  }

  public focus(): void {
    this.isFocused = true;
  }

  public blur(): void {
    this.isActive = false;
    this.isFocused = false;
  }
}
