import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private addBodyClass(bodyClass:string) {
    this.renderer.addClass(this.document.body, bodyClass);
  }
  
  private removeBodyClass(bodyClass:string) {
    this.renderer.removeClass(this.document.body, bodyClass);
  }

  enableDarkMode() {
    this.removeBodyClass('theme-light');
    this.addBodyClass('theme-dark');
  }

  enableLightMode() {
    this.removeBodyClass('theme-dark')
    this.addBodyClass('theme-light');
  }

}
