"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NODE = /** @class */ (function () {
    function NODE(prev, data, next) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    NODE.prototype.getData = function () {
        return this.data;
    };
    NODE.prototype.setData = function (data) {
        this.data = data;
    };
    NODE.prototype.getNext = function () {
        return this.next;
    };
    NODE.prototype.setNext = function (next) {
        this.next = next;
    };
    NODE.prototype.getPrev = function () {
        return this.prev;
    };
    NODE.prototype.setPrev = function (prev) {
        this.prev = prev;
    };
    return NODE;
}());
exports.default = NODE;
