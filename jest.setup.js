// Mock react-native-reanimated
jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // Override the call method to avoid errors
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock("@rneui/themed", () => {
  return {
    ListItem: jest.fn(),
    SearchBar: jest.fn(),
  };
});

jest.mock("react-redux", () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (Component) => {
      // Return a new component that renders the passed component
      return (props) => <Component {...props} />;
    },
  };
});
jest.mock("expo-router", () => {
  return {
    Link: jest.fn(),
  };
});
