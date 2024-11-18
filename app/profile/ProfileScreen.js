import { Link } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, List, Provider as PaperProvider } from "react-native-paper";
import React, { useState } from "react";

export default function ProfileScreen() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#e9f1ff" }}>
        <View style={styles.profileContainer}>
          <Avatar.Text size={100} label="XD" />
          <Text style={styles.profileText}>John Doe</Text>
          <Text style={styles.profileSubText}>Joined Since 2024</Text>
        </View>

        <ScrollView contentContainerStyle={styles.menuContainer}>
          <List.AccordionGroup>
            <List.Accordion
              title="Subscription Information"
              id="1"
              left={(props) => <List.Icon {...props} icon="card-account-details-outline" />}
              style={styles.menuItem}
            >
              <View style={styles.accordionContent}>
                <Text style={styles.contentText}>Plan: Premium</Text>
                <Text style={styles.contentText}>Cost: $9.99 / month</Text>
                <Text style={styles.contentText}>Next Renewal: Dec 15, 2024</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Account Information"
              id="2"
              left={(props) => <List.Icon {...props} icon="account-outline" />}
              style={styles.menuItem}
            >
              <View style={styles.accordionContent}>
                <Text style={styles.contentText}>Email: johndoe@example.com</Text>
                <Text style={styles.contentText}>Phone: +1234567890</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Change Password"
              id="3"
              left={(props) => <List.Icon {...props} icon="lock-outline" />}
              style={styles.menuItem}
            >
              <View style={styles.accordionContent}>
                <Link href="/change-password" asChild>
                  <Text style={styles.linkText}>Go to Change Password</Text>
                </Link>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Deactivate Account"
              id="4"
              left={(props) => <List.Icon {...props} icon="account-remove-outline" />}
              style={styles.menuItem}
            >
              <View style={styles.accordionContent}>
                <Text style={styles.contentText}>To deactivate your account, please contact support.</Text>
              </View>
            </List.Accordion>
          </List.AccordionGroup>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    paddingVertical: 40,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#294996",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileText: {
    marginVertical: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  profileSubText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  menuContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  menuItem: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 5,
  },
  accordionContent: {
    padding: 15,
    backgroundColor: "white",
  },
  contentText: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 2,
  },
  linkText: {
    fontSize: 16,
    color: "#007bff",
    paddingVertical: 2,
  },
});
