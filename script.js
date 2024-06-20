function register() {
    // Formdaki email ve şifre alanlarını seç
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    // Email ve şifre alanlarının boş olup olmadığını kontrol et
    if (email === '' || password === '') {
        alert('Please enter your email address and password.');
        return false; // Formun submit olayını engelle
    }

    // Oluşturulacak JSON verisi
    var userData = {
        email: email,
        password: password
    };

    // JSON verisini stringe çevirerek ekrana yazdır
    alert(JSON.stringify(userData));

    // Formu temizle
    document.getElementById('exampleInputEmail1').value = '';
    document.getElementById('exampleInputPassword1').value = '';

    // Listeye yeni kullanıcı bilgilerini ekle
    var userList = document.getElementById('userList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('Email: ' + email + ', Şifre: ' + password));
    userList.appendChild(li);

    return false; // Formun submit olayını engelle
}

// Form submit olduğunda register fonksiyonunu çağır
document.querySelector('form').addEventListener('submit', register);
