import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Icon, ListItem } from "@rneui/themed";
import { connect } from "react-redux";
import { dateFormatter } from "../../utils";
import { Link } from "expo-router";
import { updateSelectedDayDetails } from "../../Redux/Action/selectedDayForecastDetailsAction";
const WeatherForecastDaysList = ({
  weatherForecastDetails,
  updateSelectedDayDetails,
  selectedDayIndex,
}) => {
  const handleCitySelection = async (item) => {};
  let flatlistRef = useRef(null);
  useEffect(() => {
    if (selectedDayIndex) {
      setTimeout(() => {
        flatlistRef.scrollToIndex({
          animated: true,
          index: selectedDayIndex,
          viewOffset: 0,
          viewPosition: 0.5,
        });
      }, 500);
    }
  }, []);
  const CreateListItem = (item, index) => {
    return (
      <Link href="/CompleteWeatherReport" asChild>
        <TouchableOpacity
          onPress={() => {
            updateSelectedDayDetails(item, index);
          }}
        >
          <ListItem
            bottomDivider
            containerStyle={{
              backgroundColor:
                selectedDayIndex === index ? "rgb(65,117,155)" : "#ffffff",
              borderRadius: 35,
            }}
          >
            <Avatar
              rounded
              source={{ uri: `https:${item.day.condition.icon}` }}
            />
            <ListItem.Content>
              <ListItem.Title>{`${dateFormatter(item.date)}`}</ListItem.Title>
              <ListItem.Subtitle>{`${item.day.condition.text}, ${item.day.mintemp_c}/${item.day.maxtemp_c}°C`}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </Link>
    );
  };
  const itemSeparator = () => (
    <View style={{ width: 5, height: "100%" }}></View>
  );

  return (
    <View style={styles.box}>
      <View>
        <FlatList
          ref={(ref) => {
            flatlistRef = ref;
          }}
          data={weatherForecastDetails}
          renderItem={({ item, index }) => {
            return CreateListItem(item, index);
          }}
          horizontal={true}
          ItemSeparatorComponent={itemSeparator}
        ></FlatList>
      </View>

      <Icon
        name="swipe"
        type="material"
        color="#71797E"
        size={18}
        style={{
          marginLeft: Dimensions.get("window").width - 35,
          marginTop: 4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    marginTop: 5,
  },
});

const mapStateToProps = (state) => ({
  selectedDayIndex: state.selectedDayForecastDetailsReducer.selectedDayIndex,
});

export default connect(mapStateToProps, { updateSelectedDayDetails })(
  WeatherForecastDaysList
);
