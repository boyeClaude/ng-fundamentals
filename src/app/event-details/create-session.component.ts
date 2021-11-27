/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'app-create-session',
  templateUrl: 'create-session.component.html',
})
export class CreateSessionComponent implements OnInit {
  @Output('saveNewSession') saveNewSession = new EventEmitter<any>();
  @Output('onCancel') onCancel = new EventEmitter<any>();

  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWord(['foo', 'bar']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  private restrictedWord(words: any) {

    return (control: FormControl): { [key: string]: any } => {
      if (!words) {
        return [];
      }

      const invalidWords = words
        .map((w: any) => (control.value.includes(w) ? w : null))
        .filter((w: any) => w != null);

      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords.join(',') }
        : {};
    };
  }

  onCreateSession(formValues: any) {
    const session: ISession = {
      id: 0,
      name: formValues?.name,
      presenter: formValues?.presenter,
      duration: +formValues?.duration,
      level: formValues.level,
      abstract: formValues?.abstract,
      voters: [],
    };

    this.saveNewSession.emit(session);
  }

  cancel() {
    this.onCancel.emit();
  }
}
