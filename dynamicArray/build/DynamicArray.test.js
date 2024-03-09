"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DynamicArray_1 = require("./DynamicArray");
var DynamicArrayTesting = /** @class */ (function () {
    function DynamicArrayTesting() {
    }
    DynamicArrayTesting.test = function () {
        var dynamicArray = new DynamicArray_1.DynamicArray();
        // dynamicArray.add("T");
        // dynamicArray.add(2);
        // dynamicArray.add(3);
        // dynamicArray.add(4);
        // dynamicArray.add(false);
        // dynamicArray.add(6);
        // dynamicArray.add(["meo", 18]);
        // dynamicArray.add(8);
        // console.log("[Show:]", dynamicArray.toString());
        // console.log("[GetAt:]", dynamicArray.getAt(2));
        // console.log("[IndexOf:]", dynamicArray.indexOf(1));
        // dynamicArray.removeAt(6);
        // console.log("[Show:]", dynamicArray.toString());
        console.log("[Out of Bounds]:"); // In this case, dynamicArray add 10 elements if capacity is multiply 20 times return true else false
        for (var i = 0; i < 11; i++) {
            dynamicArray.add(i);
            console.log(dynamicArray.toString());
        }
        if (dynamicArray.volume() == 20) {
            console.log(dynamicArray.volume());
            console.log("Passed!");
        }
        else {
            console.log(dynamicArray.volume());
            console.log("Failed!");
        }
    };
    return DynamicArrayTesting;
}());
DynamicArrayTesting.test();
