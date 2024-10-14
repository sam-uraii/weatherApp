import React from "react";
import { ActivityIndicator } from "react-native";
import WeatherForecastDaysList from "./WeatherForecastDaysList";

export default function ForecastListWrapper({
  isWeatherForecastDetailsLoading,
  isWeatherDetailsLoading,
  areWeatherDetailsVisible,
  weatherForecastDetails,
}) {
  return isWeatherForecastDetailsLoading ? (
    <ActivityIndicator
      size={35}
      style={{ top: isWeatherDetailsLoading ? 250 : 0 }}
      color="black"
    />
  ) : (
    areWeatherDetailsVisible && (
      <WeatherForecastDaysList
        weatherForecastDetails={weatherForecastDetails}
      />
    )
  );
}
