




function sayHello(){
    console.log(count + '. Hello World!');
    count += 1;
}
for (let i = 0; i < 10; i++) {
    setTimeout( 
        function() {
            console.log(i);
        }
        , 1000* i);
}

