import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import FormTextField from '../components/FormTextField';

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '', 
    password: '',
    confirm_password: '',
    dob: '',
  });

  const handleRegister = async () => {
    // Handle the registration logic here (e.g., API request)
    console.log('Registering with:', formData);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value,
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Card style={styles.card} mode="contained">
          <Card.Content>
            <Text variant="displayLarge" style={styles.title}>Archival Alchemist</Text>
            
            <FormTextField
              label="Full Name"
              value={formData.fullname}
              onChangeText={(value) => handleInputChange('fullname', value)} // Pass value directly
            />

            <FormTextField
              label="Email"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)} // Pass value directly
              keyboardType="email-address"  // Specific prop for email input type
            />

            <FormTextField
              label="Password"
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)} // Pass value directly
              secureTextEntry={true}  // Use secureTextEntry for password field
            />

            <FormTextField
              label="Confirm Password"
              value={formData.confirm_password}
              onChangeText={(value) => handleInputChange('confirm_password', value)} // Pass value directly
              secureTextEntry={true} // Use secureTextEntry for confirm password field
            />

            <Button
              mode="contained"
              onPress={handleRegister}
              style={styles.button}
              labelStyle={{ fontSize: 16 }}
            >
              Register
            </Button>

            <Link href="/auth/login" style={styles.footerText}>
              Already have an account? Sign In
            </Link>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 25,
    elevation: 4,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#294996',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#294996',
  },
  footerText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#294996',
  },
});
