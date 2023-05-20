let users = [
    {
        id:1, name:"john", age:"18", profession:"developer"
    },
    {
        id:2, name:"jack",age:"20", profession:"developer"
    },
    {
        id:3, name:"karen", age:"19", profession:"admin"
    }
];

/////        Filter     //////

function filter() {
    console.log(users);
    let filterValue = document.getElementById("filter-option").value;

    if(filterValue == "") {
        alert("Please select a profession before clicking the filter button");
        return;
    }
    
    const container = document.getElementById("filterContent");
    // Resetting the container
    container.innerHTML = '';

    for(let i=0; i<users.length; i++) {
        if(users[i].profession.toLowerCase() == filterValue) {
            const userContainer = document.createElement("div");
            userContainer.className = "user";

            const idSpan = document.createElement("span");
            idSpan.innerText = users[i].id.toString() + ".";

            const nameSpan = document.createElement("span");
            nameSpan.innerText = "Name: " + users[i].name[0].toUpperCase() + users[i].name.substring(1);

            const professionSpan = document.createElement("span");
            professionSpan.innerText = "Profession: " + users[i].profession[0].toUpperCase() + users[i].profession.substring(1);

            const ageSpan = document.createElement("span");
            ageSpan.innerText = "Age: " + users[i].age;

            userContainer.append(idSpan);
            userContainer.append(nameSpan);
            userContainer.append(professionSpan);
            userContainer.append(ageSpan);

            container.append(userContainer);
        }
    }

}

    ////     Add new user   /////
function addUser() {
    let userObj = {};
    userObj.id = users.length+1;
    userObj.name = document.getElementById("name").value;
    userObj.profession = document.getElementById("profession").value;
    userObj.age = document.getElementById("age").value;
    
    users.push(userObj);

    // Show all users
    showAllUsers();
}

    ////    Show all user   /////
function showAllUsers() {
    const container1 = document.getElementById("filterContent");
    // Resetting the container
    container1.innerHTML = '';

    for(let i=0; i<users.length; i++) {
        const userContainer1 = document.createElement("div");
        userContainer1.className = "user";

        const idSpan1 = document.createElement("span");
        idSpan1.innerText = users[i].id.toString() + ".";

        const nameSpan1 = document.createElement("span");
        nameSpan1.innerText = "Name: " + users[i].name[0].toUpperCase() + users[i].name.substring(1);

        const professionSpan1 = document.createElement("span");
        professionSpan1.innerText = "Profession: " + users[i].profession[0].toUpperCase() + users[i].profession.substring(1);

        const ageSpan1 = document.createElement("span");
        ageSpan1.innerText = "Age: " + users[i].age;

        userContainer1.append(idSpan1);
        userContainer1.append(nameSpan1);
        userContainer1.append(professionSpan1);
        userContainer1.append(ageSpan1);

        container1.append(userContainer1);
    }
}