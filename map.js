// que1:: You are given a string (STR) of length N, consisting of only the lower 
// case English alphabet.Your task is to remove all the duplicate occurrences of 
// characters in the string.
// Input:
// abcadeecfb

// Output:
// abcdef

const duplicate = new Set(['a', 'b', 'c', 'a', 'd', 'e', 'e', 'c', 'f', 'b']);
console.log('Output:',duplicate);



//que2:: You are given a string (STR) of length N, you have to print the count of all alphabet.
// (using maps)
// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

const print ='abcadeecfb'
function map(){
    const ele = new Map();
    print.split('').forEach((element)=>{
        if(ele.has(element)){
            ele.set(element,ele.get(element)+1)
        }
        else{
            ele.set(element,1)
        }
    });
    print.split('').forEach((i)=>{
        if(ele.has(i) && ele.get(i)!=0){
            console.log(i+"="+ele.get(i)+' ');
            ele.set(i,0)
        };
    });
};
map(print)