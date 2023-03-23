/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}
// Exercise 1
let p = document.querySelector("#error");
let ul = document.querySelector("#list");

// Exercise 2 and 3
let result = getList();
result
  .then((hobbits) => {
    console.log(hobbits);
    hobbits.forEach((item)=>{
      let li =document.createElement("li")
      li.textContent = item;
      ul.appendChild(li)
    })
  })
  .catch((err) => {
    p.textContent = err.message;
  });

// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object