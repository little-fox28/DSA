"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicArray = void 0;
var StringBuilder_1 = require("./StringBuilder");
var DynamicArray = /** @class */ (function () {
    function DynamicArray(capacity) {
        if (capacity === void 0) { capacity = 10; }
        this.size = 0;
        if (capacity < 0) {
            throw new Error("Capacity cannot be negative, got ".concat(capacity));
        }
        this.array = [];
        this.capacity = capacity;
        this.array = new Array(capacity);
    }
    DynamicArray.prototype.length = function () {
        return this.size;
    };
    DynamicArray.prototype.volume = function () {
        return this.capacity;
    };
    DynamicArray.prototype.isEmpty = function () {
        return this.length() === 0;
    };
    DynamicArray.prototype.getAt = function (index) {
        return this.array[index];
    };
    DynamicArray.prototype.setAt = function (index, value) {
        this.array[index] = value;
    };
    DynamicArray.prototype.cleanUp = function () {
        for (var i = 0; i < this.size; i++) {
            this.array[i] = null;
        }
        this.size = 0;
    };
    DynamicArray.prototype.add = function (value) {
        if (this.size === this.capacity) {
            this.capacity = this.capacity === 0 ? 1 : this.capacity *= 2;
            var newArray = new Array(this.capacity);
            for (var i = 0; i < this.size; i++) {
                newArray[i] = this.array[i];
            }
            this.array = newArray;
        }
        this.array[this.size] = value;
        this.size++;
    };
    DynamicArray.prototype.removeAt = function (removeIndex) {
        if (removeIndex < 0 || removeIndex >= this.size) {
            throw new Error("Index out of bounds");
        }
        var newArray = new Array(this.size - 1);
        for (var oldArrayIndex = 0, newArrayIndex = 0; oldArrayIndex < this.size; oldArrayIndex++) {
            if (oldArrayIndex === removeIndex) {
                continue;
            }
            newArray[newArrayIndex++] = this.array[oldArrayIndex];
        }
        this.array = newArray;
        this.size--;
    };
    DynamicArray.prototype.remove = function (object) {
        var removeIndex = this.indexOf(object);
        this.removeAt(removeIndex);
    };
    DynamicArray.prototype.indexOf = function (object) {
        for (var i = 0; i < this.size; i++) {
            if (object === null) {
                if (this.array[i] === null) {
                    return i;
                }
            }
            else {
                if (object === this.array[i]) {
                    return i;
                }
            }
        }
        return -1;
    };
    DynamicArray.prototype.contains = function (object) {
        return this.indexOf(object) !== -1;
    };
    DynamicArray.prototype.toString = function () {
        if (this.isEmpty()) {
            return "[]";
        }
        else {
            var sb = new StringBuilder_1.StringBuilder();
            sb.append("[");
            for (var i = 0; i < this.size - 1; i++) {
                sb.append(this.array[i]);
                sb.append(", ");
            }
            sb.append(this.array[this.size - 1]);
            sb.append("]");
            return sb.toString();
        }
    };
    DynamicArray.prototype[Symbol.iterator] = function () {
        var _this = this;
        var index = 0;
        return {
            next: function () {
                if (index < _this.size) {
                    return { value: _this.array[index++], done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            },
        };
    };
    return DynamicArray;
}());
exports.DynamicArray = DynamicArray;
