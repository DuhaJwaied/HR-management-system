
`use strict`;

let divStorage = document.getElementById("tableStorge");
let table = document.createElement("table");


function createTable() {
        divStorage.appendChild(table);
};



function tableHed() {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        let th = document.createElement("th");
        th.textContent = "Department";
        tr.appendChild(th);
        th = document.createElement("th");
        th.textContent = " Numuber of employess";
        tr.appendChild(th);
        th = document.createElement("th");
        th.textContent = "Total salary";
        tr.appendChild(th);
        th = document.createElement("th");
        th.textContent = "Average salary of the department";
        tr.appendChild(th);
};

function tableBody() {


        ////// Administration
        let tr = document.createElement("tr");
        table.appendChild(tr);
        let td = document.createElement("td");
        td.textContent = "Administration";
        tr.appendChild(td);


        let firstTd = document.createElement("td");
        firstTd.textContent = numberOfEmployee("Administration");
        tr.appendChild(firstTd);


        let scoundTd = document.createElement("td");
        scoundTd.textContent = totalSalary("Administration");
        tr.appendChild(scoundTd);


        let therdTd = document.createElement("td");
        therdTd.textContent = totalSalary("Administration") / numberOfEmployee("Administration");
        tr.appendChild(therdTd);


        ////////////////Finance

        let tr1 = document.createElement("tr");

        table.appendChild(tr1);
        td = document.createElement("td");
        td.textContent = "Finance";
        tr1.appendChild(td);
        td1 = document.createElement("td");
        td1.textContent = numberOfEmployee("Finance");
        tr1.appendChild(td1);
        td2 = document.createElement("td");
        td2.textContent = totalSalary("Finance");
        tr1.appendChild(td2);
        td3 = document.createElement("td");
        td3.textContent = totalSalary("Finance") / numberOfEmployee("Finance");
        tr1.appendChild(td3);

        //////////////Marketing
        let tr2 = document.createElement("tr");
        table.appendChild(tr2);
        td = document.createElement("td");
        td.textContent = "Marketing";
        tr2.appendChild(td);
        td1 = document.createElement("td");
        td1.textContent = numberOfEmployee("Marketing");
        tr2.appendChild(td1);
        td2 = document.createElement("td");
        td2.textContent = totalSalary("Marketing");
        tr2.appendChild(td2);
        td3 = document.createElement("td");
        td3.textContent = totalSalary("Marketing") / numberOfEmployee("Marketing");
        tr2.appendChild(td3);


        //////////////////////Development
        let tr3 = document.createElement("tr");
        table.appendChild(tr3);
        td = document.createElement("td");
        td.textContent = "Development";
        tr3.appendChild(td);
        td1 = document.createElement("td");
        td1.textContent = numberOfEmployee("Development");
        tr3.appendChild(td1);
        td2 = document.createElement("td");
        td2.textContent = totalSalary("Development");
        tr3.appendChild(td2);
        td3 = document.createElement("td");
        td3.textContent = totalSalary("Development") / numberOfEmployee("Development");
        tr3.appendChild(td3);

}

function createTableFooter() {


        let footer = document.createElement("footer");
        footer.setAttribute("id", "tableFooter");
        table.appendChild(footer);
        divID.appendChild(footer);
        let tr = document.createElement("tr");

        table.appendChild(tr);
        let th = document.createElement("th");
        th.textContent = "Total";
        tr.appendChild(th);
//////////////// totalemployee
        th = document.createElement("th");
        th.textContent = numberDepartment();
        tr.appendChild(th);
//////////////// totalsalary
        th = document.createElement("th");
        th.textContent = salaryDepartment();
        tr.appendChild(th);
/////////////// average
        th = document.createElement("th");
        th.textContent = salaryDepartment() / numberDepartment();
        tr.appendChild(th);
}


function numberOfEmployee(department) {
        let numberOfEmployee = 0;
        let employee = localStorage.getItem("employee");
        let parseEmployee = JSON.parse(employee);




        for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == "Administration") {
                        numberOfEmployee = numberOfEmployee + 1;

                }

        }


        for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == "Finance") {
                        numberOfEmployee = numberOfEmployee + 1;

                }

        }



        for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == "Marketing") {
                        numberOfEmployee = numberOfEmployee + 1;

                }

        }


        for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == "Development") {
                        numberOfEmployee = numberOfEmployee + 1;

                }

        }


        return numberOfEmployee;
}


function totalSalary(department) {
        let total = 0;
        let employee = localStorage.getItem("employee");
        let parseEmployee = JSON.parse(employee);


        if (parseEmployee[i].department == "Development") {
                for (let i = 0; i < parseEmployee.length; i++) {
                        total = parseEmployee[i].salary + total;
                }



        }

        if (parseEmployee[i].department == "Finance") {
                for (let i = 0; i < parseEmployee.length; i++) {
                        total = parseEmployee[i].salary + total;
                }

        }



        if (parseEmployee[i].department == "Marketing") {
                for (let i = 0; i < parseEmployee.length; i++) {
                        total = parseEmployee[i].salary + total;
                }
        }

        if (parseEmployee[i].department == "Development") {
                for (let i = 0; i < parseEmployee.length; i++) {
                        total = parseEmployee[i].salary + total;
                }

                return total;
        }


}

function numberDepartment() {
        let employee = localStorage.getItem("employee");
        let parseEmployee = JSON.parse(employee);
        for (let i = 0; i < parseEmployee.length; i++) {
                totalemployee = totalemployee + 1;
        }
        return totalemployee;
}

function salaryDepartment() {
        let totalSalary = 0;
        let employee = localStorage.getItem("employee");
        let parseEmployee = JSON.parse(employee);
        for (let i = 0; i < parseEmployee.length; i++) {
                totalSalary = parseEmployee[i].salary + totalSalary;
        }
        return totalSalary;
}
////////call the function
createTable()
tableHed()
tableBody()
createTableFooter()