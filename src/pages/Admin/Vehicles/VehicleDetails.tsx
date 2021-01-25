import * as React from 'react';
import { useParams } from 'react-router-dom';

import { widthSidebarAdmin } from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import api from '../../../services/api';
import history from '../../../services/history';
import { toast } from 'react-toastify';

import { Row, Col, Button, Dropdown } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import { UploadImage } from '../../../components/Admin';

import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import noImg from '../../../assets/no-img.jpg';
import uploadImg from '../../../assets/upload-image.png';

type Category = {
  id: number;
  name: string;
  slug: string;
  img: string;
};

type Thumb = {
  url: string;
  id: number;
  name: string;
  path: string;
};

type VehicleData = {
  brand: string | null;
  category: Category;
  category_id: number;
  description: string;
  doors: string;
  fuel: string;
  id: number;
  mileage: string;
  model: string;
  optionals: string;
  short_description: string;
  slug: string;
  thumbimage: Thumb;
  title: string;
  transmission: string;
  value: string;
  value_per: string;
  year_fab: string;
  year_mod: string;
  status: number;
};

const VehicleDetails: React.FC<any> = (props) => {
  const hasVehicle = props.location.state;
  console.log('vehicle', hasVehicle);
  const { width } = useWindowDimensions();

  const [loading, setLoading] = React.useState(false);
  const [vehicle, setVehicle] = React.useState<VehicleData>(
    hasVehicle?.id ? hasVehicle : ({} as VehicleData)
  );
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(hasVehicle.description))
    )
  );
  const [editorStateOptionals, setEditorStateOptionals] = React.useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(hasVehicle.optionals))
    )
  );
  const [images, setImages] = React.useState<any>([]);
  const [featuredImg, setFeaturedImg] = React.useState<any>({
    send: false,
    urlUpload: '',
  });

  const [categories, setCategories] = React.useState<any>([]);
  const [category, setCategory] = React.useState<any>({
    id: hasVehicle.category.id,
    name: hasVehicle.category.name,
  });
  const [status, setStatus] = React.useState<any>({
    status: hasVehicle.status,
    name: hasVehicle.status === 0 ? 'Não vendido' : 'Vendido',
  });

  React.useEffect(() => {
    console.log('category', category);
  }, [category]);

  const getCategories = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('categories');
      setLoading(false);

      setCategories(data);
    } catch (error) {
      console.log('Erro, get categorias', error);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);

    async function getImagesVehicle() {
      setLoading(true);
      const { data } = await api.get(`vehicles/${hasVehicle.id}`);
      setLoading(false);

      console.log(data);

      setImages(data?.images);
    }

    getImagesVehicle();
    getCategories();
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const onEditorStateChangeOptionals = (editorStateOptionals) => {
    setEditorStateOptionals(editorStateOptionals);
  };

  async function submitForm(form) {
    await api.put(`vehicle/${hasVehicle.id}`, form);

    toast.success('Veículo atualizado!');
    history.push('/admin/veiculos');
  }

  function handleSubmit(form) {
    const description = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    const optionals = draftToHtml(
      convertToRaw(editorStateOptionals.getCurrentContent())
    );
    form.description = description;
    form.optionals = optionals;
    form.categoryId = category.id;
    form.status = status.status;

    submitForm(form);
  }

  const handleChange = (e) => {
    const targetFiles = e.target.files;

    if (targetFiles.length) {
      handleSendFile(targetFiles);
    }
  };

  const handleSendFile = async (files) => {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i]);
    }

    const { data } = await api.post(`files/vehicle/${hasVehicle.id}`, formData);

    console.log(data);

    toast.success(data.message);
  };

  const handleChangeThumbImage = async (e) => {
    const file = e.target.files[0];

    if (file) {
      let formData = new FormData();
      formData.append('file', file);

      const { data } = await api.patch(`vehicles/${hasVehicle.id}`, formData);
      toast.success(data.message);
    }
  };

  const handleRemoveVehicle = async (id) => {
    const { data } = await api.delete(`vehicle/remove/${id}`);
    toast.error(data.message);

    history.push(`/admin/veiculos`);
  };

  const handleRemoveImage = async (id) => {
    const { data } = await api.delete(`files/remove/${id}`);

    if (data.ok) {
      const imagesUpdated = images?.filter((image) => image.id !== id);

      setImages(imagesUpdated);
    }

    toast.success(data.message);
  };

  return (
    <>
      <div className="content" style={{ width: width - widthSidebarAdmin }}>
        <div className="title-section">
          <div>
            <h1>Editar veículo</h1>
            <div className="status-vehicle-container">
              <div className="status-vehicle">Status do veículo:</div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {status.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() =>
                      setStatus({ status: false, name: 'Não vendido' })
                    }
                  >
                    Não vendido
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setStatus({ status: true, name: 'Vendido' })}
                  >
                    Vendido
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <Button
            variant="danger"
            onClick={() => handleRemoveVehicle(hasVehicle.id)}
          >
            Remover veículo
          </Button>
        </div>
        <div className="box">
          <UploadImage
            send={featuredImg.send}
            urlUpload={featuredImg.urlUpload}
          />
          <div className="featured-img">
            <span>Imagem destaque</span>
            <Row style={{ marginTop: 15 }}>
              <Col xs={4}>
                <form>
                  <label htmlFor="file">
                    <span>Alterar imagem (clicar sob ela)</span>
                    <img
                      style={{ width: '100%' }}
                      src={vehicle?.thumbimage.url || noImg}
                      alt={`car-${vehicle?.id}`}
                    />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={handleChangeThumbImage}
                  />
                </form>
              </Col>
            </Row>
          </div>

          {loading ? (
            <div>Carregando imagens</div>
          ) : (
            <div className={images?.length ? 'has-images' : ''}>
              {images?.length ? (
                <div className="imgs-vehicle">
                  <span>Imagens do veículo</span>
                </div>
              ) : null}
              <Row>
                {images?.map((image) => (
                  <Col
                    key={image.id}
                    xs={6}
                    md={2}
                    style={{ marginBottom: 15 }}
                  >
                    <div className="content-img-upload">
                      <button
                        className="remove-img-upload"
                        onClick={() => handleRemoveImage(image.id)}
                      >
                        <span>X</span>
                      </button>
                      <img src={image.url} alt={`${image.id}`} />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          <Row>
            <Col xs={2}>
              <div className="add-images-to-upload">
                <form>
                  <label htmlFor="files">
                    <span>Adicionar imagens</span>
                    <img src={uploadImg} alt="upload" />
                  </label>
                  <input
                    type="file"
                    id="files"
                    multiple
                    onChange={handleChange}
                  />
                </form>
              </div>
            </Col>
          </Row>

          <Form
            className="form-edit"
            onSubmit={handleSubmit}
            initialData={vehicle ? vehicle : {}}
          >
            <Row>
              <Col md={6}>
                <label>Título</label>
                <Input name="title" type="text" placeholder="Título" />
              </Col>

              <Col md={6}>
                <label>Categoria</label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {category.name ? category.name : 'Selecione a categoria'}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {categories.map((cat) => (
                      <Dropdown.Item
                        key={cat.id}
                        onClick={() =>
                          setCategory({
                            id: cat.id,
                            name: cat.name,
                          })
                        }
                      >
                        {cat.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
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
                <Input
                  name="year_fab"
                  type="text"
                  placeholder="Ano Fabricação"
                />
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
                <Input
                  name="short_description"
                  type="text"
                  placeholder="Descrição curta"
                />
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
};

export { VehicleDetails };
