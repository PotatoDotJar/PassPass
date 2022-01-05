import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PasswordRecord } from '../app.models';
import { PasswordManagementService } from '../services/password-management.service';

@Component({
  selector: 'app-view-password',
  templateUrl: './view-password.component.html',
  styleUrls: ['./view-password.component.scss']
})
export class ViewPasswordComponent implements OnInit {

  public passwordInfo: Observable<PasswordRecord | null> | undefined;
  public selectedId: string = "";
  constructor(private passwordService: PasswordManagementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.
  }

}
