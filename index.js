

// for(let i = 0; i < 10; i++) {
//     console.log(i, 'hi')
// }

// for(;;){
//     console.log('hi')
// }

// for (let i = 10; i >=1; i-=2) console.log('hi', i);

// let i = 10;

// while(--i) {
//     console.log('hi', i)
    
// }

// do {
//     console.log('hi', i)
// } while(i > 20)



// console.log(value)

// const value = 5;

// console.log(value)

// let i = 10;

// function func() {
//     let i = 20 
//     console.log(i)
//     function func1() {
            
//         console.log(i);
//         i = 15;
//     }
//     func1()
//     console.log(i)
// }

// func()

// console.log(i)

// const condition = false

// if(condition){
//     let i = 10;
// }

// console.log(i)


// const arrowFunc = (nume) => 'Hi ' + nume


// console.log(arrowFunc('Alex'))

// const arrowFunc = (nume) => {
//     console.log(arguments)
//     return 'Hi ' + nume
// }


// console.log(arrowFunc('Alex'))

// console.log(funcDeclaration('Alex', 'Victor', 'ssdf', 'Ion'))

// function funcDeclaration(nume) {
//     console.log(arguments)
//     return 'Hi ' + nume
// }

// const condition = false

// const funcExpression = function (nume) {
//     if(condition) {
//         return 'first case'
//     } else {
//         return 'second case'
//     }
// }

// const funcResult = funcExpression()

// console.log(funcResult)
//-------------sa numere de la 0 pina la 10 folosint for, wihle si do while
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

  let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

 let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);
//----------sa afiseze pe rand fiecare litera dintr-un string
const str = "Something in the way";

for (let l = 0; l < str.length; l++) {
  console.log(str[l]);
}
//-----------Arrow function
const numara = (numar) => {
    for (let h = 0; h <= numar; h++) {
      console.log(h);
    }
  };
  
  const afiseazaLitere = (str) => {
    for (let f = 0; f < str.length; f++) {
      console.log(str[f]);
    }
  };
   
  numara(10);
  afiseazaLitere("Something in the way");
  //---------------Function declaration
  function numara1(numar) {
    for (let d = 0; d <= numar; d++) {
      console.log(d);
    }
  }
  
  function afiseazaLitere0(str) {
    for (let s = 0; s < str.length; s++) {
      console.log(str[s]);
    }
  }  
  numara1(10);
  afiseazaLitere0("Something in the way");
  //-----------------------------Function expression

  const numara2 = function (numar) {
    for (let q = 0; q <= numar; q++) {
      console.log(q);
    }
  };
  
  const afiseazaLitere1 = function (str) {
    for (let g = 0; g < str.length; g++) {
      console.log(str[g]);
    }
  };
  
  numara2(10);
  afiseazaLitere1("Something in the way");

