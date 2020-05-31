import * as React from "react";

import {
    Grid, Card, Header, Button,
} from "tabler-react";

class Error404 extends React.Component {

    back = () => {
        this.props.history.push('/');
    };

    render(): React.ReactNode {
        return (
            <div>
                <Card.Body>
                    <Grid.Row>
                        <Grid.Col width={10} lg={6} md={9} sm={10} xs={10} className="mx-auto">
                            <img
                                src="./images/404.svg"
                                alt="404"
                            />
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col width={10} lg={6} md={9} sm={10} xs={10} className="mx-auto">
                            <Header.H1>
                                Ой! Ошибка 404
                            </Header.H1>
                            <Button
                                onClick={this.back}
                                color="primary"
                                square>
                                Вернуться домой
                            </Button>
                        </Grid.Col>
                    </Grid.Row>
                </Card.Body>
            </div>
        )
    };
}

export default Error404;
