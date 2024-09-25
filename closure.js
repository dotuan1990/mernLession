function Account(user, name, age){
    accountUser = user
    accountName = name
    accountAge = age
    secret = 123

    var login = function(user, pass){
        if(user == accountUser && pass == secret){
            return {
                accountName,
                accountAge
            }
        }else{
            return "Wrong pass"
        }
    }
    getUserDetail = function(){
        return {
            accountName,
            accountAge
        }
    }
    return {
        login,
        getUserDetail
    }
}
var user = {
    getUserDetail : function(){
        return {
            accountName,
            accountAge
        }
    }
}
var user1 = Account("user1", "Tuan", 1)
console.log(user1("user1", 123))
console.log(user1.getUserDetail())