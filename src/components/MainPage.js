import * as React from "react";

import {
    Grid, Container, Card, Form, Button,
} from "tabler-react";

import Wrapper from "./Wrapper";

function Home() {
    return (
        <Wrapper>
            <div className="my-3 my-md-5 ">
                <Container>
                    <Grid.Row>
                        <Grid.Col lg={8}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Внесите данные диплома</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group isRequired={true}>
                                            <Form.Label>Номер диплома</Form.Label>
                                            <Form.Input placeholder="3432423424"/>
                                        </Form.Group>
                                        <Form.Group isRequired={true}>
                                            <Form.Label>ВУЗ</Form.Label>
                                            <Form.Radio
                                                label="ТПУ"
                                                name="university"
                                                value="ТПУ"
                                            />
                                            <Form.Radio
                                                label="ТГУ"
                                                name="university"
                                                value="ТГУ"
                                            />
                                            <Form.Radio
                                                label="ТГПУ"
                                                name="university"
                                                value="ТГПУ"
                                            />
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
    );
}

export default Home;