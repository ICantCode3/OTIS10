const tableBody = document.getElementById("table-body");

const data = [  ["Row 1 Column 1", "Row 1 Column 2", "Row 1 Column 3"],
  ["Row 2 Column 1", "Row 2 Column 2", "Row 2 Column 3"],
  ["Row 3 Column 1", "Row 3 Column 2", "Row 3 Column 3"],
];

for (const row of data) {
  const tr = document.createElement("tr");
  for (const cell of row) {
    const td = document.createElement("td");
    td.innerText = cell;
    tr.appendChild(td);
  }
  tableBody.appendChild(tr);
}
