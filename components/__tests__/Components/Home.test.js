import React from "react";
import renderer from "react-test-renderer";
import configureStore, { Provider } from "redux-mock-store";
import Home from "../../../app/Home";
import SearchBox from "../../SearchBox";
// import { fetchSearchedCities } from "../../../Redux/Middleware/searchedCityMiddleware";
const mockStore = configureStore([]);
jest.mock("../../SearchBox", () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});
// jest.mock("../../SearchBox", () => {
//     return React.forwardRef((props, ref) => {
//       return (
//         <TextInput
//           ref={ref} // Attach the ref to the TextInput
//           placeholder="Search..."
//           onChangeText={props.onChangeText}
//         />
//       );
//     });
//   });
SearchBox;
describe("Home Component", () => {
  let store;
  const mockFetchSearchedCities = jest.fn();
  const mockUpdateSearchedKeyword = jest.fn();
  const setInputRef = jest.fn();
  const searchedKeyword = "test";
  const searchedCities = [];
  const selectedCity = null;
  const weatherDetails = {};
  const isWeatherDetailsLoading = false;
  const weatherForecastDetails = [];
  const isWeatherForecastDetailsLoading = false;
  const numberOfDaysForForecast = 1;
  beforeEach(() => {
    store = mockStore({
      searchedCityReducer: {
        searchedKeyword: "",
        searchedCities: [],
        isSearchLoading: false,
      },
      weatherDetailsOfCityReducer: {
        selectedCity: null,
        weatherDetails: {},
        isWeatherDetailsLoading: false,
        weatherForecastDetails: [],
        isWeatherForecastDetailsLoading: false,
        numberOfDaysForForecast: 1,
      },
    });
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        // <Provider store={store}>
        <Home
          fetchSearchedCities={mockFetchSearchedCities}
          updateSearchedKeyword={mockUpdateSearchedKeyword}
          searchedKeyword={searchedKeyword}
          searchedCities={searchedCities}
          selectedCity={selectedCity}
          weatherDetails={weatherDetails}
          isWeatherDetailsLoading={isWeatherDetailsLoading}
          weatherForecastDetails={weatherForecastDetails}
          isWeatherForecastDetailsLoading={isWeatherForecastDetailsLoading}
          numberOfDaysForForecast={numberOfDaysForForecast}
        />
        // </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
