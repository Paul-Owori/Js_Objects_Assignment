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
  var checker = false
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === idNumber){
      console.log("Contact " + addressBook[j][1] + " with ID number " + addressBook[j][0] +
       " has been deleted. It can be recovered from the trashCan" )
      contactsBin.push(addressBook[j])
      addressBook.splice(j,1);
      checker = true;
    };
  };
  if(checker === false){console.log("There is no contact with that ID.")
  };

};

var Moses = new contact ("Moses", "Kodero", "07792929292", "musa@gmail.com", "Panya0", "Kampala", "Uganda");

var Bill = new contact ("Bill", "Kodero", "07792929292", "musa@gmail.com", "Panya1", "Kampala", "Uganda");

var Bugs = new contact ("Bugs", "Kodero", "07792929292", "musa@gmail.com", "Panya2", "Kampala", "Uganda");

var Bob = new contact ("Bob", "Kodero", "07792929292", "musa@gmail.com", "Panya3", "Kampala", "Uganda");


//CODE ENDS HERE. EVERYTHING BELOW IS EXPERIMENTATION


//console.log(Moses.fullAddress())

console.log(Moses)

console.log(Moses.howToEditAddresses())

console.log (Moses.editAddressField(street, "food"))

console.log (Moses.deleteAddress())

console.log(Moses.newAddress("for","but", "why"))

console.log(Moses)



this.howToEditAddress = function(){
  return ("HOW TO EDIT THE ADDRESS FIELD;" +
  "\n EITHER " + "\n 1. console.log(contactName.deleteAddress()); to clear the address object." +
  " \n 2. console.log(contactName.newAddress(newStreetName, newCityName,\n newCountryName);" +
  " to assign new values to the address field.)\n " + "\n OR " +
  "\n 1. Edit directly by using" + "\n  console.log(contactName.address.addressField = new value);")
};

this.fullAddress = function(){
  console.log (this.address.street + ", " + this.address.city + ", " + this.address.country);
};

this.deleteAddress = function(){
  return(this.address = "Address was deleted! Use the newAddress function to edit address!");
  console.log(this.address)
};

this.newAddress = function(a, b, c){
  this.address = {}
  this.address.street = a;
  this.address.city = b;
  this.address.country = c;
  return this.address;
};


Math.floor((Math.random() * 100000000) + 200000000);

from n phone contacts address book. It should contain

fist name
second name
phone number
email
adress
Store the Address as an abject which contains street, city, country.

Add a prototype method that returns the full Address of the user in form of street + ", " + city + " " + state

Add ways of editing and deleting addresses from your address book

Add an ID field to your address, so that I can look it up using its numeric ID.

Optional:
> Can you add functionality that sends deleted contacts to a trash can (temporary memory) so
that they are not deleted completely the first time and can be recovered later using a recover function?
