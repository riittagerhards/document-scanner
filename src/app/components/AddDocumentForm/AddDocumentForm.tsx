import React, { useState, FormEvent } from 'react';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [name, setName] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const document = {
      name,
      text,
    };
    fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input className={styles.submitButton} type="submit" placeholder="save" />
    </form>
  );
}

export default AddDocumentForm;
