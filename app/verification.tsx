import { Link } from 'expo-router'
import { useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

export default function verification() {
    const [inpVal, setInpVal] = useState(['', '', '', '', '', '']);
    const inputs = useRef<(TextInput | null)[]>([])

    const changeText = (text: any, index: any) => {
        let newInpVal = [...inpVal];
        newInpVal[index] = text;
        setInpVal(newInpVal);
        if (text && index < 5) inputs.current[index + 1]?.focus();
    };

    const pressKey = (e: any, index: any) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !inpVal[index]) inputs.current[index - 1]?.focus();
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Please verify your email address</Text>
            <View style={styles.wrapperBtn}>
                <Text style={styles.verificationTest}>
                    We’ve sent an email to becca@gmail.com, please enter the code below.
                </Text>
            </View>
            <View style={styles.wrapperBtn}>
                <View style={styles.wrapperInput}>
                    <View style={styles.inpAndTitle}>
                        <Text style={styles.title}>Enter Code</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                gap: 16,
                            }}
                        >
                            {inpVal.map((item, index) => (
                                <TextInput
                                    key={index}
                                    ref={ref => inputs.current[index] = ref}
                                    style={styles.inp}
                                    placeholder='-'
                                    placeholderTextColor={'#BABABA'}
                                    maxLength={1}
                                    value={item}
                                    onChangeText={text => changeText(text, index)}
                                    onKeyPress={e => pressKey(e, index)}
                                    keyboardType="numeric"
                                />))}
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnCreateAcount}>
                    <Text style={styles.buttonText}>Create acount</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignContent: 'flex-start', width: '90%' }}>
                <Text>Didn’t see your email? </Text>
                <Link href={'/forgotPassword'}>
                    <Text style={{ color: '#1443C3', textDecorationLine: 'underline' }}>Resend</Text>
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

    verificationTest: {
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        fontWeight: 400,
    },

    wrapperInput: {
        gap: 25,
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