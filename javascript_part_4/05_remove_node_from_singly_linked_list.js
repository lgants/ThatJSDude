




SinglyLinkedList.prototype.remove = function(val){
  var current = this.head;

  if (current.val == val){
    current.next = null;
  } else {
    var previous = current;

    while(current.next){
      if (current.val == val){
        previous.next = current.next;
        break;
      }
      previous = current;
      current = current.next;
    }

    if (current.value == val){
      previous.next = null;
    }
  }
}
