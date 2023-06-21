import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends FieldType {
  onClick($event: Event) {
    if (this.props['onClick']) {
      this.props['onClick']($event);
    }
  }
}
