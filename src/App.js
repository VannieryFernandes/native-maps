import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter, Route, Link } from "react-router-native";
import store from "./store";
import Map from './views/Map'

function Home() {
  return <Text style={styles.header}>Home</Text>;
}

function About() {
  return <Text style={styles.header}>About</Text>;
}

function Topics() {
  return <Text style={styles.topic}>OPS</Text>;
}

function App() {
  return (
    <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/maps" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Map</Text>
          </Link>
          <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>About</Text>
          </Link>
          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Topics</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        
          <Route exact path="/maps" component={Map} />
        
      </View>
      
    </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#fff',


  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  },
  maps:{
    flex:1
  }
});
export default App;
