import { DBLinkedList } from "./DBLinkedList";
class DBLinkedListTest {
  public static test() {
    const dbLinkedList = new DBLinkedList<any>();

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
  }
}

DBLinkedListTest.test();
