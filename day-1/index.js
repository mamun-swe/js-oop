// const obj = {};
// const obj1 = new Object();

// console.log(obj);
// console.log(obj1);

const house = {
  name: "Pirate House",
  road: 2,
  houseNo: 450,

  houseDetails: function () {
    console.log(this.name, "Road No - " + this.road);
  },

  update: function (name) {
    this.name = name;
  },
};

console.log(house.houseNo);
house.houseDetails();

house.update("Jack house");
house.houseDetails();

house.name = "hello";
house.houseDetails();
