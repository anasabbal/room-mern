import React, {useState} from "react";
import { useStyletron } from 'baseui';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import {FlexGrid, FlexGridItem} from "baseui/flex-grid";
import {authService} from "../services/auth-service";



export default function Register () {
    const [css, theme] = useStyletron();
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
    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        };
        authService.register(user).then((data) => {
            if(data.error){
                setValues({...values, error: data.error});
            }else{
                setValues({...values, error: '', open: true});
            }
        })
    }

    return (
        <FlexGrid justifyContent="center" alignItems="center" height="100vh" >
            <FlexGridItem>
                <form onSubmit={clickSubmit} className={css({ width: '400px' })}>
                    <FormControl label="Name">
                        <Input
                            type="name"
                            value={values.name}
                            onChange={handleChange('name')}
                            overrides={{
                                Input: {
                                    style: {
                                        borderTopLeftRadius: theme.sizing.scale200,
                                        borderTopRightRadius: theme.sizing.scale200,
                                    },
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl label="Email">
                        <Input
                            type="email"
                            value={values.email}
                            onChange={handleChange('email')}
                            overrides={{
                                Input: {
                                    style: {
                                        borderTopLeftRadius: theme.sizing.scale200,
                                        borderTopRightRadius: theme.sizing.scale200,
                                    },
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl label="Password">
                        <Input
                            type="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            overrides={{
                                Input: {
                                    style: {
                                        borderBottomLeftRadius: theme.sizing.scale200,
                                        borderBottomRightRadius: theme.sizing.scale200,
                                    },
                                },
                            }}
                        />
                    </FormControl>
                    <Button type="submit" overrides={{
                        BaseButton: {
                            style: {
                                width: '100%',
                                backgroundColor: theme.colors.primary400,
                                ':hover': { backgroundColor: theme.colors.primary500 },
                                ':focus': { backgroundColor: theme.colors.primary500 },
                            },
                        },
                    }}
                    >
                        Submit
                    </Button>
                </form>
            </FlexGridItem>
        </FlexGrid>
    )
}
