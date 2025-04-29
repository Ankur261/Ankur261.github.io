


// Question 1

const modifyButton = document.getElementById('textButton')  ;
const para = document.getElementById("para");
var isDefaultStyle = true ;

modifyButton.addEventListener('click', (event) => {
    isDefaultStyle = !isDefaultStyle ;
    isDefaultStyle ? modifyButton.innerHTML = "Set new Style" : modifyButton.innerHTML = "Set default Style" ;
    isDefaultStyle ? 
    para.classList.remove("new-para-style") 
    : para.classList.add("new-para-style");
    
    
});

//Question 2

const formData = document.getElementById("input-form");

var data = [] ;
formData.addEventListener('submit', (event) => {
    event.preventDefault();
    const fname = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const cNum = document.getElementById("cNum").value;
    const email = document.getElementById("email").value;


    data.push({
        firstName: fname,
        lastName: lName,
        contact: cNum,
        email: email
    });


    const output = document.getElementById("output");


    output.innerHTML = data.map((value, index) => {
        return `<div style="padding:5px; border: 1px solid black">
        <p>${index+1}:</p>
        <p><span>First Name: </span><span> ${value.firstName}</span> </p>
            <p><span>Last Name: </span><span> ${value.lastName}</span> </p>
            <p><span>Contact Number: </span><span> ${value.contact}</span> </p>
            <p><span>E-mail: </span><span> ${value.email}</span> </p>
        </div>` ;
    })

})

// Question 3

const dropdown = document.getElementById("dropdown");

var fruits = ["Banana", "Apple", "Orange", "Watermelon", "Grapes"];

fruits.forEach((value, index) => {
    var newOption = document.createElement('option');
    newOption.value = value;
    newOption.text = value ;
    dropdown.append(newOption);
});

//Remove
const removeFruitButton = document.getElementById("remove-fruit-button");

removeFruitButton.addEventListener('click', (event) => {
    dropdown.remove(dropdown.selectedIndex);
})



// Add fruit
const addFruit = document.getElementById("add-fruit");
const addFruitButton = document.getElementById("add-fruit-button");

addFruitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const newFruit = addFruit.value.trim();
    if (newFruit === "") return; 
    fruits.push(newFruit.value);
    const newOption = document.createElement('option');
    newOption.value = newFruit;
    newOption.text = newFruit;
    dropdown.append(newOption);
    addFruit.value = "";
});



//Question 4

const linkText = document.getElementById('link-text');

linkText.addEventListener('mouseenter', (event) => {
   
    const boldText = document.getElementsByClassName('bold-text');
    for(let i=0 ; i<boldText.length ; i++) {
        boldText[i].style.color = 'red';
    }
    
});

linkText.addEventListener('mouseleave', (event) => {
    const boldText = document.getElementsByClassName('bold-text');
    for(let i=0 ; i<boldText.length ; i++) {
        boldText[i].style.color = '';
    }
    
});