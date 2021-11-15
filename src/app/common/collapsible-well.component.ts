import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: 'collapsible.component.html',
})
export class CollapsibleComponent implements OnInit {
  @Input('title') title!: string | undefined;
  visible: boolean = true;
  constructor() {}

  ngOnInit() {}

  toggleContent() {
    this.visible = !this.visible;
  }
}
