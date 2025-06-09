
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const SreejitaKiranaShop = () => {
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [purchases, setPurchases] = useState([]);

  const addPurchase = () => {
    if (!itemName || !amount || !date) {
      alert('Please fill in all fields!');
      return;
    }
    setPurchases([...purchases, { id: Date.now().toString(), itemName, amount: parseFloat(amount), date }]);
    setItemName('');
    setAmount('');
    setDate('');
  };

  const totalAmount = purchases.reduce((acc, p) => acc + p.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sreejita Kirana Shop</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={itemName}
          onChangeText={setItemName}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount ($)"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TouchableOpacity style={styles.button} onPress={addPurchase}>
          <Text style={styles.buttonText}>Add Purchase</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={purchases}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.purchaseItem}>
            <Text style={styles.purchaseText}>{item.itemName} - ${item.amount} - {item.date}</Text>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount: ${totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default SreejitaKiranaShop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0077b6',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  input: {
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    padding: 10,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#00b4d8',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  purchaseItem: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  purchaseText: {
    fontSize: 16,
    color: '#333',
  },
  totalContainer: {
    backgroundColor: '#0077b6',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  totalText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
