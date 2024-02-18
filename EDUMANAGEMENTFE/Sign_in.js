import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Sign_in = () => {
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [matKhau, setMatKhau] = useState('');

  const xuLyDangNhap = () => {
    // Xử lý logic đăng nhập ở đây
    console.log('Đăng nhập', tenDangNhap, matKhau);
  };

  const xuLyChuyenSangDangKy = () => {
    // Chuyển sang màn hình đăng ký
    console.log('Chuyển sang màn hình Đăng ký');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleSign}>Welcome To E-Leaning</Text>
      <TextInput
        style={styles.inputInfo}
        placeholder="Tên đăng nhập hoặc gmail"
        value={tenDangNhap}
        onChangeText={setTenDangNhap}
      />
      <TextInput
        style={styles.inputInfo}
        placeholder="Mật khẩu"
        secureTextEntry
        value={matKhau}
        onChangeText={setMatKhau}
      />
      <TouchableOpacity onPress={xuLyDangNhap} style={styles.btnSign}>
        <Text style={styles.btnSign}>Đăng nhập</Text>
      </TouchableOpacity>
      <Text style={styles.textBottom}>
        Chưa có tài khoản?{' '}
        <Text onPress={xuLyChuyenSangDangKy} style={styles.textBottomBold}>
          Đăng ký
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
 
  },

  titleSign: {
    fontSize: 28,
    marginBottom: 32,
    color: '#0000ff',
    fontWeight: 'bold',
    marginBottom: 40,
  },

  inputInfo: {
    height: 40,
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
  },

  btnSign: {
    backgroundColor: 'gold',
    padding: 10,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
  },

  BtnSignText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },

  textBottom: {
    color: 'blue',
    marginTop: 8,
    },

  textBottomBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    },
});

export default Sign_in;
