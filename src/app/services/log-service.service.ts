import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private db: AngularFirestore) {}

  public getLogList() {
    return this.db
      .collection('LogTypes')
      .snapshotChanges()
      .pipe(
        map(logs =>
          logs.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getLogInventoryForLogType(logTypeKey) {
    return this.db
      .collection('Logs', ref => ref.where('LogTypeKey', '==', logTypeKey))
      .snapshotChanges()
      .pipe(
        map(logs =>
          logs.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getQuestionsForLogKey(logTypeKey) {
    return this.db
      .collection('LogQuestions', ref =>
        ref.where('LogTypeKey', '==', logTypeKey).orderBy('Order')
      )
      .snapshotChanges()
      .pipe(
        map(Question =>
          Question.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
}
