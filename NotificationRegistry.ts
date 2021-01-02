import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Notification from './Notification';

export interface INotificationRegistry extends IEntityRegistry<Notification> {
  check(): Notification[];
}

export class NotificationRegistry
  extends EntityRegistry<Notification>
  implements INotificationRegistry {
  constructor() {
    super(Notification);
  }

  check(): Notification[] {
    const notifications = this.filter((notification: Notification): boolean =>
      notification.when()
    );

    this.unregister(...notifications);

    return notifications;
  }
}

export const instance: NotificationRegistry = new NotificationRegistry();

export default NotificationRegistry;
