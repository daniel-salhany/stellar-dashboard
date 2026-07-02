
import { Table} from '@heroui/react';

const WidgetTable = (props) => {

    const {data} = props;

    return (<Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[300px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Status</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.map((row) => {
                            return (
                                <Table.Row key={row.name}>
                                    {Object.keys(row).map((column) => {
                                        return <Table.Cell key={row[column]}>{row[column]}</Table.Cell>
                                    })}

                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}

export default WidgetTable;
