export function sendVehicleRequest(data) {
  return {
    type: '@vehicles/SEND_VEHICLE_REQUEST',
    payload: { data },
  };
}

export function sendVehicleSuccess(message) {
  return {
    type: '@vehicles/SEND_VEHICLE_SUCCESS',
    payload: { message },
  };
}

export function sendVehicleFailure() {
  return {
    type: '@vehicles/SEND_VEHICLE_FAILURE',
  };
}

export function getVehiclesRequest() {
  return {
    type: '@vehicles/GET_VEHICLES_REQUEST',
  };
}

export function getVehiclesSuccess(vehicles) {
  return {
    type: '@vehicles/GET_VEHICLES_SUCCESS',
    payload: { vehicles },
  };
}

export function getVehiclesFailure() {
  return {
    type: '@vehicles/GET_VEHICLES_FAILURE',
  };
}

export function getVehicleDetailRequest(id) {
  return {
    type: '@vehicles/GET_VEHICLE_DETAIL_REQUEST',
    payload: { id },
  };
}

export function getVehicleDetailSuccess(vehicle) {
  return {
    type: '@vehicles/GET_VEHICLE_DETAIL_SUCCESS',
    payload: { vehicle },
  };
}

export function getVehicleDetailFailure() {
  return {
    type: '@vehicles/GET_VEHICLE_DETAIL_FAILURE',
  };
}

export function sendThumbImageVehicleRequest(id, file) {
  return {
    type: '@vehicles/SEND_THUMBIMAGE_VEHICLE_REQUEST',
    payload: { id, file },
  };
}

export function sendThumbImageVehicleSuccess(fileSended) {
  return {
    type: '@vehicles/SEND_THUMBIMAGE_VEHICLE_SUCCESS',
    payload: { fileSended },
  };
}

export function sendThumbImageVehicleFailure() {
  return {
    type: '@vehicles/SEND_THUMBIMAGE_VEHICLE_FAILURE',
  };
}

export function sendImagesVehicleRequest(id, files) {
  return {
    type: '@vehicles/SEND_IMAGES_VEHICLE_REQUEST',
    payload: { id, files },
  };
}

export function sendImagesVehicleSuccess(filesSended) {
  return {
    type: '@vehicles/SEND_IMAGES_VEHICLE_SUCCESS',
    payload: { filesSended },
  };
}

export function sendImagesVehicleFailure() {
  return {
    type: '@vehicles/SEND_IMAGES_VEHICLE_FAILURE',
  };
}

export function removeVehicleRequest(id) {
  return {
    type: '@vehicles/REMOVE_VEHICLE_REQUEST',
    payload: { id },
  };
}

export function removeVehicleSuccess(message) {
  return {
    type: '@vehicles/REMOVE_VEHICLE_SUCCESS',
    payload: { message },
  };
}

export function removeVehicleFailure() {
  return {
    type: '@vehicles/REMOVE_VEHICLE_FAILURE',
  };
}

export function removeImageVehicleRequest(id) {
  return {
    type: '@vehicles/REMOVE_IMAGE_VEHICLE_REQUEST',
    payload: { id },
  };
}

export function removeImageVehicleSuccess(message) {
  return {
    type: '@vehicles/REMOVE_IMAGE_VEHICLE_SUCCESS',
    payload: { message },
  };
}

export function removeImageVehicleFailure() {
  return {
    type: '@vehicles/REMOVE_IMAGE_VEHICLE_FAILURE',
  };
}