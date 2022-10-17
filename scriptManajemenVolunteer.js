let rowData = document.querySelector(".row-data")

async function getAPIPendaftaran (){
    // let response1 = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer")
    let response2 = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")

    // let dataPendaftar = response1.json()
    let dataFormDaftar = await response2.json()
    console.log(dataFormDaftar);

    // let hasilPendaftar = dataPendaftar.result
    // let hasilFormDaftar = dataFormDaftar.result

    dataFormDaftar.forEach((item, index) => {
        rowData.innerHTML +=
        `<tr>
            <th>${item.id}</th>
            <td>${item.nama}</td>
            <td>${item.link_IDCard}</td>
            <td>${item.link_cv}</td>
            <td>${item.link_cv}</td>
            <td>${item.link_cv}</td>
            <td>${item.link_cv}</td>
            <td>${item.link_cv}</td>
            <td>${item.opini}</td>
            <td>
                <button type="button" class="btn btn-warning">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>`
    });
}

getAPIPendaftaran()