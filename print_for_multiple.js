
for(let i = 1; i <= 30; i++){
    if(i%15==0){
        // multiple of 15
        console.log("Hello World");
    }
    else if (i%5==0){
        // nultiple of 5
        console.log("World");
    }
    else if(i%3==0){
        // multiple of 3
        console.log("Hello");
    }
    else{
        console.log(i);
    }
}