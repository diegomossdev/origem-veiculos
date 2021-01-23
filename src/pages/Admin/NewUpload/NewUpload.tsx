import React from 'react';
import useWindowDimensions from '../../../helpers/getWindowDimensions';
import { widthSidebarAdmin } from '../../../helpers';

interface Props {
  send: any;
  urlUpload: string;
}

export const NewUpload = ({ send, urlUpload }: Props) => {
  const { width } = useWindowDimensions();

  const [file, setFile] = React.useState<any>('');
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState<any>('');

  const handleSubmit = () => {
    // e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle urlUpload', urlUpload);
    console.log('handle uploading-', file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  React.useEffect(() => {
    if (send) {
      handleSubmit();
    }
  }, [send]);

  return (
    <div className="content" style={{ width: width - widthSidebarAdmin }}>
      <div className="title-section">
        <h1>New upload</h1>
      </div>
      <div className="box">
        <div className="previewComponent">
          <form onSubmit={(e) => handleSubmit()}>
            <input
              className="fileInput"
              type="file"
              onChange={(e) => handleImageChange(e)}
            />
            <button
              className="submitButton"
              type="submit"
              onClick={(e) => handleSubmit()}
            >
              Upload Image
            </button>
          </form>
          <div className="imgPreview">
            {imagePreviewUrl ? (
              <img src={imagePreviewUrl} />
            ) : (
              <div className="previewText">
                Please select an Image for Preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
