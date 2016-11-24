/**
 * Tooltip directive
 */

import { ComponentFactoryResolver, Directive, HostListener, Input, ViewContainerRef } from '@angular/core';

import { TooltipComponent } from './tooltip.component';


@Directive({
  selector: '[phTooltip]'
})
export class TooltipDirective {
  @Input() phTooltip: string;

  private tooltip: TooltipComponent;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  /**
   * create and position the tooltip
   * @param $event
   */
  @HostListener('mouseenter', ['$event'])
  onMouseEnter($event: MouseEvent) {
    if (this.tooltip) { return; }

    let toolTipFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);

    this.tooltip = this.viewContainerRef.createComponent(toolTipFactory, 0).instance;

    this.tooltip.message = this.phTooltip;
    this.tooltip.x = $event.pageX + 'px';
    this.tooltip.y = $event.pageY + 'px';
  }

  /**
   * Remove the tooltip
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.tooltip) { return; }

    this.viewContainerRef.remove(0);
    this.tooltip = null;
  }
}
