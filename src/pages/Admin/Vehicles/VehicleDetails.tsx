import * as React from 'react';
import { useParams } from 'react-router-dom';

import {widthSidebarAdmin} from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import api from '../../../services/api';
import history from '../../../services/history';
import { toast } from 'react-toastify';

import { Row, Col, Button } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import noImg from '../../../assets/no-img.jpg';
import uploadImg from '../../../assets/upload-image.png';

interface ThumbImgData {
  id: number;
  url: string;
  path: string;
  name: string;
}

interface VehicleData {
  vehicle: [
    {
      brand: string;
      description: string;
      doors: string;
      fuel: string;
      id: number;
      mileage: string;
      model: string;
      optionals: string;
      short_description: string;
      slug: string;
      thumbimage: ThumbImgData | null;
      title: string;
      transmission: string;
      value: string;
      value_per: string;
      year_fab: string;
    }
  ];
  images: [
    {
      id: number;
      url: string;
      path: string;
    }
  ]
}

const VehicleDetails: React.FC = () => {
  const { width } = useWindowDimensions();
  
  const { id } = useParams();
  const [vehicle, setVehicle] = React.useState<VehicleData | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const [editorStateOptionals, setEditorStateOptionals] = React.useState(EditorState.createEmpty());

  React.useEffect(() => {
    window.scrollTo(0, 0)

    async function getVehicleDetails() {
      setLoading(true);
      const {data} = await api.get(`vehicles/${id}`);
      setLoading(false);

      setVehicle(data);
    };

    getVehicleDetails();
  }, []);

  let car = vehicle?.vehicle[0];
  let imagesToState: any = vehicle?.images;

  const [images, setImages] = React.useState(imagesToState);

  React.useEffect(() => {
    setImages(imagesToState);
  }, [imagesToState]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  };

  const onEditorStateChangeOptionals = (editorStateOptionals) => {
    setEditorStateOptionals(editorStateOptionals)
  };


  async function submitForm(form) {
    console.log(form);
  };

  function handleSubmit(form) {
    const description = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    const optionals = draftToHtml(convertToRaw(editorStateOptionals.getCurrentContent()))
    form.description = description
    form.optionals = optionals

    submitForm(form);
  };

  const handleChange = (e) => {
    const targetFiles = e.target.files;

    if(targetFiles.length) {
      handleSendFile(targetFiles)
    };
  };
  
  const handleSendFile = async (files) => {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i])
    }

    const {data} = await api.post(`files/vehicle/${id}`, formData);

    console.log(data)

    // if(data.ok) {
    //   setImages([...images], );
    // };

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

  const handleRemoveVehicle = async (id) => {
    const {data} = await api.delete(`vehicle/remove/${id}`);
    toast.error(data.message);

    history.push(`/admin/veiculos`);
  }

  const handleRemoveImage = async (id) => {
    const {data} = await api.delete(`files/remove/${id}`);

    if(data.ok) {
      const imagesUpdated = images?.filter((image) => image.id !== id);

      setImages(imagesUpdated);
    }

    toast.success(data.message);
  }

  return (
    <>
      <div className="content" style={{ width: width - widthSidebarAdmin }}>
        <div className="title-section">
          <h1>Editar veículo</h1>
          <Button variant="danger" onClick={() => handleRemoveVehicle(id)}>
            Remover veículo
          </Button>
        </div>
        <div className="box">
          <div className="featured-img">
            <span>Imagem destaque</span>
            <Row style={{ marginTop: 15 }}>
              <Col xs={4}>
                <form>
                  <label htmlFor="file">
                    <span>Alterar imagem (clicar sob ela)</span>
                      <img
                        style={{ width: "100%" }}
                        src={car?.thumbimage?.url || noImg}
                        alt={`car-${car?.id}`}
                      />
                  </label>
                  <input type="file" id="file" onChange={handleChangeThumbImage} />
                </form>
              </Col>
            </Row>
          </div>

          <div className={images?.length ? 'has-images' : ''}>
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

          <Form className="form-edit" onSubmit={handleSubmit} initialData={id ? car : {}}>
            <Row>
              <Col md={12}>
                <label>Título</label>
                <Input name="title" type="text" placeholder="Título" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <label>Marca</label>
                <Input name="brand" type="text" placeholder="Marca" />
              </Col>
              <Col md={6}>
                <label>Modelo</label>
                <Input name="model" type="text" placeholder="Modelo" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <label>Ano Fabricação</label>
                <Input name="year_fab" type="text" placeholder="Ano Fabricação" />
              </Col>
              <Col md={6}>
                <label>Ano Modelo</label>
                <Input name="year_mod" type="text" placeholder="Ano Modelo" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <label>Portas</label>
                <Input name="doors" type="text" placeholder="Portas" />
              </Col>
              <Col md={6}>
                <label>Câmbio</label>
                <Input name="transmission" type="text" placeholder="Câmbio" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <label>Combustível</label>
                <Input name="fuel" type="text" placeholder="Combustível" />
              </Col>
              <Col md={6}>
                <label>KM</label>
                <Input name="mileage" type="text" placeholder="KM" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <label>Valor</label>
                <Input name="value" type="text" placeholder="Valor" />
              </Col>
              <Col md={6}>
                <label>Valor atual</label>
                <Input name="value_per" type="text" placeholder="Valor atual" />
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <label>Descrição curta</label>
                <Input name="short_description" type="text" placeholder="Descrição curta" />
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <label>Descrição geral</label>
                <Editor
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onEditorStateChange}
                />
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <label>Opcionais</label>
                <Editor
                  editorState={editorStateOptionals}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onEditorStateChangeOptionals}
                />
              </Col>
            </Row>

            <button type="submit">{'Salvar'}</button>
          </Form>
          
        </div>
      </div>
    </>
  );
}

export { VehicleDetails };