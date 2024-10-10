// Here Mention All Services related to permissions
// Here Going To Understand All Permission and All
// Implementing Advance Features Permissions in Android Deveice

// https://medium.com/@uddishverma22/mastering-permission-handling-in-react-native-2076862c7e7b
// https://github.com/iremkaraoglu/ReactNative-Permissions-Example
// https://blog.logrocket.com/react-native-permissions/


// Setup for Android 
// Update All the permissions here ( AndroidManifest.xml)

// Fundamentals and Core of Permissions
// RESULTS


// Android Permisions Flow


import {
    check,
    RESULTS,
    requestMultiple,
} from 'react-native-permissions';


// This function can be used anywhere as it supports multiple permissions. 
// It checks for permissions and then requests for it.
export async function checkMultiplePermissions(permissions: any) {
    let isPermissionGranted = false;
    const statuses = await requestMultiple(permissions);
    for (var index in permissions) {
        if (statuses[permissions[index]] === RESULTS.GRANTED) {
            isPermissionGranted = true;
        } else {
            isPermissionGranted = false;
            break;
        }
    }
    return isPermissionGranted;
}

// In case you want to check a single permission
export async function checkPermission(permission: any) {
    var isPermissionGranted = false;
    const result = await check(permission);
    switch (result) {
        case RESULTS.GRANTED:
            isPermissionGranted = true;
            break;
        case RESULTS.DENIED:
            isPermissionGranted = false;
            break;
        case RESULTS.BLOCKED:
            isPermissionGranted = false;
            break;
        case RESULTS.UNAVAILABLE:
            isPermissionGranted = false;
            break;
    }
    return isPermissionGranted;
}

// const handleCameraPermission = async () => {
//     try {
//         const isPermissionGranted = await checkPermission(permissions);
//         console.log("Is Permissions Granted", isPermissionGranted);
//         if (!isPermissionGranted) {
//             // Show an alert in case permission was not granted
//             Alert.alert(
//                 'Permission Request',
//                 'Please allow permission to access the Microphone.',
//                 [
//                     {
//                         text: 'Go to Settings',
//                         onPress: () => {
//                             Linking.openSettings();
//                         },
//                     },
//                     {
//                         text: 'Cancel',
//                         style: 'cancel',
//                     },
//                 ],
//                 { cancelable: false },
//             );
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }