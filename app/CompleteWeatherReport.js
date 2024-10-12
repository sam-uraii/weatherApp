import React, { useEffect } from "react";
import { connect } from "react-redux";
import WeatherForecastDaysList from "../Components/Weather/WeatherForecastDaysList";
import { resetSelectedDayDetails } from "../Redux/Action/selectedDayForecastDetailsAction";
import CurrentWeatherInfo from "../Components/Weather/CurrentWeatherInfo";
import TemperatureBox from "../Components/Weather/TemperatureBox";
import { View } from "react-native";
import ConditionsMainBox from "../Components/Weather/ConditionsMainBox";

const CompleteWeatherReport = ({
  weatherForecastDetails,
  resetSelectedDayDetails,
  selectedDayDetails,
}) => {
  useEffect(() => {
    return () => {
      resetSelectedDayDetails();
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 20, marginTop: 6 }}>
        <WeatherForecastDaysList
          weatherForecastDetails={weatherForecastDetails}
        />
      </View>
      <View style={{ flex: 20 }}>
        <TemperatureBox selectedDayDetails={selectedDayDetails} />
      </View>
      <View style={{ flex: 45 }}>
        <ConditionsMainBox selectedDayDetails={selectedDayDetails} />
      </View>
      <View style={{ flex: 15, backgroundColor: "purple" }}></View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  weatherForecastDetails:
    state.weatherDetailsOfCityReducer.weatherForecastDetails,
  selectedDayDetails:
    state.selectedDayForecastDetailsReducer.selectedDayDetails,
});

export default connect(mapStateToProps, { resetSelectedDayDetails })(
  CompleteWeatherReport
);
