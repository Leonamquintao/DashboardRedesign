import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import AccountItem from './AccountItem';

export type listItem = {
  id: number;
  name: string;
  type: string;
  upcoming_trips: number | null;
};

interface AccountSelectorProps {
  reference: any;
  data: listItem[];
  closeMethod: () => void;
}

const AccountSelector = ({
  reference,
  data,
  closeMethod,
}: AccountSelectorProps) => {
  const {actionSheetContainerStyle, actionSheetTitle, actionSheetClosePill} =
    styles;

  return (
    <ActionSheet ref={reference} containerStyle={actionSheetContainerStyle}>
      <TouchableOpacity onPress={closeMethod} style={actionSheetClosePill} />
      <Text style={actionSheetTitle}>Switch Accounts</Text>

      {data.map((item: listItem) => (
        <AccountItem {...item} />
      ))}
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  actionSheetContainerStyle: {
    minHeight: 300,
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  actionSheetClosePill: {
    backgroundColor: '#e6e9ed',
    height: 6,
    width: 60,
    marginBottom: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  actionSheetTitle: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default AccountSelector;
