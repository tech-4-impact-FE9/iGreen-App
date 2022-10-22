
let rowData = document.querySelector(".row-data")
let inputSearch= document.querySelector("#search-input")
let formSubmit = document.querySelector("#search-bar")

let status1 = document.querySelector("#flexRadioDefault1").value
let status2 = document.querySelector("#flexRadioDefault2").value
let formModal = document.querySelector(".modal-body")


async function getAPIPendaftaran (){
    let response = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")
    let dataFormDaftar = await response.json()
    console.log(dataFormDaftar)
    dataFormDaftar.forEach((item) => {
        rowData.innerHTML +=
        `
        <tr>
            <th>${item.id}</th>
            <td>${item.nama}</td>
            <td class="text-wrap">${item.name_event}</td>
            <td>${item.periode_event}</td>
            <td class="text-wrap">
                Link ID Card: ${item.link_IDCard}
                <br>
                Link Student Card: ${item.link_studentCard}
                <br>
                Link Cv: ${item.link_cv}
                <br>
                Link Health Letter: ${item.link_HealthLetter}
            </td>
            <td>${item.nomor_telepon}</td>
            <td>${item.email}</td>
            <td class="text-wrap">${item.reason}</td>
            <td>${item.status}</td>
            <td>
                <input class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#modalEdit" value="Edit" onclick= "editPendaftar(${item.status}, ${item.id})">
                <input class="btn btn-danger" type="button" onclick ="deletePendaftar(${item.id})" value="Delete">

            </td>
        </tr>`
    });

}

async function search(){
    let response = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")
    let dataFormDaftar = await response.json()

    let searchString = inputSearch.value.toLowerCase()
    let filtered = dataFormDaftar.filter(function(item) {
        return(
            item.id.includes(searchString) || item.name_event.toLowerCase().includes(searchString)
        )
    })
    console.log(filtered)
    filtered.forEach((item) => {
         rowData.innerHTML +=
        `
        <tr>
            <th>${item.id}</th>
            <td>${item.nama}</td>
            <td class="text-wrap">${item.name_event}</td>
            <td>${item.periode_event}</td>
            <td class="text-wrap">
                Link ID Card: ${item.link_IDCard}
                <br>
                Link Student Card: ${item.link_studentCard}
                <br>
                Link Cv: ${item.link_cv}
                <br>
                Link Health Letter: ${item.link_HealthLetter}
            </td>
            <td>${item.nomor_telepon}</td>
            <td>${item.email}</td>
            <td class="text-wrap">${item.reason}</td>
            <td id="show-status">
                ${item.status}
            </td>
            <td>
                <input class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#modalEdit" value="Edit">
                <input class="btn btn-danger" type="button" onclick ="deletePendaftar(${item.id})" value="Delete">

            </td>
        </tr>`
    })
}

function deletePendaftar(id){
    fetch(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`, {
        method: 'DELETE'
    }).then((response) => {
        response.json()
    }).catch(error => {
        console.log(error);
    })

    console.log(id);
}

// function editPendaftar (id){


//     fetch(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "status": 
//         })
//     })
// }

function tampilan (cari = null){
    if (cari != null) {
        formSubmit.addEventListener("submit",(event) =>{
            event.preventDefault()
            rowData.innerHTML=" "
            search()
        })
        
    }
    getAPIPendaftaran()
    console.log(inputSearch);
} 
tampilan(inputSearch)

// /apiPenyimpananDataPendaftaran/:id
// /apiPenyimpananDataPendaftaran/:id