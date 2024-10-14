import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { fetchSearchedCities } from "../../../Redux/Middleware/searchedCityMiddleware";
import {
  clearSearchedCityReducer,
  updateIsSearchLoading,
  updateSearchedCities,
} from "../../../Redux/Action/searchedCityAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(axios);

describe("fetchSearchedCities Thunk", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      searchedCityReducer: {
        searchedKeyword: "New York",
      },
    });
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it("dispatches the correct actions when a valid keyword is provided", async () => {
    const mockResponse = [{ city: "New York", country: "USA" }];
    mockAxios.onGet(/search/).reply(200, mockResponse);
    await store.dispatch(fetchSearchedCities());
    const actions = store.getActions();
    expect(actions).toEqual([
      updateIsSearchLoading(true),
      updateSearchedCities(mockResponse),
      updateIsSearchLoading(false),
    ]);
  });

  it("dispatches clearSearchedCityReducer when no keyword is provided", async () => {
    store = mockStore({
      searchedCityReducer: {
        searchedKeyword: "",
      },
    });
    await store.dispatch(fetchSearchedCities());
    const actions = store.getActions();
    expect(actions).toEqual([
      updateIsSearchLoading(true),
      clearSearchedCityReducer(),
      updateIsSearchLoading(false),
    ]);
  });

  it("handles errors from the API request", async () => {
    mockAxios.onGet(/search/).reply(500);

    await store.dispatch(fetchSearchedCities());

    const actions = store.getActions();

    expect(actions).toEqual([
      updateIsSearchLoading(true),
      updateIsSearchLoading(false),
    ]);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Request failed with status code 500"
    );
  });
});
