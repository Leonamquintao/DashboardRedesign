import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {listItem} from '.';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ACTIVE_COLOR = '#6089f7';
const INACTIVE_COLOR = '#a7a9ab';

const AccountItem = ({id, name, type, upcoming_trips}: listItem) => {
  const {
    container,
    nameText,
    iconBackground,
    infoBox,
    underlineText,
    radioButton,
    radioSelected,
  } = styles;

  const isSelected = {borderWidth: 1};
  return (
    <TouchableOpacity
      style={[container, id === 745 ? isSelected : {}]}
      key={id}>
      <View style={iconBackground}>
        {type === 'business' ? (
          <Icon name="suitcase" size={18} />
        ) : (
          <Icon name="umbrella-beach" size={18} />
        )}
      </View>
      <View style={infoBox}>
        <Text style={nameText}>{name}</Text>
        {upcoming_trips && upcoming_trips > 0 ? (
          <Text style={underlineText}>{upcoming_trips} upcoming trip</Text>
        ) : (
          <Text style={underlineText}>No active or upcoming trips</Text>
        )}
      </View>
      <View>
        <View
          style={[
            radioButton,
            id === 745
              ? {borderColor: ACTIVE_COLOR}
              : {borderColor: INACTIVE_COLOR},
          ]}>
          {id === 745 ? <View style={radioSelected} /> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    marginVertical: 6,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: ACTIVE_COLOR,
    marginHorizontal: 10,
  },
  iconBackground: {
    backgroundColor: '#ebecf0',
    padding: 10,
    borderRadius: 20,
  },
  infoBox: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '500',
  },
  underlineText: {
    fontSize: 12,
    color: INACTIVE_COLOR,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: ACTIVE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: ACTIVE_COLOR,
  },
});

export default AccountItem;
