const authService = {};


authService.register = async (user) => {
    try {
        let response = await fetch('http://localhost:3001/v1/api/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(response);
        return await response.json();
    }catch (err){
        console.log(err);
    }
}

module.exports = {
    authService
};
