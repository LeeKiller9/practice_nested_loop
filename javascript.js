let tableFor = document.getElementById('myTableFor')
let tableWhile = document.getElementById('myTableWhile')
let i
let j

function showTableFor() {
    for (i = 10; i >= 1; i--) {
        let row = tableFor.insertRow(0);
        for (j = 0; j <= 9; j++) {
            let cell = row.insertCell(j);
            let dataCell = i * (j + 1);
            cell.innerHTML = '' + dataCell;
        }
    }
    document.getElementById('nestFor').disabled = 'disabled';
}

function showTableWhile() {
    let i = 10;
    while (i >= 1) {
        let row = tableWhile.insertRow(0)
        let j = 0;
        while (j <= 9) {
            let cell = row.insertCell(j);
            let dataCell = i * (j + 1);
            cell.innerHTML = '' + dataCell;
            j++
        }
        i--
    }
    document.getElementById('nestWhile').disabled = 'disabled';
}