import { StyleSheet, Button, Text, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flex: 1 significa q vai usar 100% da tela
    backgroundColor: '#f8f8f8',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 80,
  },
 
});
