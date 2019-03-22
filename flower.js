var flower ={
name: "sunflower",
color: "yellow",
height: 10
};

console.log(flower);


flower.color = "green"; // Changing the flower's color with dot notation

console.log(flower);

flower["height"] = 15; //Changing the flower's height with bracket notation

console.log(flower);


flower.pollinator = ["bees", "butterflies", "birds"]; //Adds different flower pollinators as an array property of flower


console.log(flower);

//Adds a method that increases the flower height when called.
flower.growMe = function() {
  return this.height = this.height + 1};

console.log(flower)

console.log(flower.growMe());

console.log(flower)

flower.pollinator.push("man", "wind") //Adds a few more pollinators to the pollinator array

flower.randomPollinator = function(){
  console.log(flower.pollinator[Math.floor((Math.random() * flower.pollinator.length) + 0)])};
//adds a method that prints a random pollinator every time it is called
