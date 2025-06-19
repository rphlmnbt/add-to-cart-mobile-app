import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import type { CartItem } from '../types/common';

type CartProps = {
  items: CartItem[];
  onRemove: (productId: string) => void;
};

export default function Cart({ items, onRemove }: CartProps) {
  return (
    <View style={tw`mt-6`}>
      <Text style={tw`text-xl font-bold text-white mb-2`}>
        🛒 Cart ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
      </Text>

      {items.map(item => (
        <View
          key={item.id}
          style={tw`flex-row justify-between items-center py-2 border-b border-gray-700`}
        >
          <View>
            <Text style={tw`text-white`}>
              {item.productName} {item.quantity > 1 ? `x ${item.quantity}` : ''}
            </Text>
            <Text style={tw`text-white text-sm`}>${item.price} each</Text>
          </View>
          <Button title="Remove" onPress={() => onRemove(item.id)} />
        </View>
      ))}
    </View>
  );
}
