import NODE from "./Node";
import { iDBLinkedList } from "./iDBLinkedList";

export class DBLinkedList<T> implements iDBLinkedList<T> {
  private size: number;
  private head: NODE<T> | null;
  private tail: NODE<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public clear(): void {
    let currentNode: NODE<T> | null = this.head;
    while (currentNode !== null) {
      let nextNode = currentNode.getNext();
      currentNode.setPrev(null);
      currentNode.setData(null);
      currentNode.setNext(null);
      currentNode = nextNode;
    }

    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public sizeList(): number {
    return this.size;
  }
  public isEmpty(): boolean {
    return this.size === 0;
  }

  public add(value: T): void {
    return this.addLast(value);
  }

  public addFirst(value: T): void {
    if (this.isEmpty()) {
      this.head = this.tail = new NODE<T>(null, value, null);
    } else {
      let newNode = new NODE<T>(null, value, this.head);
      this.head?.setPrev(newNode);
      this.head = newNode;
    }
    this.size--;
  }

  public addLast(value: T): void {
    if (this.isEmpty()) {
      this.head = this.tail = new NODE<T>(null, value, null);
    } else {
      const newNode = new NODE<T>(this.tail, value, null);
      this.tail?.setNext(newNode);
      this.tail = newNode;
    }
    this.size++;
  }

  public peekFirst(): T | null {
    if (this.isEmpty()) {
      throw new Error(" Empty node list!");
    } else {
      return this.head!.getData();
    }
  }
  public peekLast(): T | null {
    if (this.isEmpty()) {
      throw new Error(" Empty node list!");
    } else {
      return this.tail!.getData();
    }
  }

  public removeFirst(): T | null {
    if (this.isEmpty()) {
      throw new Error(" Empty node list! ");
    } else {
      const data = this.head!.getData();
      this.head = this.head!.getNext();
      this.size--;
      if (this.isEmpty()) {
        this.tail = null;
      } else {
        this.head?.setPrev(null);
      }
      return data;
    }
  }

  public removeLast(): T | null {
    if (this.isEmpty()) {
      throw new Error(" Empty node list");
    } else {
      const data = this.tail!.getData();
      this.tail = this.tail!.getPrev();
      this.size--;
      if (this.isEmpty()) {
        this.head = null;
      } else {
        this.tail?.setNext(null);
      }
      return data;
    }
  }
}
