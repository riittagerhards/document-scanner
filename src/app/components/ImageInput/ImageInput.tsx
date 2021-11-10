import React, { ChangeEvent } from 'react';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageUrl = URL.createObjectURL(file);
    onUpload(newImageUrl);
  };

  return (
    <label className={styles.fileUpload}>
      <input
        className={styles.defaultButton}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      Upload an image
    </label>
  );
}

export default ImageInput;
