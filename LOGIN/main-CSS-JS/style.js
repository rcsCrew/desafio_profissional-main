function validate()
{
    // username = busca o id no login.html
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    // Login ADM
    if(username=="admin"&& password=="user")
    {
        // se o login for aprovado
        alert("Login aprovado!");
        return false
    }
    // se nao for
    else
    {
        alert("Login rejeitado!");
    }
}