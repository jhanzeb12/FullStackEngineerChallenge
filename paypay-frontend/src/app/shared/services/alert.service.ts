import { Injectable, Inject } from '@angular/core';

// third party libaries
import { ToastrService, GlobalConfig } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AlertService {
  public toastConfig: GlobalConfig;
  constructor(
    public toastrService: ToastrService) {
    this.toastConfig = {
      autoDismiss: true,
      closeButton: false,
      enableHtml: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      progressBar: false,
    } as GlobalConfig;
  }

  // success alert
  public successAlert(message = 'Saved Successfully.', title = '') {
    this.toastrService.success(message, title, this.toastConfig);
  }

  // error alert
  public errorAlert(message: string, title = '') {
    this.toastrService.error(message, title, this.toastConfig);
  }

  // warning alert
  public warningAlert(message: string, title = '') {
    this.toastrService.warning(message, title, this.toastConfig);
  }

  // info alert
  public infoAlert(message: string, title = '') {
    this.toastrService.info(message, title, this.toastConfig);
  }
}