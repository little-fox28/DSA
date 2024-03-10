import { DBLinkedList } from "./DBLinkedList";
class DBLinkedListTest {
  public static test() {
    const dbLinkedList = new DBLinkedList<any>();

    dbLinkedList.add("T");
    dbLinkedList.add("H");
    dbLinkedList.add("I");
    dbLinkedList.add("N");
    dbLinkedList.add("H");

    console.log(dbLinkedList.toString());
  }
}

DBLinkedListTest.test();
