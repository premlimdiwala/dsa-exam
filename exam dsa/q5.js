class Queue {
    constructor() {
      this.items = []; 
    }  
   
    enqueue(element) {
      this.items.push(element);  
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
      }
      const removedElement = this.items.shift();  
      return removedElement;
    }
  
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
      }
      return this.items[0];  
    }
  
    isEmpty() {
      return this.items.length === 0;  
    }
  
    size() {
      return this.items.length;  
    }
  
    
  }
  
 
  const queue = new Queue();
  

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  
  queue.dequeue();  
  
  
  
  queue.dequeue();  
  
  console.log("Front element is:", queue.front());  
  
  console.log("Is the queue empty?", queue.isEmpty());  
  
  console.log("Queue size:", queue.size()); 