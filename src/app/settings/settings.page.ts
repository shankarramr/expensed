import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  private _nightModeToggleValue: boolean;

  constructor(private themeService: ThemeService) {
    this.nightModeToggleValue = this.themeService.stateNightModeToggle;
  }

  onNightModeToggle(nightModeToggleInputValue: boolean) {
    this.themeService.stateNightModeToggle = nightModeToggleInputValue;

    if (nightModeToggleInputValue) {
      this.themeService.enableDarkMode();
    } else {
      this.themeService.enableLightMode();
    }
  }

  get nightModeToggleValue(): boolean {
    return this._nightModeToggleValue;
  }

  set nightModeToggleValue(stateNightModeToggle: boolean) {
    this._nightModeToggleValue = stateNightModeToggle;
  }

  ngOnInit() {
  }

}
