import React, { useState, useEffect } from 'react';
import Box from '~/components/Box';
import { Row, Col } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';
import { sendVehicleRequest } from '~/store/modules/vehicles/actions';

import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
import draftToHtml from 'draftjs-to-html';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function AddVehicle() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorStateOptionals, setEditorStateOptionals] = useState(EditorState.createEmpty())
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  };

  const onEditorStateChangeOptionals = (editorStateOptionals) => {
    setEditorStateOptionals(editorStateOptionals)
  };

  function handleSubmit(form) {
    const description = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    const optionals = draftToHtml(convertToRaw(editorStateOptionals.getCurrentContent()))
    form.description = description
    form.optionals = optionals
    dispatch(sendVehicleRequest(form))
  }

  return (
    <>
      <h1>Adicionar veículo</h1>

      <Box>
        <Form className="form-edit" onSubmit={handleSubmit}>
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
              <label for="description">Descrição geral</label>
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
              <label for="optionals">Opcionais</label>
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
      </Box>
    </>
  );
}
