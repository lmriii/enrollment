import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h1>MIDTOWN PRIMARY SCHOOL</h1>
                    <h2>Student Emergency Information</h2>
                </header>

                <Form>
                    <div style={{
                        borderWidth: '10px',
                        borderStyle: 'solid'
                    }}>
                        <FormGroup>
                            <Label for='name'>Student's Name</Label>
                            <Input type='text' name='name' id='name' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='lastName'>Student's Last Name</Label>
                            <Input type='text' name='lastName' id='lastName' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="dob">Date of Birth</Label>
                            <Input type="date" name="dob" id="dob" placeholder="date placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for='phone'>Phone</Label>
                            <Input type='number' name='phone' id='phone' />
                        </FormGroup>
                        <FormGroup required check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Re-enrollment
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Enrollment
                            </Label>
                        </FormGroup>
                    </div>
                    <h2>Parent's Information</h2>
                    <div style={{
                        borderWidth: '10px',
                        borderStyle: 'solid'
                    }}>

                        <div>
                            <h3>Mother's Data</h3>
                            <FormGroup>
                                <Label for='momthersName'>Mother's Name</Label>
                                <Input type='text' name='mothersName' id='mothersName' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='mothersLastName'>Mother's Last Name</Label>
                                <Input type='text' name='mothersLastName' id='mothersLastName' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='momAddress'>Mother's Home Address (if different)</Label>
                                <Input type='textarea' name='momAddress' id='momAddress' />
                            </FormGroup>
                            <h3 style={{
                                borderTopWidth: '10px',
                                borderTopStyle: 'solid'
                            }}>Father's Data</h3>
                            <FormGroup>
                                <Label for='dadName'>Mother's Name</Label>
                                <Input type='text' name='dadName' id='dadName' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadLastName'>Mother's Last Name</Label>
                                <Input type='text' name='dadLastName' id='dadLastName' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadAddress'>Mother's Home Address (if different)</Label>
                                <Input type='textarea' name='dadAddress' id='dadAddress' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadPhone1'>Home Phone</Label>
                                <Input type='number' name='dadPhone1' id='dadPhone1' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadPhone2'>Cell Phone</Label>
                                <Input type='number' name='dadPhone2' id='dadPhone2' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadPhone3'>Work Phone</Label>
                                <Input type='number' name='dadPhone3' id='dadPhone3' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadCompanyAddress'>Company & Address</Label>
                                <Input type='textarea' name='dadCompanyAddress' id='dadCompanyAddress' />
                            </FormGroup>
                        </div>
                    </div>
                    <h3>Emergency Contact Numbers</h3>

                    <div style={{
                        borderWidth: '10px',
                        borderStyle: 'solid'
                    }}>
                        <h4>Contact 1</h4>
                        <FormGroup>
                            <Label for='contact1'>Name</Label>
                            <Input type='text' name='contact1' id='contact1' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='relationship'>Relationship</Label>
                            <Input type='text' name='relationship' id='relationship' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact1Address'>Address </Label>
                            <Input type='textarea' name='contact1Address' id='contact1Address' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact1Phone1'>Home Phone</Label>
                            <Input type='number' name='contact1Phone1' id='contact1Phone1' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact1Phone2'>Cell Phone</Label>
                            <Input type='number' name='contact1Phone2' id='contact1Phone2' />
                        </FormGroup>
                        <hr />
                        <h4>Contact 2</h4>
                        <FormGroup>
                            <Label for='contact2'>Name</Label>
                            <Input type='text' name='contact2' id='contact2' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='relationship2'>Relationship</Label>
                            <Input type='text' name='relationship2' id='relationship2' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact2Address'>Address </Label>
                            <Input type='textarea' name='contact2Address' id='contact2Address' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact2Phone1'>Home Phone</Label>
                            <Input type='number' name='contact2Phone1' id='contact2Phone1' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact2Phone2'>Cell Phone</Label>
                            <Input type='number' name='contact2Phone2' id='contact2Phone2' />
                        </FormGroup>
                        <p>If I cannot be reached, the above-named people may be contacted and are authorized to pick up my child.</p>
                        <FormGroup>
                            <Label for='initials'>Initials</Label>
                            <Input type='text' name='initials' id='initials' />
                        </FormGroup>
                        <FormGroup required check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                OK
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Not-OK
                            </Label>
                        </FormGroup>
                    </div>
                    <h3>Special Instructions</h3>
                    <div style={{
                        borderWidth: '10px',
                        borderStyle: 'solid'
                    }}>
<FormGroup>
                                <Label for='allergies'>Allergies or Special Conditions </Label>
                                <Input type='textarea' name='allergies' id='allergies' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='notAllowed'>Anyone NOT allowed to pick up student </Label>
                                <Input type='textarea' name='notAllowed' id='notAllowed' />
                            </FormGroup>

                    </div>

                    <FormGroup>
                        <Label for='name'>Student Name</Label>
                        <Input type='text' name='name' id='name' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>Student Name</Label>
                        <Input type='text' name='name' id='name' />
                    </FormGroup>


                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Select Multiple</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Option three is disabled
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Check me out
                        </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </>
        );
    }
}