<?php
    require_once 'includes/koneksi.php';

    $nim = $_POST['nim'];
    $nama = $_POST['nama'];
    $password = $_POST['password'];

    $sql = "INSERT INTO akun(nim,nama,password) VALUES
    ('$nim', '$nama', '$password')";

    if($koneksi->query($sql)===true){
        echo "Akun berhasil ditambahkan";
    } else {
        echo "Terjadi kesalahan " .$sql. "<br/>" .$koneksi->error;
    }

    $koneksi->close();

?>