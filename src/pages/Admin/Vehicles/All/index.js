import React, { useState, useEffect } from 'react';
import history from '~/services/history';
import NumberFormat from 'react-number-format';
import Box from '~/components/Box';
import { Table } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesRequest } from '~/store/modules/vehicles/actions';

import noImg from '~/assets/site/no-img.jpg';

export default function AllVehicles() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.vehicles.loading);
  const { vehicles } = useSelector(state => state.vehicles);
  const [countVehicles, setCountVehicles] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    function getAllVehicles() {
      dispatch(getVehiclesRequest());
    }

    getAllVehicles()
  }, [dispatch])

  useEffect(() => {
    if (vehicles?.length) {
      setCountVehicles(vehicles.length)
    }
  }, [vehicles])

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Todos veículos</h1>
        <h6>{`${countVehicles !== null ? countVehicles : ''} ${countVehicles > 1 ? 'veículos' : 'veículo'}`}</h6>
      </div>
      <Box>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Carro</th>
              <th>Valor</th>
              <th>Descrição curta</th>
            </tr>
          </thead>
          <tbody>
          {loading && <div>carregando</div>}
          {vehicles?.map((vehicle) => (
            <tr key={vehicle.id} onClick={() => history.push(`/admin/editar/veiculo/${vehicle.id}`)}>
              <td className="td-img">
                <img
                  src={vehicle.thumbimage?.url || noImg}
                  alt={`veiculo-${vehicle.id}`}
                />
              </td>
              <td>{vehicle.title}</td>
              <td>
                <NumberFormat
                  value={vehicle.value}
                  displayType={'text'}
                  thousandSeparator={'.'}
                  decimalSeparator={','}
                  prefix={'R$'}
                  renderText={value => <h3 className={`value ${vehicle.value_per ? 'value-before adm-p' : null}`}>
                    {value}
                  </h3>}
                />

                {vehicle.value_per &&
                <NumberFormat
                  value={vehicle.value_per}
                  displayType={'text'}
                  thousandSeparator={'.'}
                  decimalSeparator={','}
                  prefix={'R$'}
                  renderText={value => <h3 className="value adm-p">{value}</h3>}
                />}
              </td>
              <td>{vehicle.short_description}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Box>
    </>
  )
}
