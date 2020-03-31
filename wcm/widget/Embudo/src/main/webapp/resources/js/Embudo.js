var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        this.consulta();
    },
    //Esta funcion hace una consulta al dataset del formulario, el cual contiene los datos del funner
    consulta: function () {

        var datasetReturned = DatasetFactory.getDataset("ds_form_funn", null, null, null);
        if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0){
            //Agrega los datos encontrados a una variable
            var records = datasetReturned.values;
            //Manda a llamar la función "crear", enviándole como parametro los datos encontrados en la consulta
            this.crear(records);
        }

        
    },
    //Esta función cambia los tamaños de los componentes del funner, en base a los datos obtenidos
    crear: function (records){

        //Declaración de variables
        var longitud=records.length;
        var ultimo=(longitud-1);
        var etapa1=records[ultimo].etapa1;
        var etapa2 = records[ultimo].etapa2;
        var etapa3 = records[ultimo].etapa3;
        var etapa4 = records[ultimo].etapa4;
        var etapa5 = records[ultimo].etapa5;

        //Valor default en pixeles de la altura de las figuras del funnel
        var xInicial=70;
        
        //En las siguientes variables se realiza un calculo para el aumento de altura para cada figura respecto a la altura default
        var aumento1=((etapa1-1)*10)+xInicial;
        var aumento2=((etapa2-1)*10)+xInicial;
        var aumento3=((etapa3-1)*10)+xInicial;
        var aumento4=((etapa4-1)*10)+xInicial;
        var aumento5=((etapa5-1)*10)+xInicial;

        //En los siguientes bloques, se aplica la altura a cada una de las figuras

        //Se obtiene el contenedor de la figura
        var svg1=document.getElementById("svg1");

        //Se remueve el atributo de la altura
        svg1.removeAttribute("height");

        //Se agrega la nueva altura
        svg1.setAttribute("height",aumento1);

        //se obtiene la figura
        var a1=document.getElementById("a1");

          //Se le remueven las coordenadas
        a1.removeAttribute("from");

          //Se agregran las nuevas coordenadas
        a1.setAttribute("from", "0,0 500,0 450,0 50,0");
        //Se le remueven las coordenadas
        a1.removeAttribute("to");

        //Se agregran las nuevas coordenadas
        a1.setAttribute("to", "0,0 500,0 450,"+aumento1+" 50,"+aumento1);

        var svg1=document.getElementById("svg2");
        svg1.removeAttribute("height");
        svg1.setAttribute("height",aumento2);
        /* var p2=document.getElementById("p2");
        p2.removeAttribute("points");
        p2.setAttribute("points", "25,0 425,0 375,"+aumento2+" 75,"+aumento2) */
        var a2=document.getElementById("a2");
        a2.removeAttribute("from");
        a2.setAttribute("from", "25,0 425,0 375,0 75,0");
        a2.removeAttribute("to");
        a2.setAttribute("to", "25,0 425,0 375,"+aumento2+" 75,"+aumento2);

        var svg1=document.getElementById("svg3");
        svg1.removeAttribute("height");
        svg1.setAttribute("height",aumento3);
        /* var p3=document.getElementById("p3");
        p3.removeAttribute("points");
        p3.setAttribute("points", "50,0 350,0 300,"+aumento3+" 100,"+aumento3) */
        var a3=document.getElementById("a3");
        a3.removeAttribute("from");
        a3.setAttribute("from", "50,0 350,0 300,0 100,0");
        a3.removeAttribute("to");
        a3.setAttribute("to", "50,0 350,0 300,"+aumento3+" 100,"+aumento3);

        var svg1=document.getElementById("svg4");
        svg1.removeAttribute("height");
        svg1.setAttribute("height",aumento4);
       /*  var p4=document.getElementById("p4");
        p4.removeAttribute("points");
        p4.setAttribute("points", "75,0 275,0 275,"+aumento4+" 75,"+aumento4) */
        var a4=document.getElementById("a4");
        a4.removeAttribute("from");
        a4.setAttribute("from", "75,0 275,0 275,0 75,0");
        a4.removeAttribute("to");
        a4.setAttribute("to", "75,0 275,0 275,"+aumento4+" 75,"+aumento4);

        var svg1=document.getElementById("svg5");
        svg1.removeAttribute("height");
        svg1.setAttribute("height",aumento5);
       /*  var p5=document.getElementById("p5");
        p5.removeAttribute("points");
        p5.setAttribute("points", "75,0 275,0 275,"+aumento5+" 75,"+aumento5) */
        var a5=document.getElementById("a5");
        a5.removeAttribute("from");
        a5.setAttribute("from", "75,0 275,0 275,0 75,0");
        a5.removeAttribute("to");
        a5.setAttribute("to", "75,0 275,0 275,"+aumento5+" 75,"+aumento5);


        //Fin de asignación de nuevas alturas

        //En los siguientes bloques, se  agrega texto a la sección "personas alcanzadas" del widget, dependiendo de los datos obtenidos
        var e1=document.getElementById("e1");
        e1.append(document.createTextNode("Contacto: "+etapa1));
        
        var e2=document.getElementById("e2");
        e2.append(document.createTextNode("Prospecto: "+etapa2));
        
        var e3=document.getElementById("e3");
        e3.append(document.createTextNode("Oportunidad: "+etapa3));
        
        var e4=document.getElementById("e4");
        e4.append(document.createTextNode("Calificación: "+etapa4));
        
        var e5=document.getElementById("e5");
        e5.append(document.createTextNode("Cierre: "+etapa5));

    }
});