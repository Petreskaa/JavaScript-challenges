function findAndPrintAll() {
    const arr = [["Antonio", true, 5], ["Marija", false], ["Darko", true, 3]];
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    nameHeader.innerHTML = "Name";
    headerRow.appendChild(nameHeader);
    const statusHeader = document.createElement("th");
    statusHeader.innerHTML = "Voting Status";
    headerRow.appendChild(statusHeader);
    const gradeHeader = document.createElement("th");
    gradeHeader.innerHTML = "Grade";
    headerRow.appendChild(gradeHeader);
    table.appendChild(headerRow);
    
    arr.forEach((el) => {
      const [name, voted, grade] = el;
      const status = voted ? "voted" : "didn't vote";
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.innerHTML = name;
      row.appendChild(nameCell);
      const statusCell = document.createElement("td");
      statusCell.innerHTML = status;
      row.appendChild(statusCell);
      const gradeCell = document.createElement("td");
      gradeCell.innerHTML = grade || "";
      row.appendChild(gradeCell);
      table.appendChild(row);
    });
    
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    outputDiv.appendChild(table);
  }
  
  findAndPrintAll();