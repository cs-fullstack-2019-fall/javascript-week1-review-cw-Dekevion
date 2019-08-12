var input = "";

while (input !== "q") {
    input = prompt("enter 1 to count down or 2 to count up. q to quit");


    if (input === "1") {
        var e = parseInt(prompt("What do you want to count down from?"));
        var f = 0;
        while (f < e) {
            e = e - 1;
            alert(e);
            console.log(e);

        }


    } else if (input === "2") {
      var countUp =  parseInt(prompt("What do you want to count up to?"));
        var b = 0;
        while ( b < countUp) {
            b = b + 1;
            alert(b);
            console.log(b);
        }


    }
}

while (ask !== "quit") {
    var ask = prompt('enter your name.');
    {
        if (ask === "kevin") {
            alert("hello ");
        } else if (ask === "kenn") {
            alert("hi")
        } else if (ask === "autumn") {
            alert("good morning");
        }

    }

}


