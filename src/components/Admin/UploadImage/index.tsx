import React from 'react';
import { toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';
import api from '../../../services/api';
import * as S from './styles';

interface Props {
  send: any;
  urlUpload: string;
}

export const UploadImage = ({ send, urlUpload }: Props) => {
  const [imageSrcUploaded, setImageSrcUploaded] = React.useState('');
  const [file, setFile] = React.useState('');
  const [errorFile, setErrorFile] = React.useState('');

  let fileReader;

  const handleFileRead = () => {
    const content = fileReader.result;
    setImageSrcUploaded(content);
  };

  const handleChangeThumbImage = async (file) => {
    if (file) {
      if (
        file.type !== 'image/png' &&
        file.type !== 'image/jpg' &&
        file.type !== 'image/jpeg'
      ) {
        setErrorFile('Tipo de arquivo não aceito!');
      } else {
        setErrorFile('');
        setFile(file);

        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsDataURL(file);
      }
    }
  };

  async function handleImageUpload(event) {
    const imageFile = event.target.files[0];

    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 850,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);

      await handleChangeThumbImage(compressedFile);
    } catch (error) {
      setErrorFile('Ops! houve algum problema.');
    }
  }

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('file', file);

      await api.patch(urlUpload, formData);
      toast.success('Veículo adicionado!');
    } catch (error) {
      toast.error(`Ops! Erro: `, error);
    }
  };

  const removeImg = () => {
    setImageSrcUploaded('');
    setFile('');
    setErrorFile('');
  };

  const removeImgRender = () => {
    if (imageSrcUploaded && file) {
      return (
        <div>
          <button type="submit" onClick={() => removeImg()}>
            excluir
          </button>
        </div>
      );
    }
  };

  React.useEffect(() => {
    if (send) {
      handleSubmit();
    }
  }, [send]);

  return (
    <div className="previewComponent">
      <form onSubmit={(e) => handleSubmit()}>
        <input
          className="fileInput"
          type="file"
          onChange={(e) => handleImageUpload(e)}
        />
        <button
          className="submitButton"
          type="submit"
          onClick={(e) => handleSubmit()}
        >
          Upload Image
        </button>
      </form>
      {removeImgRender()}
      {errorFile && <div>{errorFile}</div>}
      <div className="imgPreview">
        {imageSrcUploaded ? (
          <img src={imageSrcUploaded} />
        ) : (
          <div className="previewText">Please select an Image for Preview</div>
        )}
      </div>
    </div>
  );
};
