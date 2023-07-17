let user = {
    firstName: "",
    lastName: "",
    // merubah data 
    set fullName(value) {
        var splitValue = value.split("")
        this.firstName = splitValue(0)
        this.lastName = splitValue(1)
    },

    get fullName() {
        return `${user.firstName} ${user.lastName}`
    }
}


const {firstName, lastName} = user