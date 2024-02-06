// task1//


function EdedlerinCemi(ilk, son) {
    if (ilk >son) {
        return "İlk parametr ikinci parametrdən kiçik olmalidir.";
    }

    let cem = 0;
    for (let i = ilk; i <= son; i++) {
        cem += i;
    }
    return cem;
}

console.log(EdedlerinCemi(1, 5)); 


// task2//
function sadeFilter( arr, sert) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (sert(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
const ededler = [5, 2, 3, 4, 7];
const tekeded = sadeFilter(ededler, function(eded) {
    return eded % 2 == 1; 
});

console.log(tekeded);

// task3//
  function sadeMap(arr, proses) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(proses(arr[i], i, arr)); 
    }
    return result;
}

let arr = [1, 2, 3];
let kub = sadeMap(arr, function(eded) {
    return eded * eded*eded; 
});

console.log(kub);

function sadeReduce(arr, reducer, ilkdeyer) {
    let result =ilkdeyer;
    for (let i = 0; i < arr.length; i++) {
        result = reducer(result, arr[i], i, arr); 
    }
    return result;
}


let num = [1, 2, 3, 4];
let cem = sadeReduce(num, function(toplama, current) {
    return toplama + current; 
}, 0); 

console.log(cem); 
