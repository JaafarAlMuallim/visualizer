// explaination for adding element before another element in the linked list what happens to the pointer
// 1. create a new node
// 2. set the new node's next pointer to the node that is after the node you want to insert before
// 3. set the node you want to insert before's next pointer to the new node
// 4. set the new node's previous pointer to the node you want to insert before's previous pointer
// 5. set the node you want to insert before's previous pointer to the new node
// 6. if the node you want to insert before's previous pointer is null, set the head to the new node
// 7. else set the node you want to insert before's previous pointer's next pointer to the new node
// 8. set the length to the length + 1
// 9. return the list

const ADD_BEFORE = `1. create a new node\n
2. set the new node's next pointer to the node that is after the node you want to insert before\n
3. set the node you want to insert before's next pointer to the new node\n
4. set the new node's previous pointer to the node you want to insert before's previous pointer\n
5. set the node you want to insert before's previous pointer to the new node\n
6. if the node you want to insert before's previous pointer is null, set the head to the new node\n
7. else set the node you want to insert before's previous pointer's next pointer to the new node\n
8. set the length to the length + 1\n
9. return the list`;

const ADD_AFTER = `1. create a new node\n
2. set the new node's next pointer to the node that is after the node you want to insert after\n
3. set the node you want to insert after's next pointer to the new node\n
4. set the new node's previous pointer to the node you want to insert after\n
5. set the new node's previous pointer's next pointer to the new node\n
6. set the length to the length + 1\n
7. return the list`;

const ADD_HEAD = `
1. create a new node\n
2. set the new node's next pointer to the head\n
3. set the head's previous pointer to the new node\n
4. set the head to the new node\n
5. set the length to the length + 1\n
6. return the list`;

const ADD_TAIL = `1. create a new node\n
2. set the new node's previous pointer to the tail\n
3. set the tail's next pointer to the new node\n
4. set the tail to the new node\n
5. set the length to the length + 1\n
6. return the list`;

const DELETE_HEAD = `1. set the head to the head's next pointer\n
2. set the head's previous pointer to null`;

const DELETE_TAIL = `1. set the tail to the tail's previous pointer\n
2. set the tail's next pointer to null`;

const DELETE_ELEMENT = `1. set the node you want to delete's previous pointer's next pointer to the node you want to delete's next pointer\n
2. set the node you want to delete's next pointer's previous pointer to the node you want to delete's previous pointer`;
export {
  ADD_BEFORE,
  ADD_AFTER,
  ADD_HEAD,
  ADD_TAIL,
  DELETE_HEAD,
  DELETE_TAIL,
  DELETE_ELEMENT,
};
