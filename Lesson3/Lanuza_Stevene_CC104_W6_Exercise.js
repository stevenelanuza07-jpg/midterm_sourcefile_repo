'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // TODO: Create the internal storage.
    this.items = [];
  }

  push(element) {
    // TODO: Add an element to the top.
    this.items.push(element);
  }

  pop() {
    // TODO: Remove and return the top element.
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    // TODO: Return the top without removing it.
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // TODO: Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // TODO: Return the number of elements.
    return this.items.length;
  }

  toString() {
    // TODO: Return all elements as text.
    return this.items.join(' ← ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// TODO: Push the three required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned to Staff');
actionHistory.push('Marked as Pending');

// TODO: Display peek, pop, remaining actions, and size.
console.log('All actions:', actionHistory.toString());
console.log('Last action (peek):', actionHistory.peek());
console.log('Undo:', actionHistory.pop());
console.log('Remaining:', actionHistory.toString());
console.log('Actions left:', actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // TODO: Create the internal storage.
    this.items = [];
  }

  enqueue(element) {
    // TODO: Add an element at the back.
    this.items.push(element);
  }

  dequeue() {
    // TODO: Remove and return the front element.
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    // TODO: Return the front without removing it.
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  isEmpty() {
    // TODO: Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // TODO: Return the number of elements.
    return this.items.length;
  }

  toString() {
    // TODO: Return all elements as text.
    return this.items.join(' → ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// TODO: Enqueue the four required requests.
waitingRequests.enqueue('WiFi Issue — Library');
waitingRequests.enqueue('Printer Jam — Admin');
waitingRequests.enqueue('Login Problem — Lab 2');
waitingRequests.enqueue('Projector Issue — Room 105');

// TODO: Display the front request.
console.log('Next in line:', waitingRequests.front());

// TODO: Dequeue two requests.
console.log('Processing:', waitingRequests.dequeue());
console.log('Processing:', waitingRequests.dequeue());

// TODO: Display the remaining queue and its size.
console.log('Remaining queue:', waitingRequests.toString());
console.log('Pending requests:', waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // TODO: Create the internal storage.
    this.items = [];
  }

  enqueue(request, priority) {
    // TODO: Create an item containing the request and priority.
    const element = { value: request, priority: priority };
    // TODO: Find the correct insertion position.
    // TODO: Preserve arrival order when priorities are equal.
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (element.priority < this.items[i].priority) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(element);
    }
  }

  dequeue() {
    // TODO: Remove and return the first item.
    if (this.isEmpty()) return null;
    return this.items.shift().value;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    // TODO: Return the number of items.
    return this.items.length;
  }

  print() {
    // TODO: Display every request and priority.
    return this.items.map(i => `${i.value} (P${i.priority})`).join(' → ');
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// TODO: Enqueue the four required requests.
urgentRequests.enqueue('Server Down', 1);
urgentRequests.enqueue('Cannot Submit Grades', 2);
urgentRequests.enqueue('Slow Internet', 3);
urgentRequests.enqueue('Email Not Working', 2);

// TODO: Print the initial priority order.
console.log('Priority list:', urgentRequests.print());

// TODO: Process the first request.
console.log('Processing highest priority:', urgentRequests.dequeue());

// TODO: Print the remaining requests.
console.log('Remaining:', urgentRequests.print());
console.log('Pending:', urgentRequests.size());

// ================================================================
// PART D: LINKED LIST
// ================================================================

class listNode {
  constructor(element) {
    // TODO: Store the element.
    this.element = element;
    // TODO: Set next to null.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // TODO: Set length to zero.
    this.length = 0;
    // TODO: Set head to null.
    this.head = null;
  }

  append(element) {
    // TODO: Add a node at the end.
    const newNode = new listNode(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  insert(position, element) {
    // TODO: Reject invalid positions.
    if (position < 0 || position > this.length) return false;
    // TODO: Insert at the beginning, middle, or end.
    const newNode = new listNode(element);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev;
      let index = 0;
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;
    }
    this.length++;
    return true;
  }

  removeAt(position) {
    // TODO: Reject invalid positions.
    if (position < 0 || position >= this.length) return null;
    // TODO: Remove the node at the requested position.
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let prev;
      let index = 0;
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.length--;
    return current.element;
  }

  indexOf(element) {
    // TODO: Traverse and return the matching position.
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }
    // TODO: Return -1 when the element is absent.
    return -1;
  }

  remove(element) {
    // TODO: Reuse indexOf and removeAt.
    const idx = this.indexOf(element);
    return this.removeAt(idx);
  }

  isEmpty() {
    // TODO: Return true when no nodes exist.
    return this.length === 0;
  }

  size() {
    // TODO: Return the number of nodes.
    return this.length;
  }

  toString() {
    // TODO: Traverse and return all elements as text.
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.element);
      current = current.next;
    }
    return result.join(' → ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// TODO: Append the three required requests.
completedRequests.append('Ticket #401');
completedRequests.append('Ticket #402');
completedRequests.append('Ticket #403');

// TODO: Insert Ticket #400 at position 0.
completedRequests.insert(0, 'Ticket #400');

// TODO: Insert Ticket #405 at the end.
completedRequests.insert(completedRequests.size(), 'Ticket #405');

// TODO: Display the complete list.
console.log('Full list:', completedRequests.toString());

// TODO: Search for Ticket #402.
console.log('Position of #402:', completedRequests.indexOf('Ticket #402'));

// TODO: Remove the item at position 1.
completedRequests.removeAt(1);

// TODO: Remove Ticket #403 by value.
completedRequests.remove('Ticket #403');

// TODO: Display the final list and size.
console.log('Final list:', completedRequests.toString());
console.log('Total completed:', completedRequests.size());
