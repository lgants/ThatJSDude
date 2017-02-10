function reverseSLL(sll){
  if(!sll.head || !sll.head.next) return sll;

  var nodes = [], current = ssl.head;

  while(current){
    nodes.push(current);
    current = current.next;
  }

  var reversedSLL = new SinglyLinkedList();

  reversedSLL.head = nodes.pop();
  current = reversedSLL.head;

  var node = nodes.pop();

  while(node){
     node.next = null;
     current.next = node;

     current = current.next;
     node = nodes.pop();
  }
  return reversedLL;
}

//create the LL
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

//test it
reversesll(sll);
//{head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}
