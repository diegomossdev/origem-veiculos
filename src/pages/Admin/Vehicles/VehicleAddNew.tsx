import * as React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { UploadImage } from '../../../components/Admin';

import { widthSidebarAdmin } from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface Props {
  location: any;
}

const VehicleAddNew: React.FC<any> = (props) => {
  const hasProduct = props.location;
  React.useEffect(() => {
    console.log('hasProduct', hasProduct);
  }, [hasProduct]);
  const [productEdit, setProductEdit] = React.useState({
    // id: hasProduct?.id,
    // name: hasProduct?.name,
    description: hasProduct?.description,
    // image: hasProduct?.image,
    // attributes: hasProduct?.attributes
  });
  const { width } = useWindowDimensions();
  const [editorState, setEditorState] = React.useState(
    hasProduct?.name
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(productEdit.description)
          )
        )
      : EditorState.createEmpty()
  );
  const [editorStateOptionals, setEditorStateOptionals] = React.useState(
    EditorState.createEmpty()
  );
  const [featuredImg, setFeaturedImg] = React.useState<any>({
    send: false,
    urlUpload: '',
  });
  const [categories, setCategories] = React.useState<any>([]);
  const [category, setCategory] = React.useState<any>({
    id: null,
    name: null,
  });
  const [loading, setLoading] = React.useState<boolean>(false);

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
    getCategories();
    window.scrollTo(0, 0);
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const onEditorStateChangeOptionals = (editorStateOptionals) => {
    setEditorStateOptionals(editorStateOptionals);
  };

  async function submitForm(form) {
    const { data } = await api.post('vehicles', form);

    const id = data.id;
    setFeaturedImg({ send: true, urlUpload: `vehicles/${id}` });
    // toast.success('Veículo adicionado');
    // history.push(`/admin/novo/veiculo/${id}/imagens`);
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

    submitForm(form);
  }

  return (
    <>
      <div className="content" style={{ width: width - widthSidebarAdmin }}>
        <div className="title-section">
          <h1>Adicionar veículo</h1>
        </div>
        <div className="box">
          <UploadImage
            send={featuredImg.send}
            urlUpload={featuredImg.urlUpload}
          />
          <Form className="form-edit" onSubmit={handleSubmit}>
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

            <button type="submit">Salvar, seguir para imagens</button>
          </Form>
        </div>
      </div>
    </>
  );
};

export { VehicleAddNew };
