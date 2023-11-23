
     var counter = 1
var people = [];

function input() {

    if (document.getElementById("display").innerText == "Submit") {
        submit();
        
    }
    else {
        id = document.getElementById("person_id").innerText;
        update(id);
    
    }
}

function edit(id) {

  

    for (let i = 0; i < people.length; i++) {

        if (people[i].id == id) {

            document.getElementById('Input1').value = people[i].id;
            document.getElementById('Input1').value = people[i].firstName;
            document.getElementById('Input2').value = people[i].lastName;
            document.getElementById('Input3').value = people[i].email;
            document.getElementById('Input4').value = people[i].contact;
            document.getElementById('Input5').value = people[i].age;
 
            document.getElementById("display").innerText = "Update";
            document.getElementById("person_id").innerText = id;

        }
    }
    
    
}

function submit() {

    var firstNamei = document.getElementById('Input1').value;
    var lastNamei = document.getElementById('Input2').value;
    var emaili = document.getElementById('Input3').value;
    var contacti = document.getElementById('Input4').value;
    var agei = document.getElementById('Input5').value;

}
