document.addEventListener("DOMContentLoaded", function() {
    const tables = Array.from(document.querySelectorAll("table"));
    console.log(tables)
    tables.forEach((table, i) => {
        table.classList.add("js-collapse");
        let labels = [];
        table.querySelectorAll("thead th").forEach(function(header, i) {
            labels.push(header.innerText);
        });
        console.log(labels)
        table.querySelectorAll("table tbody tr td").forEach(function(cell, i) {
            cell.setAttribute("data-label", labels[cell.cellIndex]);
        });
    });
});