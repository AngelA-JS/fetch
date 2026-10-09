/////////fetch/////////////////////
// function getData(api){
//     return fetch(api)
//      .then(response=>response.json())
// }

// let data = [];
//  getData(url)
//    .then(result => {
//     data = result;
//    })

///////////async/await////////////////////

// async function getData(api) {
//     const response = await fetch(api);
//     const data = await response.json();

//     return data;
// }

// let data = [];
//  async function main() {
//     data = await getData(url);

//     console.log(data);
//  }

//  main();

///////////////////////////////////

// function getData(api){
//     return fetch(api)
//     .then(response => response.json())
// }

// let data = [];
// getData("https://jsonplaceholder.typicode.com/users")
//   .then(result => {
//     data = result;
//     console.log(data)
//   })

////////////////all///////
// let users = [];
// let posts = [];

// const usersApi = "https://jsonplaceholder.typicode.com/users";
// const postsApi = "https://jsonplaceholder.typicode.com/posts";
 
// function getData(api){
//     return fetch(api)
//       .then(response => response.json())
// }

// getData(usersApi)
//     .then(result => {
//         users = result;
//         console.log(result)
//     });

// getData(postsApi)
//     .then(result => {
//         posts = result;
//         console.log(result)
//     })

// function getData(api){
//     return fetch(api)
//     .then (response =>{
//         if(!response.ok){
//             throw new Error ("Something went wrong")
//         }
//         return response.json();
//     });
// }

// Promise.all([
//     getData(usersApi),
//     getData(postsApi)
// ])
// .then(result => {
//     users = result[0];
//     posts = result[1];
//     console.log(result);
// })
// .catch(error => {
//     console.log(error)
// })
//////////fetch\\\\\\\\\\\\

// function getData(url) {
//     return new Promise((resolve, reject) => {

//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Something went wrong");
//                 }

//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data);
//             })
//             .catch(error => {
//                 reject(error);
//             });

//     });
// }

// getData("https://jsonplaceholder.typicode.com/users")
//     .then(data => {
//         console.log("RESOLVE:", data);
//     })
//     .catch(error => {
//         console.log("REJECT:", error.message);
//     });
/////////////////////////////////////
// function getData(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Something went wrong");
//             }

//             return response.json();
//         })
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             throw error;
//         });
// }

// getData("https://jsonplaceholder.typicode.com/users")
//     .then(data => {
//         console.log("RESOLVE:", data);
//     })
//     .catch(error => {
//         console.log("REJECT:", error.message);
//     });
/////////////////////////////
// const apis = [
//     "https://jsonplaceholder.typicode.com/users",
// <<<<<<< HEAD
//     "https://jsonplaceholder.typicode.com/posts"
// =======
//     "https://jsonplaceholder.typicode.com/abc"
// >>>>>>> a5f9cbf (feat: implement custom promise with then and catch)
// ];

// async function getApis (apis) {
//     const requests = apis.map(api => {
//        return fetch(api)
//            .then(response => {
//             if(!response.ok){
//                 throw new Error("Something went wrong!")
//             }
//             return response.json();
//            });
//     });
//     return Promise.all(requests);
// }
 
//  async function main() {
//     const loading = document.getElementById("loading");
//     const usersList = document.getElementById("users");
//     const x = await getApis(apis);
//     const users = x[0];
//     users.forEach(user => {
//         const li = document.createElement("li");
//         li.textContent = user.name;
//         usersList.appendChild(li);
//     });
//     loading.style.display = "none";
//         console.log ("Resolve",x);
        
// }
// <<<<<<< HEAD
//   main();
// =======
//   main()
//   .catch(error => {
//         console.log("ERROR:", error.message);

//         document.getElementById("loading").textContent =
//             "Error: " + error.message;
//     });
// >>>>>>> a5f9cbf (feat: implement custom promise with then and catch)
////////////////////

//////////////////////////
// const apis = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts"
// ];


// function getData(apis, isAllSettled) {
//     const requests = apis.map((api) => {
//         return fetch(api)
//           .then((response) => {
//             if(!response.ok){
//              throw new Error("Something went wrong!")
//             }
//             return  response.json();
//           });
//     });
//     return isAllSettled ?  Promise.allSettled(requests) : Promise.all(requests);
// }
// getData(apis, false)
//    .then((result) => {
//       console.log(result)
//    })
//    .catch((error) => {
//         console.log("ERROR:", error.message);
//     });

//////////////////////

// const apis = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts"
// ];

// function getData(apis , isAllSettled){
//     const requests = apis.map((api) =>{
//         return fetch(api)
//         .then((response)=>{
//             if(!response.ok){
//                 throw new Error ("Something went wrong!");
//             }
//             return response.json();
//         });
//     });
//     return isAllSettled ? Promise.allSettled(requests) : Promise.all(requests);
// }

// getData(apis, false)
//  .then((result) => {
//     console.log(result)
//  })
//  .catch(error=>{
//     console.log("Error:", error.message);
//  });

//////////race\\\\\\\\\\\\\\\\\\\\\

// const apis = [
//     "https://jsonplaceholder.typicode.com/users",
//      "https://jsonplaceholder.typicode.com/posts"
// ];

// <<<<<<< HEAD
// ////////////////////////////
// function getUser() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((response) => {
//         if (!response.ok) {
//           reject(new Error("Something went wrong"));
//           return;
//         }

//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

// getUser()
//   .then((data) => {
//     console.log("Step 1:", data);
//     return "Processing data...";
//   })
//   .then((message) => {
//     console.log("Step 2:", message);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   })
//   .finally(() => {
//     console.log("Operation complete.");
//   });
// =======

////////////////////////////
// function getUser() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((response) => {
//         if (!response.ok) {
//           reject(new Error("Something went wrong"));
//           return;
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
// getUser()
//   .then((data) => {
//     console.log("Step 1:", data);
//     return "Processing data...";
//   })
//   .then((message) => {
//     console.log("Step 2:", message);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   })
//   .finally(() => {
//     console.log("Operation complete.");
//   });

/////////////////////////////


// function getStudent(){
//     return new Promise((resolve, reject)=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{
//             if (!response.ok) {
//            reject(new Error("Something went wrong"));
//            return;
//             }
//             return response.json();
//         })
//         .then((data)=>{
//             resolve(data);
//         })
//         .catch((error)=>{
//             reject(error)
//         });
//     });
// }

// getStudent()
// .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
//////////////////////
// function checkNumber() {
//     return new Promise((resolve, reject)=>{
//         const number = 10;
//         if(number > 5){
//             resolve("Number is big")
//         }else{
//             reject(new Error("Number is small"))
//         }
//     });
// }

// checkNumber()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
//////////////////////////
// function checkAge(){
//     return new Promise((resolve,reject)=>{
//         const age = 16;
//         if(age >= 18){
//              resolve("You can enter")
//          }else{
//              reject(new Error("You are too young"))
//          }
//     });
// }
// checkAge()
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error.message)
// })

/////////////costumPromise\\\\\\\\\\\\\\\\\

class CustomPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.handlers = [];

        const resolve = (value) => {
            if(this.state !== "pending") return;

            this.state = "fulfilled";
            this.value = value;
            this.handlers.forEach((handler) => handler());
        };

        const reject = (reason) => {
            if(this.state !== "pending") return;
            
            this.state = "rejected";
            this.value = reason;
            this.handlers.forEach((handler) => handler());
        };

        try{
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        return new CustomPromise((resolve, reject) => {
            const handle = () => {
                if (this.state === "pending") return;

                try {
                    if (this.state === "fulfilled"){
                        if(typeof onFulfilled !== "function"){
                            resolve(this.value);
                            return;
                        }
                        resolve(onFulfilled(this.value));
                    }else{
                        if(typeof onRejected !== "function"){
                            reject(this.value);
                            return;
                        }
                        resolve(onRejected(this.value));
                    }
                }catch(error){
                    reject(error);
                }
            };

            if (this.state === "pending") {
                this.handlers.push(handle);
            }else {
                handle();
            }
        });
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
}
/////////////////////
// function customRequest(url) {
//     return new CustomPromise((resolve, reject) => {
//         axios.get(url)
//             .then((response) => {
//                 resolve(response);
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//     });
// }

// const promise4 = customRequest(
//     "https://jsonplaceholder.typicode.com/users"
// );

// const promise5 = customRequest(
//     "https://jsonplaceholder.typicode.com/posts"
// );

// const promise6 = customRequest(
//     "https://jsonplaceholder.typicode.com/comments"
// );
// CustomPromise.all([promise4, promise5, promise6])
//     .then((responses) => {
//         console.log("Ia", responses[0].data);
//         console.log("IIa", responses[1].data);
//         console.log("IIIa", responses[2].data);
//     })
//     .catch((error) => {
//         console.log("Errora:", error);
//     });

// CustomPromise.race([promise4, promise5, promise6])
//     .then((response) => {
//         console.log("Winnera:", response.data);
//     })
//     .catch((error) => {
//         console.log("Errora:", error);
//     });

// CustomPromise.allSettled([promise4, promise5, promise6])
//     .then((results) => {
//         console.log("a",results);
//     });




// ////////////////////////
// const promise = new CustomPromise((resolve, reject) => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//        .then((response) => {
//         resolve(response.data);
//        })
//        .catch((error) => {
//         reject(error);
//        });
// });

// promise
//    .then((value) => {
//        console.log(value);
//    })
//    .catch((error) => {
//        console.log("agga",error);
//    })


/////////////////////
function customRequest(url) {
    return new CustomPromise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function customAll(promises) {
    return new CustomPromise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            promise.then((value) => {
                results[index] = value;
                completed++;

                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}
 const promise4 = customRequest(
    "https://jsonplaceholder.typicode.com/users"
);

const promise5 = customRequest(
    "https://jsonplaceholder.typicode.com/posts"
);

const promise6 = customRequest(
    "https://jsonplaceholder.typicode.com/comments"
);

customAll([promise4, promise5, promise6])
    .then((results) => {
        console.log("s",results);
    });

   
//////////////////////

const promise1 = axios.get(
    "https://jsonplaceholder.typicode.com/users"
);

const promise2 = axios.get(
    "https://jsonplaceholder.typicode.com/posts"
);

const promise3 = axios.get(
    "https://jsonplaceholder.typicode.com/comments"
);

Promise.all([promise1, promise2, promise3])
    .then((responses) => {
        console.log("I",responses[0].data); 
        console.log("II",responses[1].data);
        console.log("III",responses[2].data); 
    })
    .catch((error) => {
        console.log("Error:", error);
    });

Promise.race([promise1, promise2, promise3])
    .then((response) => {
        console.log("Winner:", response.data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    });


//    const promise2 = new Promise((resolve, reject) => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         resolve (response.data)
//       })
//       .catch((error) => {
//         reject(error);
//        });
//    });

//    promise2
//    .then((value) => {
//        console.log(value);
//    })
//    .catch((error) => {
//        console.log("ahaha",error);
//    })


// new CustomPromise((resolve, reject) =>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         resolve(data);
//     })
//     .catch((error) => {
//         reject(error);
//     });
// })
// .then((data) => {
//     console.log("Post:", data);
//     console.log("Title:", data.title);

//     return data.id * 2;
// })
// .then((value) => {
//     console.log("Doubled ID:", value);
// })
// .catch((error) => {
//     console.error("Error:", error.message);
// });

// new CustomPromise((resolve) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// })
//   .then((value) => {
//     console.log(value); 
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value);
//   });

// const promise = new CustomPromise((resolve, reject) => {
//   resolve("Hello!");
// });

// console.log(promise.state);
// console.log(promise.value);
// >>>>>>> a5f9cbf (feat: implement custom promise with then and catch)
