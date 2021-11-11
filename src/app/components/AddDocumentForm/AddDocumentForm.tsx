import React, { useState, FormEvent } from 'react';
import styles from './AddDocumentForm.module.css';
import usePostDocument from '../../utils/usePostDocument';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    await postDocument(document);
    setTitle('');
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
      <input
        className={styles.submitButton}
        type="submit"
        value="save"
        disabled={!title || isLoading}
      />
    </form>
  );
}

export default AddDocumentForm;
