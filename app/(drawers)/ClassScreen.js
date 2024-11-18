import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, StyleSheet, Modal, TextInput } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import FormTextField from '../../components/FormTextField';
import GroupClass from '../class/group_class';

export default function ClassScreen() {
  const [visible, setVisible] = useState(false);
  const [classCode, setClassCode] = useState(''); 
  const [joinedClass, setJoinedClass] = useState(false); 

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleChangeText = useCallback((text) => {
    setClassCode(text);
  }, []);

  const handleJoinClass = () => {
    if (classCode.trim()) {
      setJoinedClass(true); 
      hideModal();
    } else {
      alert("Please enter a valid class code!"); 
    }
  };

  if (joinedClass) {
    return <GroupClass />
  }

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#e9f1ff' }}>
        <View style={styles.container}>
          <Button
            mode="contained"
            style={styles.joinButton}
            labelStyle={styles.buttonLabel}
            onPress={showModal} 
          >
            Join Class
          </Button>
        </View>

        <Modal
          visible={visible}
          animationType="slide"
          transparent={true}
          onRequestClose={hideModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FormTextField label="Enter class code" 
                value={classCode}
                onChangeText={handleChangeText}
              />
              <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between'
              }}>
              <Button
                mode="contained"
                style={{ backgroundColor: "#294996", marginTop: 10, borderRadius: 5 }}
                onPress={handleJoinClass} 
              >
                Join
              </Button>
              <Button onPress={hideModal}>Cancel</Button>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButton: {
    borderRadius: 10,
    backgroundColor: "#294996",
  },
  buttonLabel: {
    fontSize: 18,
    padding: 3,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});