import { useEffect, useState } from 'react';
import { Document } from '../components/DocPreview/DocPreview';

function getDocuments(): Document[] | null {
  const [documents, setDocuments] = useState<null | Document[]>(null);

  useEffect(() => {
    fetch('https://json-server.machens.dev/docs')
      .then((response) => response.json())
      .then(setDocuments);
  }, []);

  return documents;
}

export default getDocuments;
