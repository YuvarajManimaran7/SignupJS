let validate = {
    userEmail : 'LCO123@sdfd',
    password : '12345@sdsaf',
    user : true,
    pass : true,

 userChecker : function(myString)
{
    if((myString.includes(123)) && (myString.length>6))
    {
        this.user = true
    }
    else
    {
        this.user =  false
    }
},

passChecker : function(pass1)
{
    if((pass1.includes(123 && '@')) &&(pass1.length>8))
    {
        this.pass = true
    }
    else
    {
        this.pass = false
    }
},
validateAccount : function()
{
if((this.user == true ) && (this.pass == true))
{
    console.log('Account Created Successfully!!!');
}
else
{
    console.log('User Id or Password is Invalid');
}
}
}
validate.userChecker(validate.userEmail)
validate.passChecker(validate.password)
console.log(validate.validateAccount());