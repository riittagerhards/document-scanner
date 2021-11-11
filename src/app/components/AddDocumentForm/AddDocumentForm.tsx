import React, { useState, FormEvent } from 'react';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const document = {
      name: title,
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
    <form onSubmit={handleSubmit} className={styles.submitForm}>
      <input
        className={styles.input}
        type="text"
        placeholder="enter document title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input className={styles.submitButton} type="submit" value="save" />
    </form>
  );
}

export default AddDocumentForm;
