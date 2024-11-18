import { Link } from 'expo-router'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

export default function forgotPassword() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Forgot Password</Text>
            <View style={styles.wrapperBtn}>
                <Text style={styles.test}>
                    Enter the email address registered with your account. We'll send you a
                    link to reset your password.
                </Text>
            </View>
            <View style={styles.wrapperBtn}>
                <View style={styles.wrapperInput}>
                    <View style={styles.inpAndTitle}>
                        <Text style={styles.title}>Email Addess</Text>

                        <TextInput
                            placeholder='Email Addess'
                            placeholderTextColor={'#BABABA'}
                            style={styles.inp}
                        ></TextInput>
                    </View>
                </View>
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnCreateAcount}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text>Remembered password? </Text>
                <Link href={'/'}>
                    <Text style={{ color: '#1443C3' }}>Login to your account</Text>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        gap: 40,
    },
    textTitle: {
        marginTop: 20,
        fontFamily: 'SF Pro Display',
        fontSize: 24,
        fontWeight: 700,
    },
    wrapperBtn: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 24,
    },

    test: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
    },

    wrapperInput: {
        gap: 25,
        width: '100%',
    },
    inpAndTitle: {
        width: '100%',
        flexDirection: 'column',
        gap: 4,
    },
    title: {
        fontFamily: 'SF Pro Display',
        fontSize: 16,
        fontWeight: 700,
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
        color: '#323232',
    },

    btnCreateAcount: {
        backgroundColor: '#1443C3',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
    },
    buttonText: {
        color: '#FEFEFE',
    },
})