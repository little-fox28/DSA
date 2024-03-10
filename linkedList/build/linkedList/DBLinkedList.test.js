"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBLinkedList_1 = require("./DBLinkedList");
var DBLinkedListTest = /** @class */ (function () {
    function DBLinkedListTest() {
    }
    DBLinkedListTest.test = function () {
        var dbLinkedList = new DBLinkedList_1.DBLinkedList();
        dbLinkedList.add("T");
        dbLinkedList.add("H");
        dbLinkedList.add("I");
        dbLinkedList.add("N");
        dbLinkedList.add("H");
        console.log(dbLinkedList.toString());
    };
    return DBLinkedListTest;
}());
DBLinkedListTest.test();
