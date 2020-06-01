import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {widthSidebarAdmin} from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const VehicleAddNew: React.FC = () => {
  const { width } = useWindowDimensions();
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
  const [editorStateOptionals, setEditorStateOptionals] = React.useState(EditorState.createEmpty())

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  };

  const onEditorStateChangeOptionals = (editorStateOptionals) => {
    setEditorStateOptionals(editorStateOptionals)
  };

  async function submitForm(form) {
    const {data} = await api.post('vehicles', form);

    const id = data.id;
    toast.success('Veículo adicionado');
    history.push(`/admin/novo/veiculo/${id}/imagens`);
  }

  function handleSubmit(form) {
    const description = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    const optionals = draftToHtml(convertToRaw(editorStateOptionals.getCurrentContent()))
    form.description = description
    form.optionals = optionals

    submitForm(form);
  }

  return (
    <>
      <div className="content" style={{ width: width - widthSidebarAdmin }}>
        <div className="title-section">
          <h1>Adicionar veículo</h1>
        </div>
        <div className="box">
          <Form className="form-edit" onSubmit={handleSubmit}>
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

            <button type="submit">Salvar, seguir para imagens</button>
          </Form>
        </div>
      </div>
    </>
  );
}

export { VehicleAddNew };