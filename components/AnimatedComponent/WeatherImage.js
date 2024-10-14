import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

const WeatherImage = ({ imageUri }) => {
  const opacity = useSharedValue(1);
  const [localImageUri, setLocalImageUri] = useState(imageUri);

  useEffect(() => {
    opacity.value = withTiming(0, { duration: 500 }, () => {
      runOnJS(setLocalImageUri)(imageUri);
      opacity.value = withTiming(1, { duration: 500 });
    });
  }, [imageUri]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.imageContainer, animatedStyle]}>
      <Image
        style={styles.image}
        source={{
          uri: localImageUri,
        }}
      ></Image>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default WeatherImage;
