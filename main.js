var name="my name is virat";
var number='1234567890';
var flag='true';
var arrayValues=['vk','virat','kohli','viratkohli'];
var objValues={
    name: "virat kohli",
    phone: "1234567890",
    industry:"Web devoloper"
};


function getName(){
     document.getElementById("name").textContent = name; 
}
function getnumber(){
    document.getElementById("number").textContent = number;
    
}
function getFlag(){
     document.getElementById("flag").textContent = flag;
}
function getArray(){
    document.getElementById("arrayValues").textContent = arrayValues;
}
function getObj(){
     //document.getElementById("objValues").textContent = objValues;
    document.getElementById("objValues").innerHTML = objValues;
    
}

function  call(){
    getName();
    getnumber();
    getFlag();
    getArray();
    getObj();
    
}
