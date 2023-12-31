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

  /*
  Define a type Book with properties title and author. 
  Create a Set called library and add two books to it.
  */

  exampleLibrary() {
    type Book = { title: string; author: string };
    const library: Set<Book> = new Set([
      { title: 'The Catcher', author: 'dfsd' },
      { title: 'Harry Potter', author: 'Rolyling' },
    ]);
  }

  /*
    Create a Record type Student with name and grade.
    Create a Record named studentRecords with three students,
    where the keys are student IDs (1, 2, 3).
    */
  exampleStudent() {
    type Student = { name: string; grade: number };
  }

  /*
   */

  primeNumber() {
    const evenNumbers = new Set<number>([2, 4, 6, 8]);
    const primeNumbers = new Set<number>([2, 3, 5, 7]);
    const commonNumbersArray = Array.from(evenNumbers).filter((num) =>
      primeNumbers.has(num)
    );

    // Converting the result back to a Set
    const commonNumbers = new Set<number>(commonNumbersArray);

    // Output the results
    console.log('Even Numbers: ', Array.from(evenNumbers));
    console.log('Prime Numbers: ', Array.from(primeNumbers));
    console.log(
      'Common Numbers: ',
      Array.from(commonNumbers).forEach((item) => console.log(item))
    );
  }
}
