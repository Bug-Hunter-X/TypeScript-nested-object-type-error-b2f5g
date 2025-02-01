interface Address {
  street: string;
  city: string;
  [key: string]: any; //Allows additional properties
}

interface MyObject {
  name: string;
  age: number;
  address: Address;
}

function printObject(obj: MyObject): void {
  console.log(obj);
}

const myObject: MyObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipcode: "12345", // Now this is allowed
  },
};

printObject(myObject); 