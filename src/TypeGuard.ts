{
    // TypeGuard

    //TypeGuard using typeof
    type Alphanumeric = number | string

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2

        }else{
            return param1.toString() + param2.toString()
        }
    }

    // in guard

    interface NormalUser {
        name: string;
    }

    interface AdminUser {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser : NormalUser = {
        name: 'Hasib'
    }

    const adminUser: AdminUser ={
        name: 'Prangon',
        role: 'admin'
    }

    getUser(adminUser)

    // 
}