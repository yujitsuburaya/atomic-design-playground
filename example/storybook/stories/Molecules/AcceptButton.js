// @flow
import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../../Theme';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    backgroundColor: Theme.color.white,
    shadowColor: '#2E3133',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    borderRadius: 16,
  },
});

type Props = {
  onPress?: Function,
  children: React.Node,
};

const AcceptButton = (props: Props) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={props.onPress}>
    {props.children}
  </TouchableOpacity>
);

AcceptButton.defaultProps = {
  onPress: () => {}, // デフォルト何もしない
};

export default AcceptButton;
