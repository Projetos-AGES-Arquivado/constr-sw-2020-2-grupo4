import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

/**
 * Dialog useful to confirm or cancel an action (method)
 * Receives data on constructor as the following:
 * {
      targetId: string,
      titleText: string,
      confirmText: string,
      cancelText: string,
      action(): Observable<Object>
    }
  When action is executed, uses an EventEmitter to return the targetId (data ID)
 */

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Output() emitService = new EventEmitter;

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      targetId: string
      titleText: string,
      confirmText: string,
      cancelText: string,
      action(): Observable<Object>
    }) { }

  ngOnInit(): void {
  }

  /**
   * Closes the dialog modal
   */
  closeModal(): void {
    this.dialogRef.close();
  }

  /**
   * Executes the deletion callback, expecting and using the Observer<Object> return on the EventEmitter.
   */
  doAction(){
    this.data.action().subscribe(
      val => this.emitService.next(this.data.targetId),
      error => console.warn(error)
    );
  }

}
