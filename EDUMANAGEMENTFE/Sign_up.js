import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Sign_up = () => {
  const [email, setEmail] = useState('');
  const [ho, setHo] = useState('');
  const [ten, setTen] = useState('');
  const [ngaySinh, setNgaySinh] = useState('');
  const [diaChi, setDiaChi] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [xacNhanMatKhau, setXacNhanMatKhau] = useState('');

  const xuLyDangKy = () => {
    // Xử lý logic đăng ký ở đây
    console.log('Đăng ký', email, ho, ten, ngaySinh, diaChi, matKhau, xacNhanMatKhau);
  };

  const xuLyChuyenSangDangNhap = () => {
    // Chuyển sang màn hình đăng ký
    console.log('Chuyển sang màn hình Đăng ký');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titleSign}>Chào mừng đến với app</Text>

      <TextInput
        style={styles.inputSign}
        placeholder="Gmail"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.inputSign}
        placeholder="Họ"
        value={ho}
        onChangeText={setHo}
      />
      <TextInput
        style={styles.inputSign}
        placeholder="Tên"
        value={ten}
        onChangeText={setTen}
      />
      
      <TextInput
        style={styles.inputSign}
        placeholder="Ngày sinh"
        value={ngaySinh}
        onChangeText={setNgaySinh}
      />
      <TextInput
        style={styles.inputSign}
        placeholder="Địa chỉ"
        value={diaChi}
        onChangeText={setDiaChi}
      />
      <TextInput
        style={styles.inputSign}
        placeholder="Mật khẩu"
        secureTextEntry
        value={matKhau}
        onChangeText={setMatKhau}
      />
      <TextInput
        style={styles.inputSign}
        placeholder="Xác nhận mật khẩu"
        secureTextEntry
        value={xacNhanMatKhau}
        onChangeText={setXacNhanMatKhau}
      />
      <TouchableOpacity onPress={xuLyDangKy} style={styles.btnSign}>
        <Text style={styles.BtnSignText}>Đăng ký</Text>
      </TouchableOpacity>
      <Text style={styles.textBottom}>
      You already have acount?{' '}
        <Text onPress={xuLyChuyenSangDangNhap} style={styles.textBottomBold}>
          Sign_in
        </Text>
      </Text>
    </ScrollView>
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
    textAlign: 'center'
  },

  inputSign: {
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
    textAlign: 'center',

  },

  textBottomBold: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  }
});

export default Sign_up;