var inputName = document.getElementById("inputName");
var inputCountry = document.getElementById("inputCountry");
var inputPhone = document.getElementById("inputPhone");
var addBtn = document.getElementById("addBtn");
var inputs=document.getElementsByClassName("form-control");
var inputSearch=document.getElementById("inputSearch");
var alertName=document.getElementById("alertName");
var alertCountry=document.getElementById("alertCountry");
var alertPhone=document.getElementById("alertPhone");
var currentIndex=0;
var allData = [];
var mainBody=document.getElementById('mainBody');
var nightMoodButton=document.getElementById('nightMoodButton');
var searchButton=document.getElementById('searchButton');
var controlsButtons=document.getElementById('controlsButtons');
var tablePrent=document.getElementById('tableParent');
var tableHead=document.getElementById('tableHead');
var modalFooter=document.getElementById('modalFooter');
var modalBody=document.getElementById('modalBody');
var formGroup=document.getElementById('formGroup');






if(JSON.parse(localStorage.getItem("data")) !=null){
allData=JSON.parse(localStorage.getItem("data"));
display();
}


addBtn.onclick = function () {
  if(addBtn.innerHTML=="update"){
    updateNewData();
  }
  else{  //add
    creat();
  }
    
    display();
    clearForm();
    clearValidation();
    addBtn.innerHTML="Add";
    addBtn.disabled="true";
}
 

function creat() {

    var data = {
        name: inputName.value,
        country: inputCountry.value,
        phone: inputPhone.value,
    }
    allData.push(data);
    localStorage.setItem("data",JSON.stringify(allData));
}

function display(){
var trs=""
for(var i=0;i<allData.length;i++){
trs+=   `<tr>
            <td>${i+1}</td>
            <td>${allData[i].name}</td>
            <td>${allData[i].country}</td>
            <td>${allData[i].phone}</td>
            <td><button onclick="deleteData(${i})" class="btn-table mx-2"><i class="fa-solid fa-user-minus"></i></button> 
            <button onclick="moveDataToInput(${i})"class="btn-table mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class='fa-solid fa-pen'></i></button></td>
        </tr>`
}

document.getElementById("table-body").innerHTML=trs;
}


function deleteData (index){
allData.splice(index,1);
display();
localStorage.setItem("data",JSON.stringify(allData));
}

inputSearch.onkeyup=function(){
filter();
}

function filter(){
    var val=inputSearch.value;
    var trs="";
    for(var i=0;i<allData.length;i++){
        if(allData[i].name.toLowerCase().includes(val.toLowerCase())){
            trs+=   `<tr>
            <td>${i+1}</td>
            <td>${allData[i].name}</td>
            <td>${allData[i].country}</td>
            <td>${allData[i].phone}</td>
            <td><button onclick="deleteData(${i})" class="btn table-btns">Delete</button></td>
            <td><button class="btn table-btns" > update</button></td>
        </tr>`
}

document.getElementById("table-body").innerHTML=trs;
        
    }
   
}
function moveDataToInput(index){
    inputName.value=allData[index].name;
    inputCountry.value=allData[index].country;
    inputPhone.value=allData[index].phone;
    addBtn.innerHTML="update"
    currentIndex=index;
    }

    function updateNewData(){
        var dataUpdated = {
            name: inputName.value,
            country: inputCountry.value,
            phone: inputPhone.value,
        }
    allData[currentIndex]=dataUpdated;
    localStorage.setItem("data",JSON.stringify(allData));
    }

inputName.onkeyup=function(){
checkInputName();
checkFinalInpust();
}
inputCountry.onkeyup=function(){
checkInputCountry();
checkFinalInpust();
}
inputPhone.onkeyup=function(){
    checkInputPhone();
    checkFinalInpust();
}



function checkInputName(){
    var nameRejex=/^[A-Z][a-z]{2,10}$/
    
    if(nameRejex.test(inputName.value)){
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    alertName.classList.add("d-none");
    return true;
    }
    
    
    else{
        addBtn.disabled="true";
        inputName.classList.add("is-invalid");
        inputName.classList.remove("is-valid");
        alertName.classList.remove("d-none");
    
    }
    
}
function checkInputCountry(){
var countryRejex=/^[A-Z][a-z]{3,15}$/
if(countryRejex.test(inputCountry.value)){
    inputCountry.classList.add("is-valid");
    inputCountry.classList.remove("is-invalid");
    alertCountry.classList.add("d-none");
    return true;

}
else{
    addBtn.disabled="true";
    inputCountry.classList.add("is-invalid");
    inputCountry.classList.remove("is-valid");
    alertCountry.classList.remove("d-none");   
}
}

function checkInputPhone(){
    var phoneRejex=/^(011|012|010|015)[0-9]{8}$/
    
    if(phoneRejex.test(inputPhone.value)){
    inputPhone.classList.add("is-valid");
    inputPhone.classList.remove("is-invalid");
    alertPhone.classList.add("d-none");
    return true;

    }
    
    
    else{
        addBtn.disabled="true";
        inputPhone.classList.add("is-invalid");
        inputPhone.classList.remove("is-valid");
        alertPhone.classList.remove("d-none");
    
    }
    
}
function checkFinalInpust(){
    if ( checkInputName()&&checkInputCountry()&&checkInputPhone()){
        addBtn.removeAttribute("disabled");
    }
}


function clearValidation(){
    if(inputName.classList.contains("is-valid")&&inputCountry.classList.contains("is-valid")&&inputPhone.classList.contains("is-valid")){
        inputName.classList.remove("is-invalid");
        inputCountry.classList.remove("is-invalid");
        inputPhone.classList.remove("is-invalid");
        inputName.classList.remove("is-invalid");
        inputName.classList.remove("is-valid"); 
        inputCountry.classList.remove("is-valid"); 
        inputPhone.classList.remove("is-valid"); 
  }
 
}

function changeBodyColor(){
    if(mainBody.classList.contains('body')){
        // sun mood
        mainBody.classList.replace('body','body-pink')
        nightMoodButton.innerHTML='<i class="fa-solid fa-sun"></i>'
        nightMoodButton.classList.replace('nightMood','nightMood-pink')
        searchButton.classList.replace('search-btn','search-btn-pink')
        inputSearch.classList.remove('searching')
        controlsButtons.classList.replace('controls-btns-night','controls-btns-pink')
        tablePrent.classList.replace('table-night','table-pink')
        tableHead.classList.replace('thead-night','thead-pink')
        modalFooter.classList.replace('modal-footer-night','modal-footer-pink')
        modalBody.classList.replace('modal-body-night','modal-body-pink')
        formGroup.classList.replace('form-group-night','form-group-pink')
        addBtn.classList.replace('addBtn-night','addBtn-pink')
        for(i=0;i<inputs.length;i++){
            inputs[i].classList.remove('input-night')
        }
    }
      // night mood
    else{
        mainBody.classList.replace('body-pink','body')
        nightMoodButton.innerHTML='<i class="fa-solid fa-moon"></i>'
        nightMoodButton.classList.replace('nightMood-pink','nightMood')
        searchButton.classList.replace('search-btn-pink','search-btn')
        inputSearch.classList.add('searching')
        controlsButtons.classList.replace('controls-btns-pink','controls-btns-night')
        tablePrent.classList.replace('table-pink','table-night')
        tableHead.classList.replace('thead-pink','thead-night')
        modalFooter.classList.replace('modal-footer-pink','modal-footer-night')
        modalBody.classList.replace('modal-body-pink','modal-body-night')
        formGroup.classList.replace('form-group-pink','form-group-night')
        addBtn.classList.replace('addBtn-pink','addBtn-night')
        for(i=0;i<inputs.length;i++){
            inputs[i].classList.add('input-night')
        }

    }

}


nightMoodButton.addEventListener("click",changeBodyColor)

function clearForm(){

    for(var i=0;i<inputs.length;i++){
        inputs[i].value=null;
    }
}
