
// 2)Write a Node program that prints all the numbers between 1 and 100, each on a separateline. 
// A few caveats:
// o if the number is divisible by 3, print "foo"
// o if the number is divisible by 5, print "bar" 
// o if the number is divisible by both 3 and 5, print "foobar"


for(var i = 1 ; i <= 100 ; i++){
   if(i % 3 == 0 && i % 5 == 0){
 console.log("Foobar");
 }
 else if(i % 3 == 0){
  console.log("foo");
 }else if (i % 5 == 0){
 console.log("bar");
 }
 else{
   console.log(i);
 }
}