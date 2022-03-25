import React, { useRef } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();
    function sendEmailForm(e) {
        e.preventDefault();

        emailjs.sendForm('service_prtkkgq', 'template_tq0nqaf', 'form', 'QB59AV4sGBP6FfRvo')
            .then((result) => {
                console.log(form);
            }, (error) => {
                console.log(error.text);
            });
        // e.target.reset();
    }




    return (
        <>
            <header>
                <h1>MIDTOWN PRIMARY SCHOOL</h1>
                <h2>Student Emergency Information</h2>
            </header>

            <form ref={form} onSubmit={sendEmailForm} className='enrollmentForm' name='form'>
                <div style={{
                    margin: '2%',
                    borderWidth: '10px',
                    borderStyle: 'solid',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1%'
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
                        <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='phone' id='phone' />
                    </FormGroup>
                    <FormGroup required check>
                        <Label check>
                            <Input type="radio" name="radio1" value={'Re-enrollment'} />{' '}
                            Re-enrollment
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" value={'Enrollment'} />{' '}
                            Enrollment
                        </Label>
                    </FormGroup>
                </div>
                <h2>Parent's Information</h2>
                <div style={{
                    margin: '2%',
                    borderWidth: '10px',
                    borderStyle: 'solid'
                }}>

                    <div>
                        <h3>Mother's Data</h3>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '1%',
                            flexWrap: 'wrap'
                        }}>
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
                            <FormGroup>
                                <Label for='momPhone1'>Home Phone</Label>
                                <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='momPhone1' id='momPhone1' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadPhone2'>Cell Phone</Label>
                                <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='momPhone2' id='momPhone2' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='momPhone3'>Work Phone</Label>
                                <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='momPhone3' id='momPhone3' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='momCompanyAddress'>Company & Address</Label>
                                <Input type='textarea' name='momCompanyAddress' id='momCompanyAddress' />
                            </FormGroup>
                        </div>
                        <h3 style={{

                            borderTopWidth: '10px',
                            borderTopStyle: 'solid'
                        }}>Father's Data</h3>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '1%',
                            flexWrap: 'wrap'
                        }}>
                            <FormGroup>
                                <Label for='dadName'>Father's Name</Label>
                                <Input type='text' name='dadName' id='dadName' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadLastName'>Father's Last Name</Label>
                                <Input type='text' name='dadLastName' id='dadLastName' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadAddress'>Father's Home Address (if different)</Label>
                                <Input type='textarea' name='dadAddress' id='dadAddress' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadPhone1'>Home Phone</Label>
                                <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='dadPhone1' id='dadPhone1' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadPhone2'>Cell Phone</Label>
                                <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='dadPhone2' id='dadPhone2' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadPhone3'>Work Phone</Label>
                                <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='dadPhone3' id='dadPhone3' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='dadCompanyAddress'>Company & Address</Label>
                                <Input type='textarea' name='dadCompanyAddress' id='dadCompanyAddress' />
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <h3>Emergency Contact Numbers</h3>

                <div style={{
                    margin: '2%',
                    borderWidth: '10px',
                    borderStyle: 'solid'
                }}>
                    <h4>Contact 1</h4>
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '1%',
                        flexWrap: 'wrap'
                    }}>
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
                            <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='contact1Phone1' id='contact1Phone1' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact1Phone2'>Cell Phone</Label>
                            <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='contact1Phone2' id='contact1Phone2' />
                        </FormGroup>
                    </div>
                    <hr />
                    <h4>Contact 2</h4>
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '1%',
                        flexWrap: 'wrap'
                    }}>
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
                            <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='contact2Phone1' id='contact2Phone1' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='contact2Phone2'>Cell Phone</Label>
                            <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name='contact2Phone2' id='contact2Phone2' />
                        </FormGroup>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '1%',
                        flexWrap: 'wrap'
                    }}>
                        <p>If I cannot be reached, the above-named people may be contacted and are authorized to pick up my child.</p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'nowrap'
                        }}>
                            <FormGroup>
                                <Label for='initials'>Initials</Label>
                                <Input type='text' name='initials' id='initials' />
                            </FormGroup>
                            <FormGroup required check>
                                <Label check>
                                    <Input type="radio" name="radio2" value={'OK'} />{' '}
                                    OK
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" value={'Not-OK'} />{' '}
                                    Not OK
                                </Label>
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <h3>Special Instructions</h3>
                <div style={{
                    margin: '2%',
                    borderWidth: '10px',
                    borderStyle: 'solid',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1%',
                    flexWrap: 'wrap'
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
                <div style={{
                    textAlign: 'left',
                    margin: '2%'
                }}>

                    <p>
                        In presenting my (our) child for diagnosis and treatment:

                    </p>

                    <div>
                        <FormGroup>
                            <Label for='fullName'>Student's Name</Label>
                            <Input type='text' name='fullName' id='fullName' />
                        </FormGroup>
                        <p>born on</p>
                        <FormGroup>
                            <Label for="dob">Date of Birth</Label>
                            <Input type="date" name="dob" id="dob" placeholder="date placeholder" />
                        </FormGroup>
                    </div>
                    <p>I/We as parents/guardians</p>
                    <FormGroup>
                        <Label for='parentsName'>Parent's Name</Label>
                        <Input type='text' name='parentsName' id='parentsName' />
                    </FormGroup>
                    <p>Hereby voluntarily consent to the rendering of such care and medical treatment, including diagnostic procedures and blood transfusions, by authorized prehospital personnel and members of the hospital staff, as may in their professional judgment be necessary or in the best interest of my child.</p>
                    <p>
                        I hereby acknowledge that no guarantees have been made to me as to the effect of such examinations or treatment on child’s condition.</p>
                    <p>
                        I have read this form and certify that I understand its contents.</p>
                    <p>
                        In addition I/we give my/our consent to:</p>
                    <p><span className='bold'>MIDTOWN PRIMARY SCHOOL</span></p>
                    <p>
                        Who will be caring for my/our Son/Daughter for the period of:</p>
                    <p><span className='bold'>ENROLLMENT AT MIDTOWN PRIMARY</span></p>
                    <p>
                        to arrange for routine or emergency medical/dental care and treatment necessary to preserve the health of my/our child.
                        I/ we acknowledge that I am (we are) responsible for all reasonable charges in connection with care and treatment rendered during this period.
                    </p>
                    <FormGroup>
                        <Label for='initials2'>Initials</Label>
                        <Input type='text' name='initials2' id='initials2' />
                    </FormGroup>
                    <FormGroup required check>
                        <Label check>
                            <Input type="radio" name="radio3" value={'OK'} />{' '}
                            OK
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio3" value={'Not-OK'} />{' '}
                            Not OK
                        </Label>
                    </FormGroup>
                    <p>Today's date</p>
                    <FormGroup>
                        {/* <Label for="dob">Date of Birth</Label> */}
                        <Input style={{ marginTop: '15px', marginRight: '7px', marginLeft: '7px' }} type="date" name="today" id="today" placeholder="date placeholder" />
                    </FormGroup>

                    <h2>MEDICAL INFORMATION</h2>
                    <h3>Hospital Preference</h3>
                    <FormGroup>
                        {/* <Label for='hospitalPreference'></Label> */}
                        <Input type='textarea' name='hospitalPreference' id='hospitalPreference' placeholder='Hospital Preference' />
                    </FormGroup>
                    <h3>Insurance Information</h3>
                    <FormGroup>
                        <Label for='insurance'>Insurance Provider</Label>
                        <Input type='text' name='insurance' id='insurance' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='policyNumber'>Policy Number</Label>
                        <Input type='text' name='policyNumber' id='policyNumber' />
                    </FormGroup>
                    <p>Physician Information</p>
                    <FormGroup>
                        <Label for='pediatrician'>Pediatrician</Label>
                        <Input type='text' name='pediatrician' id='pediatrician' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='momAddress'>Mother's Home Address (if different)</Label>
                        <Input type='textarea' name='momAddress' id='momAddress' />
                    </FormGroup>
                </div>









                <Button>Submit Form</Button>
            </form>
        </>
    );

}

export default Contact;