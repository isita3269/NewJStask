let things =['fruits','vegi','shita']

console.log(things.length);

let first = things[0]
console.log("TCL: first", first)

let last =things[things.length-1]
console.log("TCL: last", last)

let newlength = things.push('grocery')

newlength = things.pop('grocery')

first=things.shift();

first =things.unshift('mouse');

// let removeditem=things.splice(2);

let copy =things.slice();

copy.forEach(function(item,index,array){
    console.log(item,index,array)
})

things[6]='sst'

things.splice(1,1)
things.forEach(function(item,index,array){
    console.log(item,index)
})

console.log(Object.keys(things))

console.log(Array.from('123foo'));

let set =new Set(['foo','foo','git','poo'])
console.log(Array.from(set))

let map = new Map([['hello',1],['pikachu',2],['oops',3]])

console.log(Array.from(map));
console.log(Array.from(map.values()))

console.log(Array.from([1,2,3], x => x + 2))    

console.log(Array.from({length: 5}, (v, i) => 2*2))

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

console.log(range(1,6,2))

console.log(Array.isArray([]))

let a=Array.from('abc');
console.log("TCL: a", a)

let b=(Array.of(123));
console.log("TCL: b", b)

let c=a.concat(b);
console.log("TCL: c", c)

let d=a.concat(a,a);
console.log("TCL: d", d)

let array1 = ['abbvgcgc', 'b', 'c', 'd', 'e','f','g'];

console.log(array1.copyWithin(1,3,4))

let it =array1.entries();
console.log(it.next().value);

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));

let result = array1.filter(a => array1.length > 2)
console.log("TCL: result", result)

array2=[1,2,3,4,5,6,7,8,9];

let reducer = (accumulator, currentValue) => accumulator * currentValue;
console.log(array2.reduce(reducer));

console.log(array1.join('has'));
