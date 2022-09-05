function hit(){
    var hey = 'Hey, I used var!';
    let yoo = 'Yoo, I used let!';

    console.log(hey, yoo);

    {
        var wow = "Wow, I used var!";
        let rawr = "Rawr, I am excited!";
    }

    console.log(wow);
    console.log(rawr); //ReferrenceError
}

hit();