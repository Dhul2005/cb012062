// document.addEventListener('DOMContentLoaded', function() {
//     const tableContainer = document.getElementById('table-container');
//     const saveBtn = document.getElementById('save-btn');
//     let editableData;

//     function fetchExternalJSON() {
//         fetch('index.json') 
//             .then(response => response.json())
//             .then(data => {
//                 editableData = JSON.parse(JSON.stringify(data));
//                 createTable(editableData);
//             })
//             .catch(error => {
//                 console.error('Error fetching JSON:', error);
//             });
//     }


//     function createTable(data) {
//         const table = document.createElement('table');
//         const tbody = document.createElement('tbody');

//         Object.entries(data).forEach(([key, value]) => {
//             const tr = document.createElement('tr');
//             const tdKey = document.createElement('td');
//             const tdValue = document.createElement('td');
//             const inputField = document.createElement('input');

//             tdKey.textContent = key;
//             inputField.value = value;

//             inputField.addEventListener('input', function() {
//                 editableData[key] = this.value;
//             });

//             tdValue.appendChild(inputField);
//             tr.appendChild(tdKey);
//             tr.appendChild(tdValue);
//             tbody.appendChild(tr);
//         });

//         table.appendChild(tbody);
//         tableContainer.appendChild(table);
//     }

//      fetchExternalJSON();

//      saveBtn.addEventListener('click', function() {
//          const jsonDataString = JSON.stringify(editableData, null, 2); 
//          console.log(jsonDataString); 
        
        
//          fetch('/save-json', {
//              method: 'POST',
//              headers: {
//                  'Content-Type': 'application/json'
//              },
//              body: jsonDataString
//          })
//          .then(response => response.text())
//          .then(data => {
//              console.log(data);
//              alert(data);
//          })
//          .catch(error => {
//              console.error('Error:', error);
//              alert('Error occurred while saving JSON data');
//          });
//      });
//  });




// document.addEventListener('DOMContentLoaded', function() {
//     const tableContainer = document.getElementById('table-container');
//     const saveBtn = document.getElementById('save-btn');
//     let editableData;

   
//     function fetchExternalJSON() {
//         fetch('slleopard.json') 
//             .then(response => response.json())
//             .then(data => {
//                 editableData = JSON.parse(JSON.stringify(data));
//                 createTable(editableData);
//             })
//             .catch(error => {
//                 console.error('Error fetching JSON:', error);
//             });
//     }


//     function createTable(data) {
//         const table = document.createElement('table');
//         const tbody = document.createElement('tbody');

//         Object.entries(data).forEach(([key, value]) => {
//             const tr = document.createElement('tr');
//             const tdKey = document.createElement('td');
//             const tdValue = document.createElement('td');
//             const inputField = document.createElement('input');

//             tdKey.textContent = key;
//             inputField.value = value;

//             inputField.addEventListener('input', function() {
//                 editableData[key] = this.value;
//             });

//             tdValue.appendChild(inputField);
//             tr.appendChild(tdKey);
//             tr.appendChild(tdValue);
//             tbody.appendChild(tr);
//         });

//         table.appendChild(tbody);
//         tableContainer.appendChild(table);
//     }

//     fetchExternalJSON();

//     saveBtn.addEventListener('click', function() {
//         const jsonDataString = JSON.stringify(editableData, null, 2); 
//         console.log(jsonDataString); 
        
//         fetch('/save-json', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: jsonDataString
//         })
//         .then(response => response.text())
//         .then(data => {
//             console.log(data);
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Error occurred while saving JSON data');
//         });
//     });
// });




// document.addEventListener('DOMContentLoaded', function() {
//     const tableContainer = document.getElementById('table-container');
//     const saveBtn = document.getElementById('save-btn');
//     let editableData;

//     function fetchExternalJSON() {
//         fetch('animals.json') 
//             .then(response => response.json())
//             .then(data => {
//                 editableData = JSON.parse(JSON.stringify(data));
//                 createTable(editableData);
//             })
//             .catch(error => {
//                 console.error('Error fetching JSON:', error);
//             });
//     }


//     function createTable(data) {
//         const table = document.createElement('table');
//         const tbody = document.createElement('tbody');

//         Object.entries(data).forEach(([key, value]) => {
//             const tr = document.createElement('tr');
//             const tdKey = document.createElement('td');
//             const tdValue = document.createElement('td');
//             const inputField = document.createElement('input');

//             tdKey.textContent = key;
//             inputField.value = value;

            
//             inputField.addEventListener('input', function() {
//                 editableData[key] = this.value;
//             });

//             tdValue.appendChild(inputField);
//             tr.appendChild(tdKey);
//             tr.appendChild(tdValue);
//             tbody.appendChild(tr);
//         });

//         table.appendChild(tbody);
//         tableContainer.appendChild(table);
//     }

//     fetchExternalJSON();

//     saveBtn.addEventListener('click', function() {
//         const jsonDataString = JSON.stringify(editableData, null, 2); 
//         console.log(jsonDataString); 
        
//         fetch('/save-json', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: jsonDataString
//         })
//         .then(response => response.text())
//         .then(data => {
//             console.log(data);
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Error occurred while saving JSON data');
//         });
//     });
// });




// document.addEventListener('DOMContentLoaded', function() {
//     const tableContainer = document.getElementById('table-container');
//     const saveBtn = document.getElementById('save-btn');
//     let editableData;

//     function fetchExternalJSON() {
//         fetch('yala.json') 
//             .then(response => response.json())
//             .then(data => {
//                 editableData = JSON.parse(JSON.stringify(data));
//                 createTable(editableData);
//             })
//             .catch(error => {
//                 console.error('Error fetching JSON:', error);
//             });
//     }



//     function createTable(data) {
//         const table = document.createElement('table');
//         const tbody = document.createElement('tbody');

//         Object.entries(data).forEach(([key, value]) => {
//             const tr = document.createElement('tr');
//             const tdKey = document.createElement('td');
//             const tdValue = document.createElement('td');
//             const inputField = document.createElement('input');

//             tdKey.textContent = key;
//             inputField.value = value;

//             inputField.addEventListener('input', function() {
//                 editableData[key] = this.value;
//             });

//             tdValue.appendChild(inputField);
//             tr.appendChild(tdKey);
//             tr.appendChild(tdValue);
//             tbody.appendChild(tr);
//         });

//         table.appendChild(tbody);
//         tableContainer.appendChild(table);
//     }

//         fetchExternalJSON();

//     saveBtn.addEventListener('click', function() {
//         const jsonDataString = JSON.stringify(editableData, null, 2); 
//         console.log(jsonDataString); 
        
//         fetch('/save-json', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: jsonDataString
//         })
//         .then(response => response.text())
//         .then(data => {
//             console.log(data);
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Error occurred while saving JSON data');
//         });
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const tableContainer = document.getElementById('table-container');
//     const saveBtn = document.getElementById('save-btn');
//     let editableData;


//     function fetchExternalJSON() {
//         fetch('wilpattu.json') 
//             .then(response => response.json())
//             .then(data => {
//                 editableData = JSON.parse(JSON.stringify(data));
//                 createTable(editableData);
//             })
//             .catch(error => {
//                 console.error('Error fetching JSON:', error);
//             });
//     }


//     function createTable(data) {
//         const table = document.createElement('table');
//         const tbody = document.createElement('tbody');

//         Object.entries(data).forEach(([key, value]) => {
//             const tr = document.createElement('tr');
//             const tdKey = document.createElement('td');
//             const tdValue = document.createElement('td');
//             const inputField = document.createElement('input');

//             tdKey.textContent = key;
//             inputField.value = value;

//             inputField.addEventListener('input', function() {
//                 editableData[key] = this.value;
//             });

//             tdValue.appendChild(inputField);
//             tr.appendChild(tdKey);
//             tr.appendChild(tdValue);
//             tbody.appendChild(tr);
//         });

//         table.appendChild(tbody);
//         tableContainer.appendChild(table);
//     }

//     fetchExternalJSON();

//     saveBtn.addEventListener('click', function() {
       
//         const jsonDataString = JSON.stringify(editableData, null, 2); 
//         console.log(jsonDataString); 
        
//         fetch('/save-json', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: jsonDataString
//         })
//         .then(response => response.text())
//         .then(data => {
//             console.log(data);
//             alert(data);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Error occurred while saving JSON data');
//         });
//     });
// });

console.log("hello world");

let home =document.querySelector('.home');
let intro =document.querySelector('.intro');
let depart =document.querySelector('.depart');
let leo =document.querySelector('.sl');
let animal =document.querySelector('.animals');
let  yala=document.querySelector('.yala1');
let  wilpattu=document.querySelector('.wilpattu');
let txtarea=document.querySelector('#editedContent');
let savebtn=document.querySelector('#savebutton');

function getitem(name){
    let log=localStorage.getItem(name);
   let login= JSON.parse(log);
   return login;
  }
  
  let getindex=getitem('index');
  let getindex1=getitem('index1');
  let getindex2=getitem('index2');
  //let getintro=getitem('intro');
  //let getdepart=getitem('depart');
  let getsrileo=getitem('HL1');
  let getsrileo1=getitem('HB1');
  let getsrileo2=getitem('leop1');

  let getanimals=getitem('ani1');
  let getanimals1=getitem('ani2')
  let getanimals2=getitem('ani3')

  let getyala=getitem('yala');
  let getyala1=getitem('yala1');
  let getyala2=getitem('yala2');

  let getwilpattu= getitem('wil');
  let getwilpattu1=getitem('wil1');
  let getwilpattu2= getitem('wil2');

console.log(getindex);

savebtn.addEventListener('click',function(){
    console.log("saved");
    let newcontent = txtarea.value || getitem('index');
   
    //let niki=JSON.stringify(newcontent);
    //console.log(niki);
   localStorage.setItem('index',newcontent);
});

function savebutton(getitem,localkey){
  savebtn.addEventListener('click',function(){
    let newcontent = txtarea.value || getitem();
    localStorage.setItem(localkey,newcontent)
  })
};

home.addEventListener('click',function(){
    console.log("home is clicked");
    console.log(getindex);

    let newone=JSON.stringify(getindex);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('index'),'index')
});

 let closebtn=document.querySelector('.close-modal');

closebtn.addEventListener('click',function(){
    console.log("closing the editor page");
    window.location.href='dashboard.html';
});

leo.addEventListener('click',function(){
    console.log("home is clicked");
    console.log(getindex);

    let newone=JSON.stringify(getsrileo);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('HB1'),'HB1')
});

animal.addEventListener('click',function(){
    console.log("animal is clicked");
   // console.log(getindex);

    let newone=JSON.stringify(getanimals);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('HL1'),'HL1')
});

yala.addEventListener('click',function(){
    console.log("yala is clicked");
    //console.log(getindex);

    let newone=JSON.stringify(getyala);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('ani1'),'ani1')
});

wilpattu.addEventListener('click',function(){
    console.log("wilpattu is clicked");
    //console.log(getindex);

    let newone=JSON.stringify(getwilpattu);
    console.log(newone)

        txtarea.textContent=newone;
        savebutton(getitem('wil1'),'wil1');
});

