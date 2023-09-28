import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ActionSheetRef} from 'react-native-actions-sheet';
import AccountSelector from '../../Components/AccountSelector';

import jsonData from '../../Data/data.json';

const DashBoardPage = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const handleActionSheetPresentation = () => {
    actionSheetRef.current?.show();
  };

  const handleActionSheetClose = () => {
    actionSheetRef.current?.hide();
  };

  const {container, content, title, actionSheetBtn} = styles;

  return (
    <View style={container}>
      <View style={content}>
        <Text style={title}>This is the DashBoard Page</Text>
        <TouchableOpacity
          style={actionSheetBtn}
          onPress={handleActionSheetPresentation}>
          <Text>Open ActionSheet</Text>
        </TouchableOpacity>
      </View>

      <AccountSelector
        reference={actionSheetRef}
        data={jsonData.accounts}
        closeMethod={handleActionSheetClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
  },
  actionSheetBtn: {
    backgroundColor: '#b1c3e0',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});

export default DashBoardPage;
