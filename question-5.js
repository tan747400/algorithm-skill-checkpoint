/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer:

The Big O notation for the function sortProductsByPrice which uses Bubble Sort is O(n²).

The function has two loops inside each other. The first loop runs many times, about n times. 
The second loop runs many times too, about n times. Because the loops are one inside the other, 
the work grows like n times n, which is O(n²). This means if the list gets bigger, the time to sort gets much bigger.


*/
