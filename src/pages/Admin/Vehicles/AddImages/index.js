import React, { useEffect } from 'react';
import Box from '../../../../components/Box';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
  sendThumbImageVehicleRequest,
  sendImagesVehicleRequest,
} from '../../../../store/modules/vehicles/actions';

import uploadImg from '../../../../assets/admin/upload-image.png';

export default function AddImagesVehicle() {
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const targetFiles = e.target.files;

    if(targetFiles.length) {
      handleSendFile(targetFiles)
    }

  };
  
  const handleSendFile = async (files) => {
    dispatch(sendImagesVehicleRequest(id, files));
  }

  const handleChangeThumbImage = (e) => {
    const file = e.target.files[0];

    if(file) {
      dispatch(sendThumbImageVehicleRequest(id, file));
    }

  };

  return (
    <>
      <h1>Adicionar imagens ao veículo</h1>

      <Box>
        <div className="featured-img">
          <span>Imagem destaque</span>
          <Row style={{ marginTop: 15 }}>
            <Col xs={2}>
              <div className="add-images-to-upload">
                <form>
                  <label for="file">
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
                <label for="files">
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
      </Box>
    </>
  );
}
