"use client";
import {Button, Dropdown, Label, Modal, Surface, TextField, Input, Header} from "@heroui/react";
import { useState } from "react";

export function AddWidgetModal(props) {

    const [selected, setSelected] = useState(new Set(["table"]));

    return (
        <Modal>
            <Button variant="secondary">Add Widgets</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Select one or more widgets to add?</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Widget name</Label>
                                        <Input placeholder="Widget name" />
                                    </TextField>
                                    <Dropdown>
                                        <Button aria-label="Menu" variant="secondary">
                                            Widget type
                                        </Button>
                                        <Dropdown.Popover className="min-w-[256px]">
                                            <Dropdown.Menu
                                                selectedKeys={selected}
                                                selectionMode="single"
                                                onSelectionChange={setSelected}
                                            >
                                                <Dropdown.Section>
                                                    <Header>Select a widget type</Header>
                                                    <Dropdown.Item id="table" textValue="table">
                                                        <Dropdown.ItemIndicator />
                                                        <Label>Table</Label>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item id="lineChart" textValue="lineChart">
                                                        <Dropdown.ItemIndicator />
                                                        <Label>Line Chart</Label>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item id="barChart" textValue="barChart">
                                                        <Dropdown.ItemIndicator />
                                                        <Label>Bar Chart</Label>
                                                    </Dropdown.Item>
                                                </Dropdown.Section>
                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </Dropdown>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button onPress={() => props.onPress()} slot="close">Add Widget</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default AddWidgetModal;