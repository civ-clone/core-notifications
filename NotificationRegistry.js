"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.NotificationRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const Notification_1 = require("./Notification");
class NotificationRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(Notification_1.default);
    }
    check() {
        const notifications = this.filter((notification) => notification.when());
        this.unregister(...notifications);
        return notifications;
    }
}
exports.NotificationRegistry = NotificationRegistry;
exports.instance = new NotificationRegistry();
exports.default = NotificationRegistry;
//# sourceMappingURL=NotificationRegistry.js.map