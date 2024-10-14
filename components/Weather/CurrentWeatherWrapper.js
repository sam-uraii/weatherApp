import React from "react";
import { ActivityIndicator, View } from "react-native";
import { FORECAST_DAYS } from "../../Constants/DropdownConstants";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import DropDown from "../DropDown";

export default function CurrentWeatherWrapper({
  isWeatherDetailsLoading,
  areWeatherDetailsVisible,
  weatherDetails,
  updateNumberOfDaysForForecast,
  numberOfDaysForForecast,
}) {
  return isWeatherDetailsLoading ? (
    <ActivityIndicator size={35} color="black" />
  ) : (
    areWeatherDetailsVisible && (
      <>
        <CurrentWeatherInfo weatherDetails={weatherDetails} />
        <View style={{ alignItems: "center" }}>
          <DropDown
            updateNumberOfDaysForForecast={updateNumberOfDaysForForecast}
            data={FORECAST_DAYS}
            numberOfDaysForForecast={numberOfDaysForForecast}
          />
        </View>
      </>
    )
  );
}
