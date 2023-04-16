import {useState} from "react";


export default function Register () {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        open: false,
        error: ''
    });
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    }
}
