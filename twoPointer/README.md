      Two Pointer Technique/ pattern— `twoPointersSorted()`
//====Overview
This function implements the **Two Pointer Technique** to find a pair of numbers in a **sorted array** that add up to a given target sum.

It efficiently reduces the time complexity from **O(n²)** (brute force) to **O(n)
//============Complexity

Time Complexity: O(n) — each element is visited at most once.

Space Complexity: O(1) — no extra space used.

//========Use Cases

Two Sum in sorted arrays

Pair finding problems (e.g., sum, difference, product conditions)

Works as a base for sliding window and interval problems


//=========How It Works

Initialize Pointers

left starts at the beginning of the array.

right starts at the end.

Evaluate Sum

If arr[left] + arr[right] equals the target, return the indices (or values).

If the sum is less than target → move left++ to increase sum.

If the sum is greater than target → move right-- to decrease sum.

Terminate

Loop ends when pointers cross (left >= right), meaning no valid pair exists.