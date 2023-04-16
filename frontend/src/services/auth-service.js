


const register = async (req) => {
    try {
        let response = await fetch('http://localhost:3001/v1/api/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        });
        console.log(response);
        return await response.json();
    }catch (err){
        console.log(err);
    }
}

module.exports = {
    register
}
