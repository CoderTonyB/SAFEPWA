import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private db: AngularFirestore, private userService: UserService) {}

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
      .collection('Logs', ref =>
        ref
          .where('LogTypeKey', '==', logTypeKey)
          .where('uid', '==', this.userService.getCredentials().user.uid)
          .orderBy('TimeStamp', 'desc')
      )
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

  public getAnswersForLog(logKey) {
    return this.db.doc('Logs/' + logKey).valueChanges();
  }

  async saveLog(logKey, logData) {
    if (logKey === 'New') {
      logData['TimeStamp'] = Date.now();
      logData['uid'] = this.userService.getCredentials().user.uid;
      if (logData.Title.length === 0) {
        logData.Title = 'Untitled';
      }
      return this.db
        .collection('Logs')
        .add(logData)
        .then(() => {
          return 'Saved';
        });
    } else {
      return this.db
        .doc(`Logs/${logKey}`)
        .update(logData)
        .then(() => {
          return 'Updated';
        });
    }
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
