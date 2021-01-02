import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Notification from './Notification';
export interface INotificationRegistry extends IEntityRegistry<Notification> {
  check(): Notification[];
}
export declare class NotificationRegistry
  extends EntityRegistry<Notification>
  implements INotificationRegistry {
  constructor();
  check(): Notification[];
}
export declare const instance: NotificationRegistry;
export default NotificationRegistry;
