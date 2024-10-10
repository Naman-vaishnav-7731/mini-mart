import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "react-native-paper"
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from 'yup';

const initialValues = {
    userName: '',
    password: ''
}

const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required').label('Username'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password'),
});

const LoginScreen = () => {

    const handleSubmit = (values: object) => {
        console.log("This is values", values)
    }

    return (

        <SafeAreaView style={style.container}>
            <Image source={{
                uri: 'https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography'
            }} style={style.image} />
            <Text variant="headlineLarge" style={style.title}>Login</Text>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <View style={style.inputView}>
                        <TextInput
                            label="UserName"
                            right={<TextInput.Icon icon="eye" />}
                            style={style.input}
                            textColor="black"
                            cursorColor="black"
                            underlineColor="black"
                            placeholderTextColor="black"
                            mode="flat"
                            onChangeText={handleChange('username')}
                            value={values.userName}
                        />
                        <Text style={{color: 'red'}}>{errors.userName}</Text>
                        <TextInput
                            label="password"
                            secureTextEntry
                            right={<TextInput.Icon icon="eye" />}
                            style={style.input}
                            textColor="black"
                            cursorColor="black"
                            underlineColor="black"
                            placeholderTextColor={"black"}
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                         <Text style={{color: 'red'}}>{errors.password}</Text>
                        <Button icon="login" mode="contained" onPress={() => handleSubmit()} buttonColor="black" textColor="white">
                            Login
                        </Button>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        borderRadius: 100
    },
    title: {
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "black",
        fontFamily: 'cursive'
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderWidth: 0,
        borderRadius: 7,
        backgroundColor: 'white'
    },
})

export default LoginScreen;