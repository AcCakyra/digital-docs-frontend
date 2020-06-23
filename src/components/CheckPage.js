import * as React from "react";

import {
    Grid, Card, Form, Page
} from "tabler-react";

class CheckPage extends React.Component {

    render(): React.ReactNode {
        return (
            <Page.Content>
                <Grid.Col lg={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Проверка образовательного документа
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group label="Выберите файл для проверки">
                                <Form.FileInput/>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Grid.Col>
            </Page.Content>
        )
    };
}

export default CheckPage;
