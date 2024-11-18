import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import { Card, Title, TouchableRipple, PaperProvider, Menu, IconButton } from 'react-native-paper';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';  

export default function GroupClass() {
  const [visible, setVisible] = useState(false);

  const handleCardPress = (cardName) => {
    console.log(`${cardName} pressed`);
    // Add navigation logic or actions you want to perform on press
  };

  const handleLeaveClass = () => {
    console.log('Leave Class pressed');
    // Add the logic for leaving the class here
  };

  const handleViewMembers = () => {
    console.log('View Members pressed');
    // Add the logic for viewing class members here
  };

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        
        {/* Class Header Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.classTitle}>Capstone Manuscript Group</Text>

            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<IconButton  icon={() => <Entypo name="dots-three-vertical" size={20} color="white" />} onPress={openMenu} />}
            > 
              <Menu.Item onPress={handleLeaveClass} title="Leave Class" />
              <Menu.Item onPress={handleViewMembers} title="View Members" />
            </Menu>
          </View>
        </View>

        {/* Card Section */}
        <View style={styles.cardContainer}>

          <TouchableRipple 
            style={styles.card} 
            onPress={() => handleCardPress('Upload Capstone Manuscript')}>
            <Card.Content style={styles.cardContent}>
              <Ionicons name="cloud-upload-outline" size={40} color="#294996" style={styles.cardIcon} />
              <Title style={styles.cardTitle}>Upload Capstone Manuscript</Title>
            </Card.Content>
          </TouchableRipple>

          <TouchableRipple 
            style={styles.card} 
            onPress={() => handleCardPress('Track Capstone Manuscript')}>
            <Card.Content style={styles.cardContent}>
              <Ionicons name="book-outline" size={40} color="#294996" style={styles.cardIcon} />
              <Title style={styles.cardTitle}>Track Capstone Manuscript</Title>
            </Card.Content>
          </TouchableRipple>

          <TouchableRipple 
            style={styles.card} 
            onPress={() => handleCardPress('View Approved Manuscript')}>
            <Card.Content style={styles.cardContent}>
              <Ionicons name="eye-outline" size={40} color="#294996" style={styles.cardIcon} />
              <Title style={styles.cardTitle}>View Approved Manuscript</Title>
            </Card.Content>
          </TouchableRipple>

        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f1ff',
    padding: 10,
  },
  header: {
    backgroundColor: '#294996', 
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  classTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff', // White text for the class title
  },
  menuButton: {
    marginLeft: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ff6347', // Red background for the buttons
    borderRadius: 8,
  },
  cardContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 25,
    borderRadius: 12,
    elevation: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardContent: {
    padding: 15,
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
