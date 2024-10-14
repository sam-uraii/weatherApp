import React, { useEffect } from "react";
import { connect } from "react-redux";
import WeatherForecastDaysList from "../Components/Weather/WeatherForecastDaysList";
import { resetSelectedDayDetails } from "../Redux/Action/selectedDayForecastDetailsAction";
import TemperatureBox from "../Components/Weather/TemperatureBox";
import { StyleSheet, View } from "react-native";
import ConditionsMainBox from "../Components/Weather/ConditionsMainBox";
import HourlyForecastList from "../Components/Weather/HourlyForecastList";
import { defaultBackgroundColor } from "../Constants/Colors";
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
    <View style={styles.mainWrapperBox}>
      <View style={styles.weatherForecastListWrapper}>
        <WeatherForecastDaysList
          weatherForecastDetails={weatherForecastDetails}
        />
      </View>
      <View style={styles.temperatureBoxWrapper}>
        <TemperatureBox selectedDayDetails={selectedDayDetails} />
      </View>
      <View style={styles.conditionsBoxWrapper}>
        <ConditionsMainBox selectedDayDetails={selectedDayDetails} />
      </View>
      <View style={styles.hourlyForecastListWrapper}>
        <HourlyForecastList hourDetails={selectedDayDetails.hour} />
      </View>
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

const styles = StyleSheet.create({
  mainWrapperBox: { flex: 1 },
  weatherForecastListWrapper: {
    flex: 20,
    marginTop: 0,
    backgroundColor: defaultBackgroundColor,
  },
  temperatureBoxWrapper: { flex: 20 },
  conditionsBoxWrapper: { flex: 45 },
  hourlyForecastListWrapper: {
    flex: 15,
    backgroundColor: defaultBackgroundColor,
  },
});
