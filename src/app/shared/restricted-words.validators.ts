/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from '@angular/forms';

export function restrictedWord(words: any) {
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
