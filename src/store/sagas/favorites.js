import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { addFavoritesSuccess, addFavoritesFailure } from "../actions/favorites";

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
    console.log(data);
    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url
    };

    yield put(addFavoritesSuccess(repositoryData));
  } catch (err) {
    console.log('to aqui')
    yield put(addFavoritesFailure("Erro ao adicionar repositório"));
  }
}
