import Criterion from '@civ-clone/core-rule/Criterion';

export interface INotification {
  message(): string;
  name(): string;
  type(): string;
  when(): boolean;
}

export class Notification implements INotification {
  #message: string;
  #name: string;
  #type: string;
  #when: Criterion;

  constructor(
    message: string,
    name: string,
    type: string,
    when: Criterion = new Criterion()
  ) {
    this.#message = message;
    this.#name = name;
    this.#type = type;
    this.#when = when;
  }

  message(): string {
    return this.#message;
  }

  name(): string {
    return this.#name;
  }

  type(): string {
    return this.#type;
  }

  when(): boolean {
    // TODO: Rule/Criterion?
    return this.#when.validate();
  }
}

export default Notification;
