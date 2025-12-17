document.addEventListener("DOMContentLoaded", () =>{
    fetch("grades.json")
    .then(response=>response.json())
    .then(data=>{
        // Iterate through every semester
        data.grades.forEach((semester, index)=>{
            // If modalBody id is same as semester + index+1 + Body
            const modalBody = document.getElementById(`semester${index+1}Body`);
            // If empty end loop
            if(!modalBody) return;

            // Build a table of grades
            let tableHTML = '<table class="table table-striped">';
            tableHTML += '<thead><tr><th>Module</th><th>Credits</th><th>Grade</th></tr></thead><tbody>';

            semester.modules.forEach(sem => {
            tableHTML += `<tr>
                            <td>${sem.module}</td>
                            <td>${sem.credits}</td>
                            <td>${sem.grade}</td>
                            </tr>`;
            });
            tableHTML += '</tbody></table>';
            modalBody.innerHTML = tableHTML;
        })
        console.log(data);
    });
});