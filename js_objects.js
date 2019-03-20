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
  }

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
  }

 /*this.editAddressField = function (field, edit){
   this.address.(field) = edit;
   */
 //this.howToEditAddresses = ;


}

var Moses = new contact ("Moses", "Kodero", "07792929292", "musa@gmail.com", "Lumumba Ave", "Kampala", "Uganda");

//console.log(Moses.fullAddress())

console.log(Moses)

console.log (Moses.address)

console.log (Moses.deleteAddress())

console.log(Moses.newAddress("for","but", "why"))

console.log(Moses)






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
