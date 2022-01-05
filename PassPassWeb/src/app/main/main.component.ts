import { Component, OnInit } from '@angular/core';
import { PasswordSaveModel } from '../app.models';
import { AlertService } from '../services/alert.service';
import { PasswordManagementService } from '../services/password-management.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public newPasswordLabel: string = "";
  public newPasswordString: string = "";
  get passwordValid() {
    return this.newPasswordString ? true : false;
  }

  constructor(private passwordService: PasswordManagementService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onPasswordSave() {
    if(!this.passwordValid)
      return;

    // Save password to server
    let model: PasswordSaveModel = {
      label: this.newPasswordLabel,
      password: this.newPasswordString
    };

    this.passwordService.save(model).subscribe(res => {
      if (res.success) {
        this.alertService.successSubject.next("Saved password successfully! ID: " + res.new_Id);
        this.newPasswordLabel = "";
        this.newPasswordString = "";
      }
    });
  }
}
