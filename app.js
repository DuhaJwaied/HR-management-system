`use strict`;

let allEmployees = [];

function Employee(EmployeeID, FullName, Department, Level, ImgURL) {

        this.EmployeeID = EmployeeID;
        this.FullName = FullName;
        this.Department = Department;
        this.Level = Level;
        this.ImgURL = ImgURL;
        this.Salary = 0;
        allEmployees.push(this);
}

let GhaziSamer = new Employee("1000", "Ghazi Samer", " Administration", "Senior", "images/1000.jpg")
let Lana_Ali = new Employee("1001", "Lana_Ali", "Finance ", "Senior", "images/1001.jpg")
let Tamara_Ayoub = new Employee("1002", "Tamara_Ayoub", "Marketing ", "Senior", "images/1002.png")
let Safi_Walid = new Employee("1003", "Safi_Walid", " Administration", "Mid-Senior", "images/1003.jpg")
let Omar_Zaid = new Employee("1004", "Omar_Zaid", "Development ", "Senior", "images/1004.png")
let Rana_Saleh = new Employee("1005", "Rana_Saleh", "Development ", "Senior", "images/1005.jpg")
let Hadi_Ahmad = new Employee("1006", "Hadi_Ahmad", " Finance", "Mid-Senior", "images/1006.jpg")



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
        console.log(totalSalary);
        totalSalary=totalSalary.toFixed();
        this.Salary = totalSalary - totalSalary * 0.075;

}


let div = document.getElementById("divone");

Employee.prototype.render = function () {
        let par = document.createElement("p");
        par.textContent = ` Name : ${this.FullName}  salary: ${this.Salary}`;
        div.appendChild(par)
}

for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].getSalary();

        allEmployees[i].render();
        console.log(allEmployees[i]);
}






       // document.write ($ { this.FullName } , $ {this.Img} )
