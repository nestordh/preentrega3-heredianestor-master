function insert(num)
{
    var numero = document.getElementById('resultadoc').innerHTML;
    document.getElementById('resultadoc').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultadoc').innerHTML = "";
}
function back()
{
    var resultadoc = document.getElementById('resultadoc').innerHTML;
    document.getElementById('resultadoc').innerHTML = resultadoc.substring(0, resultadoc.length -1);
}
function calcular()
{
    var resultadoc = document.getElementById('resultadoc').innerHTML;
    if(resultadoc)
    {
        document.getElementById('resultadoc').innerHTML = eval(resultadoc);
    }
    else
    {
        document.getElementById('resultadoc').innerHTML = "No..."
    }
}
