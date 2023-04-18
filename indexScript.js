function pesan(){
    var name = 
        document.forms["msgForm"]["fname"].value
    var btd = 
        document.forms["msgForm"]["birthday"].value
    var gender = 
        document.forms["msgForm"]["gender"].value
    var message = 
        document.forms["msgForm"]["pesanArea"].value
    var date = 
        new Date();

    if (name == "") {
        window.alert("Mohon input nama");
        return false;
    }
    if (btd == "") {
        window.alert("Mohon input tanggal lahir");
        return false;
    }
    if (gender == "") {
        window.alert("Mohon input jenis kelamin");
        return false;
    }
    if (message == "") {
        window.alert("Mohon input jenis kelamin");
        return false;
    }

    console.log({date, name, btd, gender, message});

    setSenderUI(date, name, btd, gender, message);
    return false;


    }

function setSenderUI(date, name, btd, gender, message){
    document.getElementById("sendDate").innerText = date;
    document.getElementById("sendName").innerText = name;
    document.getElementById("sendBirthday").innerText = btd;
    document.getElementById("gender").innerText = gender;
    document.getElementById("sendPesan").innerText = message;
}
