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
//     "https://jsonplaceholder.typicode.com/posts"
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
//   main();
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

////////////////////////////
function getUser() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if (!response.ok) {
          reject(new Error("Something went wrong"));
          return;
        }

        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getUser()
  .then((data) => {
    console.log("Step 1:", data);
    return "Processing data...";
  })
  .then((message) => {
    console.log("Step 2:", message);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Operation complete.");
  });
