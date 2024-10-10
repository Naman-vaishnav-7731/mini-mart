import React from 'react';
import { useState } from "react";
import { PERMISSIONS, request } from "react-native-permissions";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Button, Portal, Modal } from 'react-native-paper';

const PermissionScreen = () => {

    const [permissionResult, setPermissionResult] = useState<String>('Not asked');
    const [visible, setVisible] = useState<boolean>(false);

    const requestForCameraPermission = async () => {
        try {
            const result = await request(PERMISSIONS.ANDROID.CAMERA);
            setPermissionResult(result);
            console.log("This is check", result);
        } catch (error) {
            console.log(error);
        }
    }

    const requestForMicrophonePermission = async () => {
        try {
            const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
            setPermissionResult(result);
            console.log("This is check", result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <SafeAreaView style={styles.root}>
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>Permissions Needed</Text>
                    <View style={styles.mainContainer}>
                        <View>
                            <Button
                                icon="camera"
                                mode="contained"
                                onPress={() => {
                                    setVisible(true)
                                    requestForCameraPermission()
                                }
                                }>
                                Camera Permission
                            </Button>
                        </View>
                        <View>
                            <Button icon="camera"
                                mode="contained"
                                onPress={() =>  {
                                    setVisible(true)
                                    requestForMicrophonePermission()
                                }}>
                                Microphone Permission
                            </Button>
                        </View>
                        <View>
                            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                                Any Permission
                            </Button>
                        </View>
                    </View>
                </ScrollView>


                <Portal>
                    <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
                        <Text style={styles.modalText}>Permission Status : {permissionResult}</Text>
                    </Modal>
                </Portal>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    container: {
        marginTop: 40,
        width: '90%',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
        color: 'black',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        gap: 14,
        alignItems: 'center',
        marginTop: 30,
    },
    modalText: {
        color: 'black'
    }
});

export default PermissionScreen;