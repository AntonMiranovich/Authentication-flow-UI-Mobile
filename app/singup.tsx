import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImgGoogle from '../assets/images/GoogleImg'
import Shape from '../assets/images/Shape'
import { useState } from 'react';
import { Link } from 'expo-router';


export default function singup() {
    const [flag, setFlag] = useState(false)

    return (
        <View style={styles.wrapper}>
            <Text style={styles.textLogin}>Singup</Text>
            <View style={styles.wrapperBtn}>
                <TouchableOpacity style={styles.btn}>
                    <ImgGoogle></ImgGoogle>
                </TouchableOpacity>
                <View style={styles.wrapperSingIn}>
                    <View style={styles.line}></View>
                    <Text style={styles.singInTest}>or sign in with</Text>
                    <View style={styles.line}></View>
                </View>
            </View>
            <View style={styles.wrapperBtn}>
                <View style={styles.wrapperInput}>
                    <View style={styles.inpAndTitle}>
                        <Text style={styles.title}>Full Name</Text>
                        <TextInput placeholder='Becca Ade' placeholderTextColor={'#BABABA'} style={styles.inp}></TextInput>
                    </View>

                    <View style={styles.inpAndTitle}>
                        <Text style={styles.title}>Email Addess</Text>
                        <TextInput placeholder='Email' placeholderTextColor={'#BABABA'} style={styles.inp}></TextInput>
                    </View>
                    <View style={styles.inpAndTitle}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Password</Text>
                        </View>
                        <TextInput placeholder='Password' secureTextEntry={true} placeholderTextColor={'#BABABA'} style={styles.inp}></TextInput>
                    </View>
                    <View style={styles.inpAndTitle}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Confirm Password</Text>
                        </View>
                        <TextInput placeholder='Confirm Password' secureTextEntry={true} placeholderTextColor={'#BABABA'} style={styles.inp}></TextInput>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={styles.containerCheckbox}>
                    <TouchableOpacity onPress={() => setFlag(!flag)} style={styles.checkbox}>
                        {flag ? <Shape style={styles.checkboxChecked}></Shape> : <View style={styles.checkboxUnchecked} />}
                    </TouchableOpacity>
                    <Text style={styles.label}>By Creating an Account, i accept Hiring Hub terms of Use and Privacy Policy</Text>
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text>Don’t have an Account? </Text>
                <Link href={'/'}>
                    <Text style={{ color: '#1443C3' }}>Have an Account?</Text>
                </Link>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        gap: 40,
    },
    textLogin: {
        fontSize: 24,
        fontWeight: 700,
    },
    wrapperBtn: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 24,
    },
    btn: {
        width: '90%',
        paddingVertical: 16,
        backgroundColor: '#F4F7FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapperSingIn: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    singInTest: {
        fontSize: 14,
        fontWeight: 500,
        padding: 8,
    },
    line: {
        height: 1,
        width: '35%',
        backgroundColor: '#CBD2E0'
    },
    wrapperInput: {
        width: '90%',
        gap: 25
    },
    inpAndTitle: {
        width: '100%',
        flexDirection: 'column',
        gap: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: 400,
    },
    inp: {
        width: '100%',
        padding: 16,
        borderColor: '#CBD2E0',
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: 500,
        color: '#323232'
    },
    containerCheckbox: {
        width: '90%',
        flexDirection: 'row',
        margin: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        width: 18,
        height: 18,
    },
    checkboxUnchecked: {
		borderWidth: 1,
		borderColor: '#12ae97',
		borderRadius: 3,
		width: 18,
		height: 18,
		backgroundColor: '#FFF',
	},
    label: {
        fontSize: 16,
    },
    btnLogin: {
        backgroundColor: '#1443C3',
        color: '#FEFEFE',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
    },
    buttonText: {
        color: '#FEFEFE',
    }
})
