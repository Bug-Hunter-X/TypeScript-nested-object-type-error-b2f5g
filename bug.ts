function printObject(obj: any): void {
  console.log(obj);
}

const myObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

printObject(myObject); //This will cause a type error if you add a new property to address like zipcode