import * as React from "react";

import {
    Grid, Card, Form, Button, Page
} from "tabler-react";

import Wrapper from "./Wrapper";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount(): void {
        this.setState({
            user: JSON.parse(sessionStorage.user)
        })
    }

    render(): React.ReactNode {
        if (!this.state.user) {
            return null;
        }
        return (
            <Wrapper
                email={this.state.user.Email}
                role={this.state.user.Role}>
                <Page.Content>
                    <Grid.Row cards={true}>
                        <Grid.Col lg={8}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Запрос диплома из ВУЗа партнера
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-md-5" label="ВУЗ">
                                            <Form.Select name="university">
                                                {
                                                    Object.values(this.state.user.AllowAccessTo)
                                                        .map(function (org) {
                                                                return <option>{org}</option>
                                                            }
                                                        )
                                                }
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
                </Page.Content>
            </Wrapper>
        )
    };
}

export default MainPage;
