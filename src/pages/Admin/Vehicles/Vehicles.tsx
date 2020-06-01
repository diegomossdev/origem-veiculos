import * as React from 'react';
import {Table, Button} from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import history from '../../../services/history';

import {widthSidebarAdmin} from '../../../helpers';
import useWindowDimensions from '../../../helpers/getWindowDimensions';

import noImg from '../../../assets/no-img.jpg';

import api from '../../../services/api';

interface VehiclesData {
  id: number;
  title: string;
  value: string;
  value_per: string;
  short_description: string;
  slug: string;
  thumbimage: {
    id: number;
    url: string;
    name: string;
    path: string;
  };
}

const Vehicles: React.FC = () => {
  const { width } = useWindowDimensions();

  const [vehicles, setVehicles] = React.useState<[VehiclesData] | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0)

    async function getAllVehicles() {
      setLoading(true);
      const {data} = await api.get('vehicles');
      setLoading(false);

      setVehicles(data);
    };

    getAllVehicles();
  }, []);

  return (
    <>
      <div className="content" style={{ width: width - widthSidebarAdmin }}>
        <div className="title-section">
          <h1>Veículos cadastrados</h1>
          <Button variant="primary" onClick={() => history.push(`/admin/novo/veiculo`)}>
            Adicionar veículo
          </Button>
        </div>
        <div className="box">
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
        </div>
      </div>
    </>
  );
}

export { Vehicles };