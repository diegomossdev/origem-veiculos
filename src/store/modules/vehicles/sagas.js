import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import { 
  sendVehicleSuccess,
  sendVehicleFailure,
  getVehiclesSuccess, 
  getVehiclesFailure, 
  getVehicleDetailSuccess, 
  getVehicleDetailFailure,
  sendThumbImageVehicleSuccess,
  sendThumbImageVehicleFailure,
  sendImagesVehicleSuccess,
  sendImagesVehicleFailure,
  removeVehicleSuccess,
  removeVehicleFailure,
  removeImageVehicleSuccess,
  removeImageVehicleFailure,
} from './actions';

import api from '../../../services/api';

export function* sendVehicle({ payload }) {
  const { data } = payload;
  try {
    const response = yield call(api.post, `vehicles`, data);

    const id = response.data.id;
    
    toast.success('Veículo adicionado');
    yield put(sendVehicleSuccess({ message: 'Veículo adicionado' }));

    history.push(`/admin/novo/veiculo/${id}/imagens`);
  } catch (error) {
    toast.error('Houve algum problema ao enviar. Tente novamente.');
    yield put(sendVehicleFailure());
  }
}

export function* vehiclesRequest() {
  try {
    const { data } = yield call(api.get, 'vehicles');

    yield put(getVehiclesSuccess(data));

  } catch (error) {
    toast.error('Houve algum problema ao carregar os veículos. Tente novamente.');
    yield put(getVehiclesFailure());
  }
}

export function* vehicleDetailRequest({ payload }) {
  const { id } = payload;
  try {
    const { data } = yield call(api.get, `vehicles/${id}`);

    yield put(getVehicleDetailSuccess(data));

  } catch (error) {
    toast.error('Houve algum problema ao carregar este veículo. Tente novamente.');
    yield put(getVehicleDetailFailure());
  }
}

export function* sendThumbImageVehicle({ payload }) {
  const { id, file } = payload;
  try {
    let formData = new FormData();
    formData.append('file', file)

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    const { data } = yield call(api.patch, `vehicles/${id}`, formData, config);

    toast.success(data.message);
    yield put(sendThumbImageVehicleSuccess(data));

  } catch (error) {
    toast.error('Houve algum problema ao enviar a imagem. Tente novamente.');
    yield put(sendThumbImageVehicleFailure());
  }
}

export function* sendImagesVehicle({ payload }) {
  const { id, files } = payload;
  try {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i])
    }

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    const { data } = yield call(api.post, `files/vehicle/${id}`, formData, config);

    toast.success(data.message);
    yield put(sendImagesVehicleSuccess(data));

  } catch (error) {
    toast.error('Houve algum problema ao enviar as imagens. Tente novamente.');
    yield put(sendImagesVehicleFailure());
  }
}

export function* removeVehicle({ payload }) {
  const { id } = payload;
  try {
    const { data } = yield call(api.delete, `vehicle/remove/${id}`);

    toast.success(data.message);
    yield put(removeVehicleSuccess(data.message));

    history.push(`/admin/veiculos`);
  } catch (error) {
    toast.error('Houve algum problema ao excluir o veículo. Tente novamente.');
    yield put(removeVehicleFailure());
  }
}

export function* removeImageVehicle({ payload }) {
  const { id } = payload;
  try {
    const { data } = yield call(api.delete, `files/remove/${id}`);

    toast.success(data.message);
    yield put(removeImageVehicleSuccess(data.message));

  } catch (error) {
    toast.error('Houve algum problema ao excluir a imagem. Tente novamente.');
    yield put(removeImageVehicleFailure());
  }
}

export default all([
  takeLatest('@vehicles/SEND_VEHICLE_REQUEST', sendVehicle),
  takeLatest('@vehicles/GET_VEHICLES_REQUEST', vehiclesRequest),
  takeLatest('@vehicles/GET_VEHICLE_DETAIL_REQUEST', vehicleDetailRequest),
  takeLatest('@vehicles/SEND_THUMBIMAGE_VEHICLE_REQUEST', sendThumbImageVehicle),
  takeLatest('@vehicles/SEND_IMAGES_VEHICLE_REQUEST', sendImagesVehicle),
  takeLatest('@vehicles/REMOVE_VEHICLE_REQUEST', removeVehicle),
  takeLatest('@vehicles/REMOVE_IMAGE_VEHICLE_REQUEST', removeImageVehicle),
]);
