import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fifth-class';

  exampleSet() {
    // Creating a Set
    const fruits: Set<string> = new Set<string>();

    // Adding elements to the Set
    fruits.add('Apple');
    fruits.add('Banana');
    fruits.add('Orange');
    fruits.add('Orange');

    // Checking if an element exists
    console.log('Is Mango in the set?', fruits.has('Mango'));

    // Iterating through the Set
    console.log('Fruits in the set:');
    fruits.forEach((fruit) => {
      console.log(fruit);
    });

    const uniqueNumbers: Set<number> = new Set([1, 2, 3, 3]);
    console.log('Size of uniqueNumbers:', uniqueNumbers.size);
  }

  exampleRecord() {
    // Defining a type using Record
    type Person = {
      name: string;
      age: number;
      occupation: string;
    };

    // Creating a Record of type Person
    const personRecord: Record<string, Person> = {
      john: { name: 'John', age: 30, occupation: 'Engineer' },
      alice: { name: 'Alice', age: 25, occupation: 'Designer' },
      bob: { name: 'Bob', age: 35, occupation: 'Developer' },
    };

    // Accessing and displaying information from the Record
    console.log('Details of John:', personRecord['john']);
    console.log('Occupation of Alice:', personRecord['alice'].occupation);
  }

  exampleMap() {
    // Creating a Map
    const employeeMap: Map<number, string> = new Map<number, string>();

    // Adding key-value pairs to the Map
    employeeMap.set(1, 'John');
    employeeMap.set(2, 'Alice');
    employeeMap.set(3, 'Bob');

    // Checking if a key exists
    console.log('Does key 4 exist?', employeeMap.has(4));

    // Iterating through the Map
    console.log('Employee Map:');
    employeeMap.forEach((value, key) => {
      console.log(`Employee ${key}: ${value}`);
    });
  }
}
