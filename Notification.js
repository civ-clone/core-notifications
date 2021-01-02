"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _message, _name, _type, _when;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const Criterion_1 = require("@civ-clone/core-rule/Criterion");
class Notification {
    constructor(message, name, type, when = new Criterion_1.default()) {
        _message.set(this, void 0);
        _name.set(this, void 0);
        _type.set(this, void 0);
        _when.set(this, void 0);
        __classPrivateFieldSet(this, _message, message);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _type, type);
        __classPrivateFieldSet(this, _when, when);
    }
    message() {
        return __classPrivateFieldGet(this, _message);
    }
    name() {
        return __classPrivateFieldGet(this, _name);
    }
    type() {
        return __classPrivateFieldGet(this, _type);
    }
    when() {
        // TODO: Rule/Criterion?
        return __classPrivateFieldGet(this, _when).validate();
    }
}
exports.Notification = Notification;
_message = new WeakMap(), _name = new WeakMap(), _type = new WeakMap(), _when = new WeakMap();
exports.default = Notification;
//# sourceMappingURL=Notification.js.map