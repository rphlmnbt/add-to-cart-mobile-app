import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Cart({ items, onRemove }) {
  return (
    <View style={tw`mt-6`}>
      <Text style={tw`text-xl font-bold`}>🛒 Cart ({items.length})</Text>
      {items.map((item, index) => (
        <View key={index} style={tw`flex-row justify-between items-center py-2 border-b`}>
          <Text>{item.productName} - ${item.price}</Text>
          <Button title="Remove" onPress={() => onRemove(index)} />
        </View>
      ))}
    </View>
  );
}