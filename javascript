function main(n){

    for(let i = n; i <= 100; i--){
        
        console.log(`${n} bottles of beer on the wall,`);
        console.log(`${n} bottles of beer!`);
        console.log("take 1 down and pass it around,");
        console.log(`${n = n - 1} bottles of beer on the wall!`);
        
        if (i == 1){
            console.log("Go home, you're drunk!");
            break;
            
        }
}
}

main (99);
