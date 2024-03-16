"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBLinkedList = void 0;
var StringBuilder_1 = require("../utils/StringBuilder");
var Node_1 = require("./Node");
var DBLinkedList = /** @class */ (function () {
    function DBLinkedList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    DBLinkedList.prototype[Symbol.iterator] = function () {
        var currentNode = this.head;
        var hasNext = function () { return currentNode !== null; };
        var next = function () {
            if (currentNode === null) {
                throw new Error("Empty node list!");
            }
            var data = currentNode.getData();
            currentNode = currentNode.getNext();
            return { value: data, done: false };
        };
        return {
            next: next,
            // hasNext,
        };
    };
    DBLinkedList.prototype.clear = function () {
        var currentNode = this.head;
        while (currentNode !== null) {
            var nextNode = currentNode.getNext();
            currentNode.setPrev(null);
            currentNode.setData(null);
            currentNode.setNext(null);
            currentNode = nextNode;
        }
        this.size = 0;
        this.head = null;
        this.tail = null;
    };
    DBLinkedList.prototype.sizeList = function () {
        return this.size;
    };
    DBLinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    DBLinkedList.prototype.add = function (value) {
        this.addLast(value);
    };
    DBLinkedList.prototype.addFirst = function (value) {
        var _a;
        if (this.isEmpty()) {
            this.head = this.tail = new Node_1.default(null, value, null);
        }
        else {
            var newNode = new Node_1.default(null, value, this.head);
            (_a = this.head) === null || _a === void 0 ? void 0 : _a.setPrev(newNode);
            this.head = newNode;
        }
        this.size++;
    };
    DBLinkedList.prototype.addLast = function (value) {
        var _a;
        if (this.isEmpty()) {
            this.head = this.tail = new Node_1.default(null, value, null);
        }
        else {
            var newNode = new Node_1.default(this.tail, value, null);
            (_a = this.tail) === null || _a === void 0 ? void 0 : _a.setNext(newNode);
            this.tail = newNode;
        }
        this.size++;
    };
    DBLinkedList.prototype.peekFirst = function () {
        if (this.isEmpty()) {
            throw new Error(" Empty node list!");
        }
        else {
            return this.head.getData();
        }
    };
    DBLinkedList.prototype.peekLast = function () {
        if (this.isEmpty()) {
            throw new Error(" Empty node list!");
        }
        else {
            return this.tail.getData();
        }
    };
    DBLinkedList.prototype.removeFirst = function () {
        var _a;
        if (this.isEmpty()) {
            throw new Error(" Empty node list! ");
        }
        else {
            var data = this.head.getData();
            this.head = this.head.getNext();
            this.size--;
            if (this.isEmpty()) {
                this.tail = null;
            }
            else {
                (_a = this.head) === null || _a === void 0 ? void 0 : _a.setPrev(null);
            }
            return data;
        }
    };
    DBLinkedList.prototype.removeLast = function () {
        var _a;
        if (this.isEmpty()) {
            throw new Error(" Empty node list");
        }
        else {
            var data = this.tail.getData();
            this.tail = this.tail.getPrev();
            this.size--;
            if (this.isEmpty()) {
                this.head = null;
            }
            else {
                (_a = this.tail) === null || _a === void 0 ? void 0 : _a.setNext(null);
            }
            return data;
        }
    };
    DBLinkedList.prototype.remove = function (node) {
        var _a, _b;
        if ((node === null || node === void 0 ? void 0 : node.getPrev()) === null) {
            return this.removeFirst();
        }
        if ((node === null || node === void 0 ? void 0 : node.getNext()) === null) {
            return this.removeLast();
        }
        var data = node.getData();
        (_a = node === null || node === void 0 ? void 0 : node.getPrev()) === null || _a === void 0 ? void 0 : _a.setNext(node.getNext());
        (_b = node === null || node === void 0 ? void 0 : node.getNext()) === null || _b === void 0 ? void 0 : _b.setPrev(node.getPrev());
        node === null || node === void 0 ? void 0 : node.setData(null);
        node === null || node === void 0 ? void 0 : node.setPrev(null);
        node === null || node === void 0 ? void 0 : node.setNext(null);
        this.size--;
        return data;
    };
    DBLinkedList.prototype.removeObj = function (object) {
        var currentNode = this.head;
        if (object == null) {
            while (currentNode != null) {
                if (currentNode.getData() === null) {
                    this.remove(currentNode);
                    return true;
                }
                currentNode = currentNode.getNext();
            }
        }
        else {
            while (currentNode != null) {
                if (currentNode.getData() === object) {
                    this.remove(currentNode);
                    return true;
                }
                currentNode = currentNode.getNext();
            }
        }
        return false;
    };
    DBLinkedList.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds!");
        }
        var i;
        var currentNode;
        if (index < this.size / 2) {
            i = 0;
            currentNode = this.head;
            while (i !== index) {
                currentNode = currentNode.getNext();
                i++;
            }
        }
        else {
            i = this.size - 1;
            currentNode = this.tail;
            while (i !== index) {
                currentNode = currentNode.getPrev();
                i--;
            }
        }
        return this.remove(currentNode);
    };
    DBLinkedList.prototype.indexOf = function (object) {
        var index = 0;
        var currentNode = this.head;
        if (object === null) {
            while (currentNode !== null) {
                if (currentNode.getData() === null) {
                    return index;
                }
                currentNode = currentNode.getNext();
                index++;
            }
        }
        else {
            while (currentNode !== null) {
                if (currentNode.getData() !== null) {
                    if (currentNode !== null) {
                        if (currentNode.getData() === object) {
                            return index;
                        }
                    }
                }
                currentNode = currentNode.getNext();
                index++;
            }
        }
        return -1;
    };
    DBLinkedList.prototype.constrain = function (object) {
        return this.indexOf(object) !== -1;
    };
    DBLinkedList.prototype.toString = function () {
        if (this.isEmpty())
            return "[]";
        else {
            var sb = new StringBuilder_1.StringBuilder();
            var currentNode = this.head;
            sb.append("[");
            while (currentNode !== null) {
                sb.append(currentNode.getData());
                if (currentNode.getNext() !== null) {
                    sb.append(",");
                }
                currentNode = currentNode.getNext();
            }
            sb.append("]");
            return sb.toString();
        }
    };
    return DBLinkedList;
}());
exports.DBLinkedList = DBLinkedList;
