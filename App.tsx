import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './screens/Main';

const App: React.FC<Props> = () => {
  return (
    <Fragment>
      <Main />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023047',
    flex: 1,
  },
});

export default App;
