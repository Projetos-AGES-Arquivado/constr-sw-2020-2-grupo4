import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

/**
 * Dialog useful when deleting entries
 * Receives data on constructor as the following:
 * {
      targetId: string,
      titleText: string,
      confirmText: string,
      cancelText: string,
      deleteFunction(): Observable<Object>
    }
  When deleteFunction is executed, uses an EventEmitter to return the targetId (deleted data ID)
 */

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Output() emitService = new EventEmitter;

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      targetId: string
      titleText: string,
      confirmText: string,
      cancelText: string,
      deleteFunction(): Observable<Object>
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
  doDelete(){
    this.data.deleteFunction().subscribe(
      val => this.emitService.next(this.data.targetId),
      error => console.warn(error)
    );
  }

}
