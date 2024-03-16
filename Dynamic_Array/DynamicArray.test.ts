import { DynamicArray } from "./DynamicArray";

class DynamicArrayTesting {
  public static test() {
    const dynamicArray = new DynamicArray();
    dynamicArray.add("T");
    dynamicArray.add(2);
    dynamicArray.add(3);
    dynamicArray.add(4);
    dynamicArray.add(false);
    dynamicArray.add(6);
    dynamicArray.add(["meo", 18]);
    dynamicArray.add(8);

    console.log("[Show:]", dynamicArray.toString());

    console.log("[GetAt:]", dynamicArray.getAt(2));
    console.log("[IndexOf:]", dynamicArray.indexOf(1));

    dynamicArray.removeAt(6);
    console.log("[Show:]", dynamicArray.toString());

    console.log("[Out of Bounds]:");
    for (let i = 0; i < 11; i++) {
      dynamicArray.add(i);
      console.log(dynamicArray.toString());
    }
    if (dynamicArray.volume() == 20) {
      console.log(dynamicArray.volume());

      console.log("Passed!");
    } else {
      console.log(dynamicArray.volume());
      console.log("Failed!");
    }
  }
}

DynamicArrayTesting.test();
