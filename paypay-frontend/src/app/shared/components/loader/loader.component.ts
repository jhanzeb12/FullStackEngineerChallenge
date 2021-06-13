import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {
  @HostBinding('class.fullHeight.fullWidth') show = false;
  constructor(private loaderService: LoaderService) {
    this.loaderService.showLoader$.subscribe((resp) => {
      this.show = resp;
    });
  }
}
