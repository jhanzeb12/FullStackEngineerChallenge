import { ToastrService, GlobalConfig } from 'ngx-toastr';

export function configureAlertService(toastrService: ToastrService) {
  return () => {
    return toastrService.toastrConfig = {
      autoDismiss: true,
      closeButton: false,
      enableHtml: true,
      positionClass: 'toast-bottom-center',
      preventDuplicates: false,
      progressBar: false,
    } as GlobalConfig;
  };
}