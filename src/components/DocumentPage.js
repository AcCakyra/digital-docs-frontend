import * as React from "react";

import {
    Grid, Card, Form, Button, Page, ContactCard, Alert,
} from "tabler-react";

import Wrapper from "./Wrapper";

import DocumentService from "./../services/DocumentService";
import LogoUtil from "../services/util/LogoUtil";
import NameUtil from "../services/util/NameUtil";

class DocumentPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            document: null,
            university: null,
            noDiploma: null,
        };
    }

    componentDidMount(): void {
        this.setState({
            user: JSON.parse(sessionStorage.user)
        })
    }

    getDocument = async (e) => {
        e.preventDefault();

        const university = e.target.university.value;
        const universityId = this.getKeyByValue(this.state.user.AllowAccessTo, university)
        const number = e.target.number.value
        const firstName = e.target.firstName.value
        const secondName = e.target.secondName.value
        const spec = e.target.spec.value
        const year = e.target.year.value

        this.setState({
            document: null,
            noDiploma: null,
        })

        await DocumentService.fetchDocument(universityId, number, firstName, secondName, spec, year).then(document => {
            if (document && document !== 'undefined') {
                this.setState({
                    document: document,
                    university: university,
                })
            } else {
                this.setState({
                    noDiploma: true,
                })
            }
        }).catch(() => {
            this.setState({
                noDiploma: true,
            })
        });
    };

    getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    }

    render(): React.ReactNode {
        if (!this.state.user) {
            return null;
        }
        return (
            <Wrapper
                email={this.state.user.Email}
                role={this.state.user.Role}
                organization={this.state.user.OrganizationName}>
                <Page.Content title="Проверка документов">
                    <Grid.Row>
                        <Grid.Col width={12} lg={7} md={12} sm={12} xs={7}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        Запрос диплома из ВУЗа партнера
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.getDocument}>
                                        <Form.Group label="ВУЗ">
                                            <Form.SelectGroup pills>
                                                {
                                                    Object.values(this.state.user.AllowAccessTo)
                                                        .map(function (org) {
                                                                return <div>
                                                                    <Form.SelectGroupItem
                                                                        value={org}
                                                                        name="university"
                                                                        label={
                                                                            <div>
                                                                                <img src={LogoUtil.getSmallLogoByName(org)}
                                                                                     alt={'*'}
                                                                                />
                                                                                {" "}
                                                                                {org}
                                                                            </div>
                                                                        }
                                                                    >
                                                                    </Form.SelectGroupItem>
                                                                </div>
                                                            }
                                                        )
                                                }
                                            </Form.SelectGroup>
                                        </Form.Group>
                                        <Form.Group label="Номер диплома">
                                            <Form.Input name="number" type="text" placeholder="1111"/>
                                        </Form.Group>
                                        <Form.Group label="Имя">
                                            <Form.Input name="firstName" type="text" placeholder="Евгений"/>
                                        </Form.Group>
                                        <Form.Group label="Фамилия">
                                            <Form.Input name="secondName" type="text" placeholder="Ермаков"/>
                                        </Form.Group>
                                        <Form.Group label="Специальность">
                                            <Form.Input name="spec" type="text" placeholder="Программная инженерия"/>
                                        </Form.Group>
                                        <Form.Group label="Год выпуска">
                                            <Form.Input name="year" type="text" placeholder="2020"/>
                                        </Form.Group>
                                        <Form.Footer>
                                            <Button color="primary"
                                                    block>
                                                Получить
                                            </Button>
                                        </Form.Footer>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Grid.Col>
                        {this.state.document ?
                            <Grid.Col width={12} lg={5} md={12} sm={12} xs={5}>
                                <Alert type="success" icon="check">
                                    Диплом подтвержден
                                </Alert>
                                <ContactCard
                                    objectURL={LogoUtil.getLogoByName(this.state.university)}
                                    name={this.state.university}
                                    address={{
                                        line1: NameUtil.getFullNameByUniversity(this.state.university),
                                    }}
                                    details={[
                                        {title: "Имя", content: this.state.document.fullName},
                                        {title: "Год окончаня", content: this.state.document.year},
                                        {title: "Номер документа", content: this.state.document.number},
                                        {title: "Специальность", content: this.state.document.spec},
                                    ]}
                                />
                            </Grid.Col>
                            :
                            null
                        }
                        {this.state.noDiploma ?
                            <Grid.Col width={12} lg={5} md={12} sm={12} xs={5}>
                                <Alert type="danger" icon="alert-triangle">
                                    Не удалось найти диплом с указанными данными
                                </Alert>
                            </Grid.Col>
                            :
                            null
                        }
                    </Grid.Row>
                </Page.Content>
            </Wrapper>
        )
    };
}

export default DocumentPage;
