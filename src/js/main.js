var error=false;

function validerInput(obj, valide) {
    if(!valide){
        error=true;
        obj.removeClass('is-valid');
        obj.addClass('is-invalid');
    }else{
        obj.removeClass('is-invalid');
        obj.addClass('is-valid');
    }
}

function RemoveParking(obj)
{
    if(confirm("Voulez-vous vraiment supprimer cette ligne ?")) {
        $(obj).parent().parent().remove();
        $('#alertOutputs').prepend("<div class='alert alert-warning fade-5 show' id='alert' role='alert'><strong>Supprimée ! </strong> Ligne supprimée.</div>");
        setTimeout(function () {
            $('#alert').alert('close');
        }, 5000);
    }
}

function find()
{
    var nom=$('#nom-find');
    var nbplace=$('#nbplace-find');
    var lat=$('#lat-gps-find');
    var long=$('#lng-gps-find');
    var mail=$('#email-find');
    var vehicule=$('#typevehi-find');
    var controlTool=$('#syscompage-find');

    $('#parking-list').children().each(function() {
        var i = 0;
        var toDisplay=true;
        $(this).children().each(function() {
            switch(i) {
                case 0: /*check nom*/
                    if($(this).text().toLowerCase().indexOf(nom.val().toLowerCase()) === -1)
                    {
                        toDisplay=false;
                    }
                    break;
                case 1: /*check vehicule*/
                    if($(this).text() !== vehicule.val() && vehicule.val() != 'Tous')
                    {
                        toDisplay=false;
                    }
                    break;
               /* case 2: /*check lat, long
                    if($(this).child().text().indexOf(lat.val().toFixed(4)) === -1 && lat.val())
                    {
                        toDisplay=false;
                    }
                    if($(this).child().text().indexOf(long.val().toFixed(4)) === -1 && long.val())
                    {
                        toDisplay=false;
                    }
                    break;*/
                case 3: /*check nbplace*/
                    if($(this).text() !== nbplace.val().toString() && nbplace.val())
                    {
                        toDisplay=false;
                    }
                    break;
                case 4: /*check mail*/
                    if($(this).text().toLowerCase().indexOf(mail.val().toLowerCase()) === -1)
                    {
                        toDisplay=false;
                    }
                    break;
                case 5: /*check controlTool*/
                    if($(this).text() !== controlTool.val() && controlTool.val() != 'Tous')
                    {
                        toDisplay=false;
                    }
                    break;
            }
            i++;
        });
        if(toDisplay)
        {
             $(this).show();
        }
        else
        {
             $(this).hide();
        }
    });

}


function EditMode(but)
{
    var obj = $(but).parent().parent();

    var nom;
    var nbplace;
    var lat;
    var long;
    var mail;
    var vehicule;
    var controlTool;
    // RETRIVE DATA TO PUT IN FORM
    var i = 0;
    obj.children().each(function() {
        switch(i) {
            case 0: /*check nom*/
                nom=$(this).text();
                break;
            case 1: /*check vehicule*/
                vehicule=$(this).text();
                break;
            case 2: /*check lat, long*/
                str= $(this).text().split(", ");
                lat=str[0];
                long=str[1];
                break;
            case 3: /*check nbplace*/
                nbplace=$(this).text();
                break;
            case 4: /*check mail*/
               mail=$(this).text();
                break;
            case 5: /*check controlTool*/
                controlTool=$(this).text();
                break;
        }
        i++;
    });
    var form = "<td scope='row'>"+
                "   <input type='text' class='form-control' id='nom-edit' placeholder='Saisir le nom' value='"+nom+"''>"+
                "</td> "+
                "<td>"+
                "    <select  class='form-control' id='typevehi-edit'>";
    /* sale peut faire mieux TODO*/
    switch(vehicule) {
        case 'Voitures' : /*check nom*/
        form += "        <option value='Voitures' selected>Voitures</option>"+
                "        <option value='Vélos'>Vélos</option>";
            break;
        case 'Vélos': /*check vehicule*/
        form += "        <option value='Voitures'>Voitures</option>"+
                "        <option value='Vélos' selected>Vélos</option>";
            break;
        };
    form +=     "    </select>"+
                "</td>"+
                "<td>"+
                "    <input type='text' step='any' class='form-control' id='lat-gps-edit' placeholder='Latitude' value='"+lat+"'>"+
                "    <p></p> <!-- #Sale -->"+
                "    <input type='text' step='any' class='form-control' id='lng-gps-edit' placeholder='Longitude' value='"+long+"'>"+
                "</td>"+
                "<td>"+
                "    <input type='text' class='form-control' id='nbplace-edit' placeholder='Saisir le nb de places' value='"+nbplace+"'>"+
                "</td>"+
                "<td>"+
                "    <input type='email' class='form-control' id='email-edit' placeholder='Saisir l'email' value='"+mail+"'>"+
                "</td>"+
                "<td>"+
                "    <select class='form-control' id='syscompage-edit'>";
    /* sale peut faire mieux TODO*/
    switch(controlTool) {
        case 'Caméras' : /*check nom*/
        form += "        <option value='Caméras' selected>Caméras</option>"+
                "        <option value='Barrières'>Barrières</option>"+
                "        <option value='Capteurs au sol'>Capteurs au sol</option>";
            break;
        case 'Barrières': /*check vehicule*/
        form += "        <option value='Caméras'>Caméras</option>"+
                "        <option value='Barrières' selected>Barrières</option>"+
                "        <option value='Capteurs au sol'>Capteurs au sol</option>";
            break;
        case 'Capteurs au sol': /*check vehicule*/
        form += "        <option value='Caméras'>Caméras</option>"+
                "        <option value='Barrières'>Barrières</option>"+
                "        <option value='Capteurs au sol' selected>Capteurs au sol</option>";
            break;
        }
    form+=      "    </select>"+
                "</td>"+
                "<td>"+
                "    <button type='button' class='btn btn-primary pull-right' onclick='valdateModif(this)'>Valider</button>"+
                "</td>";
    obj.empty();
    obj.append(form);
}

function valdateModif(but, nouveau)
{
    if(nouveau===undefined){
        nouveau = false;
    }

    var obj = $(but).parent().parent();
    error = false;

    var nom = obj.children().eq(0).children().eq(0);
    var vehicule = obj.children().eq(1).children().eq(0);
    var lat = obj.children().eq(2).children().eq(0);
    var long = obj.children().eq(2).children().eq(2);
    var nbplace = obj.children().eq(3).children().eq(0);
    var mail = obj.children().eq(4).children().eq(0);
    var controlTool = obj.children().eq(5).children().eq(0);

    validerInput(nom,nom.val().length!==0);
    validerInput(nbplace,nbplace.val().length!==0 && isNumeric(nbplace.val()));
    validerInput(lat,lat.val().length!==0 && isNumeric(lat.val()));
    validerInput(long,long.val().length!==0 && isNumeric(long.val()));
    validerInput(mail,mail.val().length!==0 && isEmail(mail.val()));

    if(error){
        $('#alertOutputs').prepend("<div class='alert alert-danger fade-5 show' id='alert' role='alert'><strong>Oups ! </strong> Veuillez verifier les informations spécifiées.</div>");
        setTimeout(function(){
           $('#alert').alert('close');
        }, 5000);
    }else{
        var table =$('#collapseParking').find( "tbody");
        var res ="<th scope='row'>"+nom.val()+"</th><td>"+ vehicule.val()+"</td><td><a href='https://www.google.com/maps/?q="+lat.val()+","+long.val()+"' target='_blank'>"+lat.val()+", "+long.val()+"</a></td><td>"+nbplace.val()+"</td><td><a href='mailto:"+mail.val()+"'>"+mail.val()+"</a></td><td>"+controlTool.val()+"</td><td style=\"font-size: x-large;\">\n" +
            "                                        <i class=\"fa fa-edit col-md-12\" onclick=\"EditMode(this)\" ></i>\n" +
            "                                        <i class=\"fa fa-trash col-md-12\" onclick=\"RemoveParking(this)\" style=\"margin-left: 0px;\"></i>\n" +
            "                                    </td>";
        obj.empty();
        obj.append(res);

        if(nouveau){
            $('#alertOutputs').prepend("<div class='alert alert-success fade-5 show' id='alert' role='alert'><strong>Ajout : </strong> Insertion réussie.</div>");
            setTimeout(function () {
                $('#alert').alert('close');
            }, 5000);
            //Sale
            var tmp = $('#parking-list').html();
            $('#parking-list').html(tmp+'<tr>\n' +
                '                                    <td scope="row">\n' +
                '                                        <input class="form-control" id="nom-edit" placeholder="Saisir le nom" type="text">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <select class="form-control" id="typevehi-edit">\n' +
                '                                            <option value="Voitures">Voitures</option>\n' +
                '                                            <option value="Vélos">Vélos</option>\n' +
                '                                        </select>\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input class="form-control" id="lat-gps-edit" placeholder="Latitude" type="text">\n' +
                '                                        <p></p>\n' +
                '                                        <input step="any" class="form-control" id="lng-gps-edit" placeholder="Longitude" type="text">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input class="form-control" id="nbplace-edit" placeholder="Saisir le nb de places" type="text">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <input class="form-control" id="email-edit" placeholder="Saisir l\'email" type="email">\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <select class="form-control" id="syscompage-edit">\n' +
                '                                            <option value="Caméras">Caméras</option>\n' +
                '                                            <option value="Barrières">Barrières</option>\n' +
                '                                            <option value="Capteurs au sol">Capteurs au sol</option>\n' +
                '                                        </select>\n' +
                '                                    </td>\n' +
                '                                    <td>\n' +
                '                                        <button type="button" class="btn btn-primary pull-right" onclick="valdateModif(this, true)">Ajouter</button>\n' +
                '                                    </td>\n' +
                '                                </tr>');
        }else {

            $('#alertOutputs').prepend("<div class='alert alert-success fade-5 show' id='alert' role='alert'><strong>Modifié : </strong> Modification réussie.</div>");
            setTimeout(function () {
                $('#alert').alert('close');
            }, 5000);
        }
    }
}

var ouvert = false;
function ouvertureRecherche() {
    if(ouvert){
        $('#icon-search').html('<i class="fa fa-angle-double-down"></i>');
        $('#parking-list').children().each(function() {
            $(this).show();
        });
    }else{
        $('#icon-search').html('<i class="fa fa-angle-double-up"></i>');
    }
    ouvert = !ouvert;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isEmail(email)
{
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
   return re.test(email);

}