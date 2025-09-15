import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef, input } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.html',
  imports: [NgTemplateOutlet]
})
export class RepeaterComponent {
  options = input.required<any[]>();

  @ContentChild(TemplateRef, { static: true }) itemTemplate!: TemplateRef<any>;
}
