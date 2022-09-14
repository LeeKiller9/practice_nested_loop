let table = document.getElementById('myTable')
let i
let j

function showTable() {
    for (i = 10; i >= 1; i--) {
        let row = table.insertRow(0)
        for (j = 0; j <= 9; j++) {
            let cell = row.insertCell(j)
            let dataCell = i * (j + 1)
            cell.innerHTML = '' + dataCell;
        }
    }
}