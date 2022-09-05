function hit(){
    var hey = 'Hey, I used var!\n';
    let yoo = 'Yoo, I used let!';

    console.log(hey, yoo);

    {
        // var wow = "Wow, I am in a function scope!";
        let wow = "Wow, I am in a function scope!";
        // let rawr = "Rawr, I am excited!";
    }

    if(true){
        // let rawr = "Rawr, I am in a block scope!";
        var rawr = "Rawr, I am in a block scope!";
        console.log(rawr);
    }

    console.log(wow);
    // console.log(rawr); //ReferenceError
}

hit();