/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  cloudinaryPictureGet, CLOUDINARY_PICTURE_POST,
} from '../actions';

const cloudinaryMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CLOUDINARY_PICTURE_POST:
      next(action);
      const { profile_picture } = store.getState().user.settings;
      const data = new FormData();
      data.append('file', profile_picture);
      data.append('upload_preset', 'ml_default');
      data.append('api_key', '828919634686386');
      axios({
        method: 'POST',
        url: 'https://api.cloudinary.com/v1_1/playtogether/image/upload',
        body: data,
      })
      // fetch('https://api.cloudinary.com/v1_1/playtogether/image/upload',
      //   {
      //     method: 'post',
      //     body: data,
      //   })
        .then((res) => {
          console.log(res.data);
          const actionGetPicture = cloudinaryPictureGet(res.data);
          store.dispatch(actionGetPicture);
          console.log('Je reçois la nouvelle photo', actionGetPicture);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default:
      next(action);
  }
};

export default cloudinaryMiddleware;
