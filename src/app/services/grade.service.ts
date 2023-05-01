import {Injectable} from '@angular/core';
import {KeyValue} from "../models/KeyValue";


@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private grades: KeyValue[] = [
    new KeyValue(1, "diplom"),
    new KeyValue(2, "kardani"),
    new KeyValue(3, "karshenasi"),
  ]

  constructor() {
  }

  getAll(): KeyValue[] {
    return this.grades;
  }
}
