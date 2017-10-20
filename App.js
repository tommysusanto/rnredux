import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux' // To use dispatch method on app
import {fetchPeopleFromAPI} from './actions'


const App = (props) => {
  const {isFetching, people} = props.people
  console.log(props.people)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          REDUX APP
        </Text>
        <TouchableOpacity onPress={props.fetchFromAPI} style={styles.button}>
          <Text>Fetch</Text>
        </TouchableOpacity>
        {isFetching && <Text> Loading </Text>}
        {people.length ? (
          people.map((person,index) => {
            return(
              <View key={index}>
              <Text>Name: {person.name}</Text>
                </View>
            )
          })
        ):null}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button:{
    backgroundColor: 'red',
    height: 60,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// To access GET our redux state
function mapStateToProps(state){
  // state here refers to our index.js reducer
  return{
    people: state.people
  }
}

// To update our redux state
function mapDispatchToProps(dispatch){
  return{
    fetchFromAPI: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)