package DLinkedList;

public class Node<T> {
    private T data;
    private Node<T> prev;
    private Node<T> next;

    public Node(Node<T> next, T data, Node<T> prev) {
        this.next = next;
        this.data = data;
        this.prev = prev;
    }

    ;

    public Node<T> getPrev() {
        return prev;
    }

    public void setPrev(Node<T> prev) {
        this.prev = prev;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Node<T> getNext() {
        return next;
    }

    public void setNext(Node<T> next) {
        this.next = next;
    }

    @Override
    public String toString() {
        return data.toString();
    }
}
