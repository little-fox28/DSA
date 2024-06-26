package Queue;

import java.util.Iterator;

public class QueueTest {
    public static void main(String[] args) {
//        int numberOfOperations = 10000000;
//
//        // Array based stack
//        QueueADT<Integer> circularArrayBasedQueue = new CircularArrayBaseQueue<>(numberOfOperations);
//
//        long startTime = System.nanoTime();
//        for (int i = 0; i < numberOfOperations; i++) {
//            circularArrayBasedQueue.enQueue(i);
//        }
//        for (int i = 0; i < numberOfOperations / 2; i++) {
//            circularArrayBasedQueue.deQueue();
//        }
//        for (int i = 0; i < numberOfOperations / 4; i++) {
//            circularArrayBasedQueue.enQueue(i);
//        }
//        for (int i = 0; i < 3 * numberOfOperations / 4; i++) {
//            circularArrayBasedQueue.deQueue();
//        }
//        long endTime = System.nanoTime();
//        long arrayTime = endTime - startTime;
//        System.out.println("Circular array based queue took: " + arrayTime + "\n");
//
//
//        // Linked list based stack
//        QueueADT<Integer> linkedListBasedQueue = new LinkedListBaseQueue<>();
//
//        startTime = System.nanoTime();
//        for (int i = 0; i < numberOfOperations; i++) {
//            linkedListBasedQueue.enQueue(i);
//        }
//        for (int i = 0; i < numberOfOperations; i++) {
//            linkedListBasedQueue.deQueue();
//        }
//        endTime = System.nanoTime();
//        long linkedListTime = endTime - startTime;
//        System.out.println("Linked list based stack took: " + linkedListTime + "\n");
//
//        System.out.println("The difference: " + (linkedListTime - arrayTime) + "\n");
//    }

        QueueADT<Integer> linkedListBasedQueue = new LinkedListBaseQueue<>();

        linkedListBasedQueue.enQueue(5);
        linkedListBasedQueue.enQueue(4);
        linkedListBasedQueue.enQueue(3);
        linkedListBasedQueue.enQueue(2);
        linkedListBasedQueue.enQueue(1);

        for (Integer integer : linkedListBasedQueue) {
            System.out.println(integer);
        }

    }
}