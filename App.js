import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar, HStack, IconButton, Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <AppBar
          title="Title"
          color="green"
          leading={props => (
            <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
          )}
          trailing={props => (
            <HStack>
              <IconButton
                icon={props => <Icon name="magnify" {...props} />}
                {...props}
              />
              <IconButton
                icon={props => <Icon name="dots-vertical" {...props} />}
                {...props}
              />
            </HStack>
          )}
        />
      </View>
      <View style={styles.textinput}>
        <Stack spacing={2} style={{ margin: 16 }}>
          <TextInput
            label="Benutzername"
            variant="outlined"
            trailing={props => (
              <IconButton icon={props => <Icon name="account" {...props} />} {...props} />
            )}
          />
          <TextInput
            label="Passwort"
            variant="outlined"
            trailing={props => (
              <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
            )}
          />
        </Stack>
      </View>
      <View style={styles.buttons}>
        <HStack spacing={4}>
          <Button title="Login" color="green" />
          <Button variant="text" color="green" title="Abbrechen" />
        </HStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    marginTop: 20,
  },
  buttons: {
    alignItems: "center",
  },
});
