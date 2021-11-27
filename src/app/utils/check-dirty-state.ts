import { CreateEventComponent } from '../events/create/create-event.component';

export default function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'you have not saved the event, do you want to cancel?'
    );
  }
  return true;
}
