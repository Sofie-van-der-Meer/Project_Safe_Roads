// form component containing all stateful logic
import React from 'react';
import useTownMail from '../hooks/useTownMail.jsx';
import Form from '../components/Form.jsx';

function FormContainer() {
    // form state and logic would go here
    const { generalMailName, depEnvironmentMailName, mailDomain, loading, error } = useTownMail(44088);

    return (
        <>
            <Form 
                generalMailName={generalMailName}
                depEnvironmentMailName={depEnvironmentMailName}
                mailDomain={mailDomain}
                loading={loading}
                error={error}
            ></Form>
        </>
    );
}


export default FormContainer;