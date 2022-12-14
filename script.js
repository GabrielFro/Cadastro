function Salvar()  {
    /*
    var nome = document.getElementById("nome").value;
    var genero = document.querySelector('input[name="gen"]:checked').value;
    var data = document.getElementById("dataN").value; */
    var salario = parseFloat(document.getElementById("Salvar").value);

    /*
    var hoje = new Date();
    var anoA = hoje.getFullYear();    
    var anoN = data.substring(0,4);
    var idade = anoA - anoN;
    */

    if(salB <= 1212.00)
    {
        var inss = parseFloat(salB * (7.5/100));
    }
    else if(salB >= 1212.01 && salB <= 2427.35)
    {
        var inss = parseFloat(salB * (9/100));
    }
    else if(salB >= 2427.36 && salB <= 3641.03)
    {
        var inss = parseFloat(salB * (12/100));
    }   
    else // >= 3614.04
    {
        var inss = parseFloat(salB * (14/100));
    } 

    if(salB <= 1903.98)
    {
        var ir = 0;
    }
    else if(salB >= 1903.99 && salB <= 2826.65)
    {
        var ir = parseFloat(salB * (7.5/100));
    }
    else if(salB >= 2826.66 && salB <= 3751.05)
    {
        var ir = parseFloat(salB * (15/100));
    }   
    else // >= 3751.06
    {
        var ir = parseFloat(salB * (22.5/100));
    } 

    var salLiquido = salB - inss - ir;
    alert("Salario liquido: R$ " + salLiquido.toFixed(2) 
    + "\nINSS: -R$ " + inss.toFixed(2) 
    + "\nIR: -R$ " + ir.toFixed(2));
}