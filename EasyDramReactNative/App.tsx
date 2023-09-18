import {StyleSheet, Text, View} from 'react-native';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
    
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default App;
