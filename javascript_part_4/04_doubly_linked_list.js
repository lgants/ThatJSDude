function DoublyLinkedList(){
  this.head = null;
}

DoublyLinkedList.prototype.push = function(val){
  // var node = {
  //   val: val,
  //   previous: null,
  //   next: null,
  // }
  // if (!this.head){
  //   this.head = node;
  // } else {
  //   current = this.head;
  //   while (current.next){
  //     current = current.next;
  //   }
  //   current.previous = current;
  //   current.next = node;
  //   node.previous = current;
  // }
  var head = this.head;
  var current = head;
  var previous = head;

  if (!head){
    this.head = { value: val, previous: null, next: null }
  } else {
    while (current && current.next){
      previous = current;
      current = current.next;
    }
    current.next = { value: val, previous: previous, next: null }
  }
}

//test at least once
var dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
