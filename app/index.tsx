import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImgGoogle from '../assets/images/GoogleImg'



export default function index() {


    return (
        <View style={styles.wrapper}>
            <Text style={styles.textLogin}>Login</Text>
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
                        <Text style={styles.title}>Email Addess</Text>
                        <TextInput placeholder='Rhebhek@gmail.com' placeholderTextColor={'#BABABA'} style={styles.inp}></TextInput>
                    </View>
                    <View style={styles.inpAndTitle}>
                        <Text style={styles.title}>Password</Text>
                        <TextInput placeholder='' placeholderTextColor={'#BABABA'} style={styles.inp}></TextInput>
                    </View>
                </View>
                <View></View>
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
        gap:25
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
    }
});
