# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase applications: accessing document snapshot data before it's fully loaded.  This can occur when asynchronous operations are not handled correctly, leading to unexpected errors and application crashes. The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

**Problem:**  The original code attempts to access data from a Firestore document snapshot before the promise from `getDoc()` has resolved.  This results in an undefined value being accessed, causing an error.

**Solution:** The corrected code uses `.then()` to handle the promise returned by `getDoc()`, ensuring that the data is available before attempting to access it. Error handling is also implemented to gracefully manage potential issues.