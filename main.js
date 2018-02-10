
var error=false;

function ajoutParking() {
    error=false;
    var nom=$('#nom-form');
    var nbplace=$('#nbplace-form');
    var lat=$('#lat-gps-form');
    var long=$('#lng-gps-form');
    var mail=$('#email-form');

    //TODO verifier aussi le type des variables + verifier les selects
    validerInput(nom,nom.val().length===0);
    validerInput(nbplace,nbplace.val().length===0);
    validerInput(lat,lat.val().length===0);
    validerInput(long,long.val().length===0);
    validerInput(mail,mail.val().length===0);

    var status=$('#status');
    if(error){
        status.html("Ajouter un joli message d'erreur");
    }else{
        status.html('');
    }

    console.log(status);
}

function validerInput(obj, valide) {
    if(valide){
        obj.removeClass('is-valid');
        obj.addClass('is-invalid');
    }else{
        error=true;
        obj.removeClass('is-invalid');
        obj.addClass('is-valid');
    }
}