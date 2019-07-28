import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

  onNightModeToggle(nightModeToggle: boolean) {
    if (nightModeToggle) {
      this.themeService.enableDarkMode();
    } else {
      this.themeService.enableLightMode();
    }
  }

}
