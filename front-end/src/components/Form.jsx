// presentational component for the form section
import React from 'react';
import styles from '../styles/Form.module.css';

function Form({ generalMailName, depEnvironmentMailName, mailDomain, loading, error }) {

    if (loading) return <div>Loading form data...</div>;
    if (error) return <div style={{ color: 'red' }}>Error loading form data: {error}</div>;
    
    const emailAdress = depEnvironmentMailName ? `${depEnvironmentMailName}@${mailDomain}` : `${generalMailName}@${mailDomain}`;

    return (
        <form className={styles.form}>
            <h2>Submit your town data</h2>
            <div className={styles.formgroup}>
                <label htmlFor="emailInput_1">Mail to: </label>
                <input type="email" name="" id="emailInput_1" defaultValue={emailAdress} />
            </div>
            <input type="submit" value="Submit" /> 
        </form>
    );
}

export default Form;