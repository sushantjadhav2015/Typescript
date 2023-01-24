function display(id, name, role) {
    console.log("Id :", id);
    console.log("Name :", name);
    if (role != undefined) {
        console.log("Role :", role); //
    }
}
//display(1, 'Harry', 'Admin');
display(2, "Harmayni", "Engeneering");
// if we call only to argumate ti show error 3 rd argument is not mensioned so that case we want to create optional parameters
