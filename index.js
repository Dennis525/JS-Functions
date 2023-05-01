let count = true

//promise function
let countValue = new Promise(function(resolve, reject) {
    if(count) {
        resolve('There is a count value');
        //console.log(resolve);
        //reduce 
        const array = [1,34,2,3,3,4,2,4,4,90];

        function sum(arr){
            const reducer = (total, value) => total + value;
            const initialValue = 0;

            return arr.reduce(reducer, initialValue);
        }
        console.log(sum(array));
        
        //reduce using arrow function
        const summation = array.reduce((total,value) => total + value, 0);
        console.log(summation);
    }
    else {
        reject('There is no count value');
    }
})

console.log(countValue);

let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve('done'),5000)
});
promise.then((success) => console.log(success));



const arrayP = [24,89,09,45,78];
//map function
arrayP.map((array)=>{
    const result =  array + 1
    console.log(result);
});

//Destructuring
const arr = ['Dennis', 'Peris', 'Doe', 'Mark'];

const [x,y,...z] = arr;
console.log(x , y);
console.log(z);

let member = {
    id : 0,
    name : {
        fname : 'Dennis',
        sname : 'chan',
        lname : 'Odhiambo'
    }
};

let {name : {fname,...lname}} = member;
console.log(fname);
console.log(lname);

const people = [
    { name : 'Peris Chan', year : 2000 },
    { name : 'Dennis Okumu', year : 1999 },
    { name : 'Mark John', year : 1989 },
    { name : 'John Doe', year : 2010 },
];

const comments = [
    { text : 'Much love', id : 57839},
    { text : 'See you soon', id : 4590 },
    { text : 'Best have had', id : 55390 },
    { text : 'Gracious people', id : 57039},
    { text : 'Kisses', id : 77839},
]

//some and every checks
//Array.prototype.some()
//it will return true if it finds at least one person who is 19 or older
const isAdult = people.some((person) => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;

});
console.log(isAdult);
//implicit function
const allAdults = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log(allAdults);