import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '~/components/Box';
import { Row, Col, Button } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import { 
  getVehicleDetailRequest,
  sendThumbImageVehicleRequest, 
  sendImagesVehicleRequest,
  removeImageVehicleRequest,
  removeVehicleRequest,
} from '~/store/modules/vehicles/actions';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import uploadImg from '~/assets/admin/upload-image.png';
import noImg from '~/assets/site/no-img.jpg';

export default function EditVehicle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { vehicle } = useSelector(state => state.vehicles);
  const [description, setDescription] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    
    function getVehicleDetail() {
      dispatch(getVehicleDetailRequest(id));
    }

    if (id) {
      getVehicleDetail()
    }
  }, [id, dispatch])

  function handleSubmit(form) {
    console.tron.log(form);
    // dispatch(signInRequest(email, password));
  }

  const car = vehicle?.vehicle[0]
  const images = vehicle?.images

  const handleChange = (e) => {
    const targetFiles = e.target.files;

    if(targetFiles.length) {
      handleSendFile(targetFiles)
    }

  };
  
  const handleSendFile = async (files) => {
    dispatch(sendImagesVehicleRequest(id, files))
  }

  const handleChangeThumbImage = (e) => {
    const file = e.target.files[0];

    if(file) {
      dispatch(sendThumbImageVehicleRequest(id, file));
    }

  };

  const handleRemoveVehicle = async (id) => {
    dispatch(removeVehicleRequest(id))
  }

  const handleRemoveImage = async (id) => {
    dispatch(removeImageVehicleRequest(id))
  }

  return (
    <>
      <h1>{id ? `Editar veículo ${id}` : 'Adicionar veículo'}</h1>

      <Box>
        <div className="featured-img">
          <div>
            <span>Imagem destaque</span>
            <Row style={{ marginTop: 15 }}>
              <Col xs={2}>
              <div>
                  <img
                    style={{ width: "100%" }}
                    src={car?.thumbimage?.url || noImg}
                    alt={`car-${car?.id}`}
                  />
                </div>
              </Col>
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
          <div className="remove">
            <Button variant="danger" onClick={() => handleRemoveVehicle(id)}>
              Excluir veículo
            </Button>
          </div>
        </div>

        <div className={images?.length ? 'has-images' : null}>
          {images?.length ? <div className="imgs-vehicle">
            <span>Imagens do veículo</span>
          </div> : null}
          <Row>
            {images?.map((image) => (
              <Col key={image.id} xs={6} md={2} style={{ marginBottom: 15 }}>
                <div className="content-img-upload">
                  <button className="remove-img-upload" onClick={() => handleRemoveImage(image.id)}>
                    <span>
                      X
                    </span>
                  </button>
                  <img
                    src={image.url}
                    alt={`${image.id}`}
                  />
                </div>
              </Col>
            ))}
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

        <Form className="form-edit" onSubmit={handleSubmit} initialData={id ? car : null}>
          <Row>
            <Col md={12}>
              <label for="title">Título</label>
              <Input name="title" type="text" placeholder="Título" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label for="brand">Marca</label>
              <Input name="brand" type="text" placeholder="Marca" />
            </Col>
            <Col md={6}>
              <label for="model">Modelo</label>
              <Input name="model" type="text" placeholder="Modelo" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label for="year_fab">Ano Fabricação</label>
              <Input name="year_fab" type="text" placeholder="Ano Fabricação" />
            </Col>
            <Col md={6}>
              <label for="year_mod">Ano Modelo</label>
              <Input name="year_mod" type="text" placeholder="Ano Modelo" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label for="doors">Portas</label>
              <Input name="doors" type="text" placeholder="Portas" />
            </Col>
            <Col md={6}>
              <label for="transmission">Câmbio</label>
              <Input name="transmission" type="text" placeholder="Câmbio" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label for="fuel">Combustível</label>
              <Input name="fuel" type="text" placeholder="Combustível" />
            </Col>
            <Col md={6}>
              <label for="mileage">KM</label>
              <Input name="mileage" type="text" placeholder="KM" />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <label for="value">Valor</label>
              <Input name="value" type="text" placeholder="Valor" />
            </Col>
            <Col md={6}>
              <label for="value_per">Valor atual</label>
              <Input name="value_per" type="text" placeholder="Valor atual" />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <label for="short_description">Descrição curta</label>
              <Input name="short_description" type="text" placeholder="Descrição curta" />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <label for="description">Descrição</label>
              <Editor
                editorState={description}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setDescription}
              />
            </Col>
          </Row>

          <button type="submit">{'Salvar'}</button>
        </Form>
      </Box>
    </>
  );
}
