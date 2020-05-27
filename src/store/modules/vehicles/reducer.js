import produce from 'immer';

const INITIAL_STATE = {
  data: null,
  vehicles: null,
  id: null,
  vehicle: null,
  loading: null,
  error: null,
  file: null,
  fileSended: null,
  files: [],
  filesSended: null,
  message: null,
};

export default function vehicles(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@vehicles/SEND_VEHICLE_REQUEST': {
        draft.loading = true;
        draft.data = action.payload.data;
        break;
      }
      case '@vehicles/SEND_VEHICLE_SUCCESS': {
        draft.loading = false;
        draft.message = action.payload.message;
        break;
      }
      case '@vehicles/SEND_VEHICLE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@vehicles/GET_VEHICLES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@vehicles/GET_VEHICLES_SUCCESS': {
        draft.loading = false;
        draft.vehicles = action.payload.vehicles;
        break;
      }
      case '@vehicles/GET_VEHICLES_FAILURE': {
        draft.loading = false;
        draft.error = 'Algo deu errado.';
        break;
      }
      case '@vehicles/GET_VEHICLE_DETAIL_REQUEST': {
        draft.loading = true;
        draft.id = action.payload.id;
        break;
      }
      case '@vehicles/GET_VEHICLE_DETAIL_SUCCESS': {
        draft.loading = false;
        draft.vehicle = action.payload.vehicle;
        break;
      }
      case '@vehicles/GET_VEHICLE_DETAIL_FAILURE': {
        draft.loading = false;
        draft.error = 'Algo deu errado.';
        break;
      }
      case '@vehicles/SEND_THUMBIMAGE_VEHICLE_REQUEST': {
        draft.loading = true;
        draft.id = action.payload.id;
        draft.file = action.payload.file;
        break;
      }
      case '@vehicles/SEND_THUMBIMAGE_VEHICLE_SUCCESS': {
        draft.loading = false;
        draft.fileSended = action.payload.fileSended;
        break;
      }
      case '@vehicles/SEND_THUMBIMAGE_VEHICLE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@vehicles/SEND_IMAGES_VEHICLE_REQUEST': {
        draft.loading = true;
        draft.id = action.payload.id;
        draft.files = action.payload.files;
        break;
      }
      case '@vehicles/SEND_IMAGES_VEHICLE_SUCCESS': {
        draft.loading = false;
        draft.filesSended = action.payload.filesSended;
        break;
      }
      case '@vehicles/SEND_IMAGES_VEHICLE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@vehicles/REMOVE_VEHICLE_REQUEST': {
        draft.loading = true;
        draft.id = action.payload.id;
        break;
      }
      case '@vehicles/REMOVE_VEHICLE_SUCCESS': {
        draft.loading = false;
        draft.message = action.payload.message;
        break;
      }
      case '@vehicles/REMOVE_VEHICLE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@vehicles/REMOVE_IMAGE_VEHICLE_REQUEST': {
        draft.loading = true;
        draft.id = action.payload.id;
        break;
      }
      case '@vehicles/REMOVE_IMAGE_VEHICLE_SUCCESS': {
        draft.loading = false;
        draft.message = action.payload.message;
        break;
      }
      case '@vehicles/REMOVE_IMAGE_VEHICLE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
