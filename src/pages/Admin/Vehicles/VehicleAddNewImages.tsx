import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import {widthSidebarAdmin} from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import uploadImg from '../../../assets/upload-image.png';

const VehicleAddNewImages: React.FC = () => {
  const { width } = useWindowDimensions();
  const { id } = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const targetFiles = e.target.files;

    if(targetFiles.length) {
      handleSendFile(targetFiles)
    }

  };
  
  const handleSendFile = async (files) => {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i])
    }

    const {data} = await api.post(`files/vehicle/${id}`, formData);
    toast.success(data.message);
  }

  const handleChangeThumbImage = async (e) => {
    const file = e.target.files[0];

    if(file) {
      let formData = new FormData();
      formData.append('file', file);

      const {data} = await api.patch(`vehicles/${id}`, formData);
      toast.success(data.message);
    }
  };

  return (
    <>
      <div className="content" style={{ width: width - widthSidebarAdmin }}>
        <h1>Adicionar imagens ao veículo</h1>
        <div className="box">
          <div className="featured-img">
            <span>Imagem destaque</span>
            <Row style={{ marginTop: 15 }}>
              <Col xs={2}>
                <div className="add-images-to-upload">
                  <form>
                    <label htmlFor="file">
                      <span>Alterar imagem</span>
                      <img
                        src={uploadImg}
                        alt="upload"
                      />
                    </label>
                    <input type="file" id="file" onChange={handleChangeThumbImage} />
                  </form>
                </div>
              </Col>
            </Row>

          </div>

          <Row>
            <Col xs={2}>
              <div className="add-images-to-upload">
                <form>
                  <label htmlFor="files">
                    <span>Adicionar imagens</span>
                    <img
                      src={uploadImg}
                      alt="upload"
                    />
                  </label>
                  <input type="file" id="files" multiple onChange={handleChange} />
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export { VehicleAddNewImages };