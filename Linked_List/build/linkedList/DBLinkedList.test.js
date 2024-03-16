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
        console.log(dbLinkedList.toString()); // Passed!
        dbLinkedList.addFirst("First!"); // Passed!
        dbLinkedList.addLast("Last!"); // Passed!
        console.log(dbLinkedList.toString());
        console.log(dbLinkedList.constrain("I"));
        console.log(dbLinkedList.indexOf("N"));
        dbLinkedList.removeAt(2);
        console.log(dbLinkedList.toString()); // Passed!
    };
    return DBLinkedListTest;
}());
DBLinkedListTest.test();
