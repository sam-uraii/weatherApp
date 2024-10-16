import React, { useCallback, useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Icon, Image, ListItem } from "@rneui/themed";
import { connect } from "react-redux";
import { dateFormatter } from "../../utils";
import { Link } from "expo-router";
import { updateSelectedDayDetails } from "../../Redux/Action/selectedDayForecastDetailsAction";
const WeatherForecastDaysList = ({
  weatherForecastDetails,
  updateSelectedDayDetails,
  selectedDayIndex,
}) => {
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
                selectedDayIndex === index ? "#000000" : "#ffffff",
              borderRadius: 35,
            }}
          >
            <Image
              transition={true}
              transitionDuration={5000}
              containerStyle={{ width: 50, height: 50 }}
              source={{ uri: `https:${item.day.condition.icon}` }}
            ></Image>
            <ListItem.Content>
              <ListItem.Title
                style={{
                  color: selectedDayIndex === index ? "#ffffff" : "#000000",
                }}
              >{`${dateFormatter(item.date)}`}</ListItem.Title>
              <ListItem.Subtitle
                style={{
                  color: selectedDayIndex === index ? "#ffffff" : "#000000",
                }}
              >{`${item.day.condition.text}, ${item.day.mintemp_c}/${item.day.maxtemp_c}°C`}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      </Link>
    );
  };
  const itemSeparator = () => (
    <View style={{ width: 5, height: "100%" }}></View>
  );
  const keyExtractor = useCallback((item, index) => `${index}`, []);
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
          removeClippedSubviews={true}
          keyExtractor={keyExtractor}
        ></FlatList>
      </View>

      <Icon
        name="swipe"
        type="material"
        color="#71797E"
        size={18}
        style={{
          marginLeft: Dimensions.get("window").width - 55,
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
    marginTop: 15,
  },
});

const mapStateToProps = (state) => ({
  selectedDayIndex: state.selectedDayForecastDetailsReducer.selectedDayIndex,
});

export default connect(mapStateToProps, { updateSelectedDayDetails })(
  WeatherForecastDaysList
);
