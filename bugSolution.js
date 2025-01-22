The solution involves using promise chaining to handle the asynchronous nature of the Firebase SDK. The `then()` method ensures that the code inside only executes after the data has been successfully retrieved.  Error handling is added using `catch()` to manage any potential errors during data retrieval.

```javascript
// bugSolution.js
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

async function getData(docId) {
  try {
    const docRef = doc(db, "yourCollection", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null; // or throw an error
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null; // or throw an error
  }
}

// Example usage
getData("yourDocId").then(data => {
  if (data) {
    // Process your data here
    console.log("Data Processed");
  }
});
```