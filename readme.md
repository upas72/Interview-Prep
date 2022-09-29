# What is a good code?
- Readable
- Scalable
The scalability of algorithm is determined by how much the application slows down when input grows bigger and bigger.

# Big O complexities
- Horrible: O(n!), O(2^n), O(n^2)
- Bad: O(nlogn)
- Fair: O(n)
- Good: O(logn)
- Execellent: O(1)
Big O notation is a graphical representation between the number of elements and the operations taking place. 

O(1) = Constant: no loops
O(log N) = Logarithmic: usually searching algorithms have log n if they are sorted (Binary Search)
O(n) = Linear: for loops, while loops through n items
O(n log(n)) = Log Linear: usually sorting operations
O(n^2) = Quadratic: every element in a collection needs to be compared to ever other element. Two nested loops
O(2^n) = Exponential: recursive algorithms that solves a problem of size N
O(n!) = Factorial: adding a loop for every element

> Iterating through half a collection is still O(n)
> Two separate collections: O(a * b)

### What Can Cause Time in a Function?
- Operations (+,-,*,/)
- Comparisons (<,>,==)
- Looping (for,while)
- Outside Function call (function())

*Rule Book*
> Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Drop Non-dominant terms
Rule 4: + for steps in order,* for nested steps
Different in puts should have different variables O(a+b)
A and B arrays nested would be O(a*b)

### What Causes Space Complexity?
- Variables
- Data Structures
- Function Call
- Allocations

### Important Data Structures: -
- Arrays
- Stacks
- Queues
- Linked Lists
- Trees
- Graphs
- Hash Tables
- Tries

### Important Algorithms: -
- Sorting
- Dynamic Programming
- BFS + DFS
- Recursion

### Operations for Data Structure: -
- Insertion
- Deletion
- Traversal
- Access
- Searching
- Sorting



**Upamanyu Sarangi**