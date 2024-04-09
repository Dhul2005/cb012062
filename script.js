// fetch('index.json')
//   .then(response => response.json())
//   .then(data => {
//     document.querySelector('.msec').textContent = data.textContent;
//   })

//   console.log();

function store(link, key) {
    // Check if the data is already stored in localStorage
    if (!localStorage.getItem(key)) {
        return fetch(link)
            .then(function (response) {
                if (!response) {
                    return console.log("error");
                }
                return response.json();
            }).then(function (info) {
                const jsstr = JSON.stringify(info);
                localStorage.setItem(key, jsstr);
            }).catch(function (error) {
                console.log(`error is ${error}`);
            });
    } else {
        // If data is already in localStorage, resolve with it
        return Promise.resolve();
    }
}

// Call store function for each data you want to store, but add a check to prevent overwriting existing data
store('index.json', 'index').then(function () {
    let getindex = localStorage.getItem('index');
    let new_get_index = JSON.parse(getindex);
    console.log(new_get_index);

    const index10 = document.querySelector('#index1');
    let content = `<h2>${new_get_index.title}</h2>
                    <img src="${new_get_index.image}" alt="${new_get_index.imageAlt}">
                    <p>${new_get_index.para1}</p><br>
                    <p>${new_get_index.para2}</p><br>
                    <p>${new_get_index.para3}</p><br>
                    <h3 id="ltopic">${new_get_index.heading3}</h3>
                    <ul>
                        <li>${new_get_index.p1}</li>
                        <li>${new_get_index.p2}</li>
                        <li>${new_get_index.p3}</li>
                        <li>${new_get_index.p4}</li>
                        <li>${new_get_index.p5}</li>
                    </ul>`;

    index10.innerHTML = content;
});
// Repeat this for other store calls


store('index.json', 'index').then(function (storedData) {
    let getindex = localStorage.getItem('index');
    let new_get_index = JSON.parse(getindex);
    console.log(new_get_index);

    const index20 = document.querySelector('#index2');
    let content1 = `<h2>${new_get_index.title2}</h2>
                    <img src="${new_get_index.image1}">
                    <p>${new_get_index.para4}</p><br>
                    <p>${new_get_index.para5}</p><br>
                    <p>${new_get_index.para6}</p><br>
                    <h3 id="ltopic">${new_get_index.title3}</h3>
                    <ul>
                        <li>${new_get_index.li1}</li>
                        <li>${new_get_index.li2}</li>
                        <li>${new_get_index.li3}</li>
                        <li>${new_get_index.li4}</li>
                        <li>${new_get_index.li5}</li>
                    </ul>`;

    index20.innerHTML = content1;
});

store('index.json', 'index').then(function (storedData) {
    let getindex = localStorage.getItem('index');
    let new_get_index = JSON.parse(getindex);
    console.log(new_get_index);

    const index30 = document.querySelector('#index3');
    let content2 = `<h2>${new_get_index.title4}</h2>
                    <img src="${new_get_index.image2}">
                    <p>${new_get_index.para7}</p><br>
                    <p>${new_get_index.para8}</p><br>
                    <p>${new_get_index.para9}</p><br>
                    <h3 id="ltopic">${new_get_index.title5}</h3>
                    <ul>
                        <li>${new_get_index.li}</li>
                        <li>${new_get_index.li6}</li>
                        <li>${new_get_index.li7}</li>
                        <li>${new_get_index.li8}</li>
                        <li>${new_get_index.li9}</li>
                    </ul>`;

    index30.innerHTML = content2;
});



store('slleopard.json', 'leop1').then(function (storedData) {
    let getleop1 = localStorage.getItem('leop1');
    let new_get_leop1 = JSON.parse(getleop1);
    console.log(new_get_leop1);

    const leop1 = document.querySelector('#leop');
    let content3 = `<h3>${new_get_leop1.title1}</h3>
                    <p>${new_get_leop1.para1}</p><br>
                    <h3>${new_get_leop1.title2}</h3>
                    <p>${new_get_leop1.para2}</p><br>
                    <h3>${new_get_leop1.title3}</h3>
                    <p>${new_get_leop1.para3}</p>`;
              
    leop1.innerHTML = content3;
});

store('slleopard.json', 'HB1').then(function (storedData) {
    let getHB1 = localStorage.getItem('HB1');
    let new_get_HB1 = JSON.parse(getHB1);
    console.log(new_get_HB1);

    const HB1 = document.querySelector('#HB');
    let content4 = `<h2>${new_get_HB1.title4}</h2>
                    <img src="${new_get_HB1.image}">
                    <p>${new_get_HB1.para4}</p><br>
                    <p>${new_get_HB1.para5}</p><br>
                    <p>${new_get_HB1.para6}</p><br>`;
              
    HB1.innerHTML = content4;
});

store('slleopard.json', 'HL1').then(function (storedData) {
    let getHL1 = localStorage.getItem('HL1');
    let new_get_HL1 = JSON.parse(getHL1);
    console.log(new_get_HL1);

    const HL1 = document.querySelector('#HL');
    let content5 = `<h2>${new_get_HL1.title5}</h2>
                    <img src="${new_get_HL1.image1}">
                    <p>${new_get_HL1.para7}</p><br>
                    <p>${new_get_HL1.para8}</p><br>
                    <p>${new_get_HL1.para9}</p><br>
                    <p>${new_get_HL1.para10}</p><br>`;
              
    HL1.innerHTML = content5;
});


store('animals.json', 'ani1').then(function (storedData) {
    let getani1 = localStorage.getItem('ani1');
    let new_get_ani1 = JSON.parse(getani1);
    console.log(new_get_ani1);

    const ani1 = document.querySelector('#cfb');
    let content6 = `<h2>${new_get_ani1.title1}</h2>
                    <img src="${new_get_ani1.imag1}">
                    <p>${new_get_ani1.pa1}</p><br>
                    <p>${new_get_ani1.pa2}</p><br>
                    <p>${new_get_ani1.pa3}</p><br>`;
              
    ani1.innerHTML = content6;
});

store('animals.json', 'ani2').then(function (storedData) {
    let getani2 = localStorage.getItem('ani2');
    let new_get_ani2 = JSON.parse(getani2);
    console.log(new_get_ani2);

    const ani2 = document.querySelector('#rs');
    let content7 = `<h2>${new_get_ani2.title2}</h2>
                    <img src="${new_get_ani2.imag2}">
                    <p>${new_get_ani2.pa4}</p><br>
                    <p>${new_get_ani2.pa5}</p><br>
                    <p>${new_get_ani2.pa6}</p><br>
                    <p>${new_get_ani2.pa7}</p><br>
                    <p>${new_get_ani2.pa8}</p><br>`;
              
    ani2.innerHTML = content7;
});

store('animals.json', 'ani3').then(function (storedData) {
    let getani3 = localStorage.getItem('ani3');
    let new_get_ani3 = JSON.parse(getani3);
    console.log(new_get_ani3);

    const ani2 = document.querySelector('#sb');
    let content7 = `<h2>${new_get_ani3.title3}</h2>
                    <img src="${new_get_ani3.imag3}">
                    <p>${new_get_ani3.pa11}</p><br>
                    <p>${new_get_ani3.pa22}</p><br>
                    <p>${new_get_ani3.pa33}</p><br>`;
              
    ani2.innerHTML = content7;
});

store('yala.json', 'yala').then(function (storedData) {
    let getyala = localStorage.getItem('yala');
    let new_get_yala = JSON.parse(getyala);
    console.log(new_get_yala);

    const yala = document.querySelector('#history');
    let content8 = `<h2>${new_get_yala.title1}</h2>
                    <img src="${new_get_yala.image1}">
                    <p>${new_get_yala.par1}</p><br>
                    <p>${new_get_yala.par2}</p><br>
                    <p>${new_get_yala.par3}</p><br>`;
              
    yala.innerHTML = content8;
});

store('yala.json', 'yala1').then(function (storedData) {
    let getyala1 = localStorage.getItem('yala1');
    let new_get_yala1 = JSON.parse(getyala1);
    console.log(new_get_yala1);

    const yala1 = document.querySelector('#wildlife');
    let content9 = `<h2>${new_get_yala1.title2}</h2>
                    <img src="${new_get_yala1.image2}">
                    <p>${new_get_yala1.par4}</p><br>
                    <p>${new_get_yala1.par5}</p><br>`;
              
    yala1.innerHTML = content9;
});

store('yala.json', 'yala2').then(function (storedData) {
    let getyala2 = localStorage.getItem('yala2');
    let new_get_yala2 = JSON.parse(getyala2);
    console.log(new_get_yala2);

    const yala2 = document.querySelector('#safari');
    let content10 = `<h2>${new_get_yala2.title3}</h2>
                    <img src="${new_get_yala2.image3}">
                    <p>${new_get_yala2.par6}</p><br>
                    <p>${new_get_yala2.par7}</p><br>
                    <p>${new_get_yala2.par8}</p><br>
                    <p>${new_get_yala2.par9}</p><br>`;
              
    yala2.innerHTML = content10;
});


store('wilpattu.json', 'wil').then(function (storedData) {
    let getwil = localStorage.getItem('wil');
    let new_get_wil = JSON.parse(getwil);
    console.log(new_get_wil);

    const wil = document.querySelector('#his');
    let content11 = `<h2>${new_get_wil.title1}</h2>
                    <img src="${new_get_wil.img1}">
                    <p>${new_get_wil.para1}</p>
                    <p>${new_get_wil.para2}</p><br>
                    <p>${new_get_wil.para3}</p><br>`;
              
    wil.innerHTML = content11;
});

store('wilpattu.json', 'wil1').then(function (storedData) {
    let getwil1 = localStorage.getItem('wil1');
    let new_get_wil1 = JSON.parse(getwil1);
    console.log(new_get_wil1);

    const wil1 = document.querySelector('#wild');
    let content12 = `<h2>${new_get_wil1.title2}</h2>
                    <img src="${new_get_wil1.img2}">
                    <p>${new_get_wil1.para4}</p><br>
                    <p>${new_get_wil1.para5}</p><br>
                    <p>${new_get_wil1.para6}</p><br>
                    <p>${new_get_wil1.para7}</p><br>`;
              
    wil1.innerHTML = content12;
});

store('wilpattu.json', 'wil2').then(function (storedData) {
    let getwil2 = localStorage.getItem('wil2');
    let new_get_wil2 = JSON.parse(getwil2);
    console.log(new_get_wil2);

    const wil2 = document.querySelector('#saf');
    let content13 = `<h2>${new_get_wil2.title3}</h2>
                    <img src="${new_get_wil2.img3}">
                    <p>${new_get_wil2.para8}</p><br>
                    <p>${new_get_wil2.para9}</p><br>
                    <p>${new_get_wil2.para0}</p><br>`;
              
    wil2.innerHTML = content13;
});





  




    
  











// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     console.log("Username: " + username + "Password: " + password);
// });








          


