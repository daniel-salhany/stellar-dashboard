"use client";
import {Button, Dropdown, Label, Modal, Surface} from "@heroui/react";
export function AddWidgetModal(props) {
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
                                    <Dropdown>
                                        <Button aria-label="Menu" variant="secondary">
                                            Widget Types
                                        </Button>
                                        <Dropdown.Popover slot="close">
                                            <Dropdown.Menu  onAction={() => props.onPress()}>
                                                <Dropdown.Item id="new-file" textValue="New file">
                                                    <Label>Table</Label>
                                                </Dropdown.Item>
                                                <Dropdown.Item isDisabled id="copy-link" textValue="Copy link">
                                                    <Label>Line Chart</Label>
                                                </Dropdown.Item>
                                                <Dropdown.Item isDisabled id="edit-file" textValue="Edit file">
                                                    <Label>Bar Chart</Label>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Popover>
                                    </Dropdown>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default AddWidgetModal;