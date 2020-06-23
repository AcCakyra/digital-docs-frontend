import React from "react";
import AuthenticationService from "./../services/AuthenticationService";

import {
    Card, Form, Button, Grid, Alert,
} from "tabler-react";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
        };
    }

    login = async (e) => {
        e.preventDefault();
        this.setState({
            invalidEmail: false
        })

        const email = e.target.email.value
        const password = e.target.password.value

        if (email === '' || password === '') {
            return
        }

        if (!this.validateEmail(email)) {
            this.setState({
                error: "Некорректный e-mail"
            })
            return
        }

        await AuthenticationService.login(email, password).then(() => {
            this.props.history.push('/');
        }).catch(() => {
            this.setState({
                error: "Неверный e-mail или пароль"
            })
        });
    }

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    forgotPassword = () => {
        this.props.history.push('/forgot_password');
    }

    render(): React.ReactNode {
        return (
            <div className="page">
                <Grid.Col lg={5} md={7} sm={8} xs={9} className="mx-auto">
                    {this.state.error !== "" ?
                        <Alert type="danger" icon="alert-triangle">
                            {this.state.error}
                        </Alert>
                        :
                        null
                    }
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Войти в аккаунт
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.login}>
                                <Form.Group label="Email">
                                    <Form.Input
                                        name="email"
                                        placeholder="Email"
                                        autoComplete="email"
                                    />
                                </Form.Group>
                                <Form.Group label="Пароль">
                                    <Form.Input
                                        name="password"
                                        placeholder="Пароль"
                                        type="password"
                                    />
                                </Form.Group>
                                <Form.Footer>
                                    <Button
                                        type="submit"
                                        color="primary" block>
                                        Войти
                                    </Button>
                                </Form.Footer>
                            </Form>
                        </Card.Body>
                        <Button color="secondary"
                                onClick={this.forgotPassword}>
                            Забыли пароль?
                        </Button>
                    </Card>
                </Grid.Col>
            </div>
        )
    };
}

export default LoginPage;
