
import { Button, Table} from '@heroui/react';
import {useState} from "react";

const WidgetTable = (props) => {


    return (<Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[300px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Status</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Kate Moore</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>John Smith</Table.Cell>
                            <Table.Cell>CTO</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Sara Johnson</Table.Cell>
                            <Table.Cell>CMO</Table.Cell>
                            <Table.Cell>On Leave</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Michael Brown</Table.Cell>
                            <Table.Cell>CFO</Table.Cell>
                            <Table.Cell>Active</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}

export default WidgetTable;
