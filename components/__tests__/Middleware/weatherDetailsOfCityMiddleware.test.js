import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {
  getWeatherDetailsOfCity,
  getWeatherForecastDetailsOfCity,
} from "../../../Redux/Middleware/weatherDetailsOfCityMiddleware";
import {
  updateWeatherDetails,
  updateWeatherForecastDetails,
  weatherDetailsLoader,
  weatherForecastDetailsLoader,
} from "../../../Redux/Action/weatherDetailsOfCityAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(axios);

describe("Weather Thunks", () => {
  let store;
  let consoleLogSpy;

  beforeEach(() => {
    store = mockStore({
      weatherDetailsOfCityReducer: {
        selectedCity: { name: "New York" },
        numberOfDaysForForecast: 5,
      },
    });
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    mockAxios.reset();
    consoleLogSpy.mockRestore();
  });

  it("dispatches the correct actions for getWeatherDetailsOfCity when a valid city is provided", async () => {
    const mockResponse = { temperature: 20, condition: "Clear" };
    mockAxios.onGet(/current/).reply(200, mockResponse);

    await store.dispatch(getWeatherDetailsOfCity());
    const actions = store.getActions();
    expect(actions).toEqual([
      weatherDetailsLoader(true),
      updateWeatherDetails(mockResponse),
      weatherDetailsLoader(false),
    ]);
  });

  it("handles errors in getWeatherDetailsOfCity", async () => {
    mockAxios.onGet(/current/).reply(500);

    await store.dispatch(getWeatherDetailsOfCity());
    const actions = store.getActions();
    expect(actions).toEqual([
      weatherDetailsLoader(true),
      weatherDetailsLoader(false),
    ]);
    expect(consoleLogSpy).toHaveBeenCalledWith("error", expect.anything());
  });

  it("dispatches the correct actions for getWeatherForecastDetailsOfCity when a valid city is provided", async () => {
    const mockResponse = { forecast: [{ day: "Monday", temperature: 22 }] };
    mockAxios.onGet(/forecast/).reply(200, mockResponse);

    await store.dispatch(getWeatherForecastDetailsOfCity());
    const actions = store.getActions();
    expect(actions).toEqual([
      weatherForecastDetailsLoader(true),
      updateWeatherForecastDetails(mockResponse),
      weatherForecastDetailsLoader(false),
    ]);
  });

  it("handles errors in getWeatherForecastDetailsOfCity", async () => {
    mockAxios.onGet(/forecast/).reply(500);

    await store.dispatch(getWeatherForecastDetailsOfCity());
    const actions = store.getActions();
    expect(actions).toEqual([
      weatherForecastDetailsLoader(true),
      weatherForecastDetailsLoader(false),
    ]);
    expect(consoleLogSpy).toHaveBeenCalledWith("error", expect.anything());
  });
});
