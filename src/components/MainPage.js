import * as React from "react";

import {
    Grid, Container, Card, Form, Button,
} from "tabler-react";

import Wrapper from "./Wrapper";
import UserService from "../services/UserService";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
    }

    componentDidMount(): void {
        this.getMe().then(user => {
            this.setState({
                user: user
            })
        });
    }

    getMe = async () => {
        return await UserService.getMe();
    }

    render(): React.ReactNode {
        return (
            <Wrapper>
                <div className="my-3 my-md-5 ">
                    <Container>
                        <Grid.Row>
                            <Grid.Col lg={8}>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>
                                            Запрос диплома из ВУЗа партнера
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group label="Консорциум">
                                                <Form.SelectGroup pills={true}>
                                                    <Form.SelectGroupItem
                                                        label="Томские ВУЗы"
                                                        name="associations"
                                                        value="Томские ВУЗы"
                                                    />
                                                    <Form.SelectGroupItem
                                                        label="Лига Плюща"
                                                        name="associations"
                                                        value="Лига Плюща"
                                                    />
                                                </Form.SelectGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-md-5" label="ВУЗ">
                                                <Form.Select name="university">
                                                    <option>
                                                        ТУСУР
                                                    </option>
                                                    <option>
                                                        ТГУ
                                                    </option>
                                                    <option>
                                                        ТПУ
                                                    </option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-md-5" label="Номер диплома">
                                                <Form.Input type="text" placeholder="3432423424"/>
                                            </Form.Group>
                                            <Form.Footer>
                                                <Button color="primary" block>
                                                    Получить
                                                </Button>
                                            </Form.Footer>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Grid.Col>
                        </Grid.Row>
                    </Container>
                </div>
            </Wrapper>
        )
    };
}

export default MainPage;
