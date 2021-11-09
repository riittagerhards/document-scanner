import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

function ImageInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageUrl = URL.createObjectURL(file);
    setImageUrl(newImageUrl);
  };

  return (
    <label className={styles.fileUpload}>
      <input
        className={styles.defaultButton}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      {imageUrl ? (
        <img src={imageUrl} className={styles.image} />
      ) : (
        'Upload an image'
      )}
    </label>
  );
}

export default ImageInput;
