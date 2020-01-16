var log = console.log;
for(var x =0;x<=20;x++){
    if( x%3 == 0&& x%5 == 0){
        log('fizzbuzz');
    }
    else if(x%5 == 0){
        log('buzz');
    }
    else if(x% 3==0){
        log('fizz');
    }
    else{
        log(x);
    }

}