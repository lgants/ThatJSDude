findKthFromEnd(sll, k){
  var node = sll.head, i = 1, kthNode;

  if (k<=0) return;

  while(node){
    if (i == k){
      kthNode = sll.head;
    } elseif (i-k > 0){
      kthNode = kthNode.next;
    }
    i++;
    node = node.next;
  }
  return kthNode;
}
