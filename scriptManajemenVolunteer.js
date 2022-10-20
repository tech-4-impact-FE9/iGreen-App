

let table = document.querySelector(".table-responsive")
let rowData = document.querySelector(".row-data")
let button = document.querySelector(".btn")


async function getAPIPendaftaran (){
    let response2 = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")

    let dataFormDaftar = await response2.json()
    console.log(dataFormDaftar);

    dataFormDaftar.forEach((item, index) => {
        rowData.innerHTML +=
        `<tr>
            <th>${item.id}</th>
            <td>${item.nama}</td>
            <td class="text-wrap">
                Link ID Card: ${item.link_IDCard}
                <br>
                Link Student Card: ${item.studentCard}
                <br>
                Link Cv: ${item.link_cv}
                <br>
                Link Health Letter: ${item.link_HealthLetter}
            </td>
            <td>${item.nomor_telepon}</td>
            <td>${item.email}</td>
            <td class="text-wrap">${item.reason}</td>
            <td><span class="badge bg-warning">Being Processed</span></td>
            <td>
                <input class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#modalEdit" value="Edit">
                <input class="btn btn-danger" type="button" onclick ="deletePendaftar()" value="Delete">

            </td>
        </tr>`
    });
}

function showFormEdit (id){
    
}
function clearData(){

}

getAPIPendaftaran()

button.addEventListener("button", (event) => {
    event.preventDefault()

    table.innerHTML=" "
    let query = button.value
    if(query == "Edit"){
        showFormEdit()
    }
})



