function mesajGonder() {
    var isimVal = document.getElementById("isim").value;
    var epostaVal = document.getElementById("eposta").value;
    var konuVal = document.getElementById("konu").value;
    var mesajVal = document.getElementById("mesaj").value;

    if(isimVal == "" || epostaVal == "" || konuVal == "" || mesajVal == "") {
        alert("Lutfen tum bilgileri eksiksiz giriniz");
    }
    else {
        alert("Mesajiniz iletildi. Tesekkurler!")
    }
}

function resmiAc(resim) {
    var modal = document.getElementById("resimModal");
    var buyukresim = document.getElementById("buyukResim");
    modal.style.display = "block";
    buyukresim.src = resim.src;
}

function resmiKapat() {
    document.getElementById("resimModal").style.display = "none";
}