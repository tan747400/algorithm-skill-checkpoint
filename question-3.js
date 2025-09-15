/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:

This function findStudentById uses linear search algorithm concept by looping id that matchs
with input and return object including id and name. In the worst case, this fuction may look 
through every student in the list before finding match or returning null if no match is found. 
therefore, Big O notation is O(n) because the running time increases linearly with the size of the input list.

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:

This function findProductPrice uses the linear search algorithm concept by looping through the products array to find the product whose name matches 
the input. It returns the price of the matched product. In the worst case, this function may look through every product in the list before finding 
a match or returning -1 if no match is found. Therefore, the Big O notation is O(n) because the running time increases linearly with the size of the input list.

*/

/* 
Which function is more efficient and why?
Answer:

Both functions, findStudentById and findProductPrice, use a linear search. it means that time it takes to run depends on the number of items in the list. Both have a time complexity of O(n).
Because they use the same method, neither function is faster than the other. They both work in the same way. If we want a faster search, we would need to use a different data structure or 
method, for example, binary search.


*/
