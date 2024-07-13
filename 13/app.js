function Employee(name, companyName, jobPosition, salary) {
    this.name = name;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
  let employees = [];

employees.push(new Employee("Dare D", "Viva", "employee", 50000));
employees.push(new Employee("Bahri E", "Proe", "director", 100000));
employees.push(new Employee("Aleks P", "Vanter", "boss", 200000));
let list = "<ul>";

employees.forEach(function(employee) {
  list += "<li>" + employee.name + " works at " + employee.companyName + " as a " + employee.jobPosition + " and earns $" + employee.salary + " per year.</li>";
});

list += "</ul>";

console.log(list);
function Cube(side) {
    this.side = side;
  
    this.getArea = function() {
      return 6 * Math.pow(this.side, 2);
    };
  
    this.getPerimeter = function() {
      return 12 * this.side;
    };
  }
  let side = prompt("Enter the size of the sides of the cube:");

let cube = new Cube(side);
console.log("The area of the cube is " + cube.getArea() + " square units.");
console.log("The perimeter of the cube is " + cube.getPerimeter() + " units.");
class EmailMessage {
    constructor(from, to, subject, message) {
      this.from = from;
      this.to = to;
      this.subject = subject;
      this.message = message;
    }
  
    displayMessage() {
      alert("From: " + this.from + "\nTo: " + this.to + "\nSubject: " + this.subject + "\nMessage: " + this.message);
    }
  }
  let from = prompt("Enter the sender's email address:");
let to = prompt("Enter the recipient's email address:");
let subject = prompt("Enter the subject of the email:");
let message = prompt("Enter the message of the email:");

let email = new EmailMessage(from, to, subject, message);
document.getElementById("from").value = email.from;
document.getElementById("to").value = email.to;
document.getElementById("subject").value = email.subject;
document.getElementById("message").value = email.message;


