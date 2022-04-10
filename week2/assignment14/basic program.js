/**to smallest of three number */

const a=prompt("enter the first number: ")
const b=prompt("enter the second number: ")
const c=prompt("enter the third number: ")
    if (a <= b && a <= c)
        document.write( a + " is the smallest");
 
    else if (b <= a && b <= c)
        document.write( b + " is the smallest");
 
    else
        document.write( c + " is the smallest");
     

/**to find prime or not */
const n=prompt("enter the number: ")
for(i=2; i<=n;i++){
    if(n%i==0) 
    console.log("is the prime number")
}

