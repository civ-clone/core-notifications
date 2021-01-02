import Criterion from '@civ-clone/core-rule/Criterion';
export interface INotification {
  message(): string;
  name(): string;
  type(): string;
  when(): boolean;
}
export declare class Notification implements INotification {
  #private;
  constructor(message: string, name: string, type: string, when?: Criterion);
  message(): string;
  name(): string;
  type(): string;
  when(): boolean;
}
export default Notification;
