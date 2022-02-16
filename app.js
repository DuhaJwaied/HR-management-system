`use strict`;

let allEmployees = [];
let employeeStartPoint = 999;
let form= document.getElementById("form")
let divadd = document.getElementById("divadd")
let add  =  document.getElementById("submit")

function Employee(FullName, Department, Level, ImgURL) {

        this.EmployeeID = 0;
        this.FullName = FullName;
        this.Department = Department;
        this.Level = Level;
        this.ImgURL = ImgURL;
        this.Salary = 0;
      allEmployees.push(this);

}

let GhaziSamer = new Employee("Ghazi Samer", " Administration", "Senior", "images/1000.jpg")
let Lana_Ali = new Employee("Lana_Ali", "Finance ", "Senior", "images/1001.jpg")
let Tamara_Ayoub = new Employee("Tamara_Ayoub", "Marketing ", "Senior", "images/1002.png")
let Safi_Walid = new Employee("Safi_Walid", " Administration", "Mid-Senior", "images/1003.jpg")
let Omar_Zaid = new Employee("Omar_Zaid", "Development ", "Senior", "images/1004.png")
let Rana_Saleh = new Employee("Rana_Saleh", "Development ", "Senior", "images/1005.jpg")
let Hadi_Ahmad = new Employee("Hadi_Ahmad", " Finance", "Mid-Senior", "images/1006.jpg")



function handelsubmit(event) {
        event.preventDefault();

        let name = event.target.name.value;
        let department = event.target.Department.value;
        let level = event.target.Level.value;
        let imageURL = event.target.Imageurl.value;

        let newEmployee = new Employee(name, department, level, imageURL)
        saveData();
newEmployee.gitId();
newEmployee.getSalary();
newEmployee.showEmployee();
        form.reset();
}

function generateId() { return ++employeeStartPoint; }

Employee.prototype.gitId = function () {
        this.EmployeeID = generateId();
}


Employee.prototype.getSalary = function () {
        let min;
        let max;
        if (this.Level == "Senior") {
                min = 1500;
                max = 2000;
        }

        if (this.Level == "Mid-Senior") {
                min = 1000;
                max = 1500;
        }

        if (this.Level == "Junior") {
                min = 500;
                max = 1000;
        }

        let totalSalary = Math.random() * (max - min + 1) + min;
       
        totalSalary = totalSalary.toFixed();
        this.Salary = totalSalary - totalSalary * 0.075;

}

function renderAll() {
        for (let i = 0; i < allEmployees.length; i++) {
         
                allEmployees[i].gitId();
                allEmployees[i].getSalary();
                allEmployees[i].showEmployee();
           

        }

}



Employee.prototype.showEmployee = function () {

        let divShow = document.createElement("divadd");
        divShow.setAttribute(`class`, "show");

        let imgShow = document.createElement("img");
        imgShow.setAttribute("src", this.ImgURL);
        divShow.appendChild(imgShow);

        let title = document.createElement("h3");
        title.textContent = "Name :" + this.FullName;
        divShow.appendChild(title);

        let titleId = document.createElement("h3");
        titleId.textContent = "ID :" + this.EmployeeID;
        divShow.appendChild(titleId);

        let titleDeb = document.createElement("h3");
        titleDeb.textContent = "Department :" + this.Department;
        divShow.appendChild(titleDeb);


        let salary = document.createElement("h3");
        salary.textContent = "Salary :" + this.Salary;
        divShow.appendChild(salary);

        let titleLevel = document.createElement("h3");
        titleLevel.textContent = "level :" + this.Level;
        divShow.appendChild(titleLevel);

        divadd.appendChild(divShow);
}

renderAll();
form.addEventListener("submit", handelsubmit)


////////////////////////////////////////////

function saveData()
{
        let formatedData =JSON.stringify(allEmployees);
        localStorage.setItem("Employee", allEmployees);

}


function getData (){
        let e
}