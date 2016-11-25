/**
 * A component with open / close features
 */

import { ElementRef, Renderer } from '@angular/core';


export abstract class AbstractToggleComponent {
  protected elementRef: ElementRef;
  protected renderer: Renderer;
  protected openState = 'closed';

  close() {
    this.openState = 'closed';

    setTimeout(() => {
      this.renderer.setElementClass(this.elementRef.nativeElement, 'opened', false);
    }, 200);
  }

  isOpened(): boolean {
    return this.openState === 'opened';
  }

  open() {
    this.openState = 'opened';
    this.renderer.setElementClass(this.elementRef.nativeElement, 'opened', true);
  }

  toggle() {
    this.isOpened()
      ? this.close()
      : this.open();
  }
}
