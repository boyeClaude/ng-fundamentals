import { Component } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: 'collapsible.component.html',
})
export class CollapsibleComponent {
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
