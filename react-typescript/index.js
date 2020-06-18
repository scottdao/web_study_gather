//数字类型
cinterface;
Person;
{
    firstName: string;
    lastName: string;
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
