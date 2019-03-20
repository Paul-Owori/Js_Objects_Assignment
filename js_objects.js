var addressBook =[]
var contactsBin = []

function contact (firstName, secondName, phoneNumber, email, street, city, country){
  this.firstName = firstName;
  this.secondName = secondName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.address = {};
  this.address.street = street;
  this.address.city = city;
  this.address.country = country;
  this.ID = Math.floor((Math.random() * 100000000) + 200000000);
  this.fullAddress = function(){
    console.log (this.address.street + ", " + this.address.city + ", " + this.address.country);
  };
  addressBook.push([this.ID,this.firstName,[this]]);
}


var searchByID = (idNumber) => {
  contactExists = false;
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === idNumber){
      console.log("Contact found - ",addressBook[j][1]);
      console.log(addressBook[j][2]);
      contactExists = true;
    };
  }
  if(contactExists === false){
      console.log("There is no contact with that ID.")
  };
};

var deleteByID = (idNumber) => {
  var contactExists = false
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === idNumber){
      console.log("Contact: " + addressBook[j][1] + " with ID number " + addressBook[j][0] +
       " has been deleted. It can be recovered from the contactsBin" )
      contactsBin.push(addressBook[j])
      addressBook.splice(j,1);
      contactExists = true;
    };
  };
  if(contactExists === false){console.log("There is no contact with that ID.")
  };
};

var recoverByID = (idNumber) => {
  contactExists = false;
  for(j=0; j<contactsBin.length ; j++){
    if(contactsBin[j][0] === idNumber){
      console.log("Contact recovered - ",contactsBin[j][1]);
      console.log(contactsBin[j][2]);
      contactExists = true;
      addressBook.push(contactsBin[j])
      contactsBin.splice(j,1);
    };
  }
  if(contactExists === false){
      console.log("There is no contact with that ID.")
  };
};


var permDel = (idNumber) => {
  var contactExists = false
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === idNumber){
      console.log("Contact: " + addressBook[j][1] + " with ID number " + addressBook[j][0] +
       " has been permanently deleted. It cannot be recovered." )
      addressBook.splice(j,1);
      contactExists = true;
    };
  };
  for(j=0; j<contactsBin.length ; j++){
    if(contactsBin[j][0] === idNumber){
      console.log("Contact " + contactsBin[j][1] + " with ID number " + contactsBin[j][0] +
       " has been permanently deleted. It cannot be recovered." )
      contactsBin.splice(j,1);
      contactExists = true;
    };
  };
  if(contactExists === false){console.log("There is no contact with that ID.")
  };
};


function contactEdit(contactName, contactField, newInput, a, b, c){
  if(contactField === "firstName"){contactName.firstName = newInput};
  if(contactField === "secondName"){contactName.secondName = newInput};
  if(contactField === "phoneNumber"){contactName.phoneNumber = newInput};
  if(contactField === "ID"){contactName.phoneNumber = newInput};
  if(contactField === "address"){
    function addressEdit (q, d, d){
      contactName.address = {}
      contactName.address.street = a;
      contactName.address.city = b;
      contactName.address.country = c;
      return contactName.address;
    };
    addressEdit(a,b,c)
  };
}

function functionList (){console.log("List of all available functions;" +
"\n 1. This function - functionList()" +
"\n 2. contact (firstName, secondName, phoneNumber, email, street, city, country) " +
"\n 3. contactEdit(contactName, contactField, newInput, a, b, c); " + "\n 4. permDel(idNumber)"
+ "\n 5. recoverByID(idNumber)" + "\n 6. deleteByID(idNumber)" + "\n 7. searchByID(idNumber)" +
"\n ALSO" + "\n - You can console.log(addressBook)"  + "\n - You can console.log(contactsBin)"
)}

var Moses = new contact ("Moses", "Kodero", "07792929292", "musa@gmail.com", "Panya0", "Kampala", "Uganda");

var Bill = new contact ("Bill", "Kodero", "07792929292", "musa@gmail.com", "Panya1", "Kampala", "Uganda");

var Bugs = new contact ("Bugs", "Kodero", "07792929292", "musa@gmail.com", "Panya2", "Kampala", "Uganda");

var Bob = new contact ("Bob", "Kodero", "07792929292", "musa@gmail.com", "Panya3", "Kampala", "Uganda");

console.log(addressBook)

functionList ()
