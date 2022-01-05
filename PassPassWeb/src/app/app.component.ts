import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Alert controls
  public successMessage = '';
  @ViewChild('successAlert', { static: false })
  public successAlert: NgbAlert | undefined;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.successSubject.subscribe(newSuccess => this.successMessage = newSuccess);
    this.alertService.successSubject.pipe(debounceTime(5000)).subscribe(() => {
      if (this.successAlert) {
        this.successAlert.close();
      }
    });
  }
}
