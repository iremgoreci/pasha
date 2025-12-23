let cart = JSON.parse(localStorage.getItem('pashaCart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCart();
    
    if (!document.querySelector('.cart-sidebar')) {
        createCartHTML();
    }
});

function createCartHTML() {
    const cartHTML = `
    <div class="cart-modal-overlay" onclick="toggleCart()"></div>
    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h2>Sepetim</h2>
            <span class="close-cart" onclick="toggleCart()">&times;</span>
        </div>
        <div class="cart-items" id="cartItems">
            <!-- Urunler buraya gelecek -->
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Toplam:</span>
                <span id="cartTotal">0 TL</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Siparişi Tamamla</button>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', cartHTML);
}

function addToCart(productName, price, imageSrc) {
    const product = {
        name: productName,
        price: price,
        image: imageSrc
    };
    
    cart.push(product);
    saveCart();
    updateCartCount();
    renderCart();
    
    alert(productName + " sepete eklendi!");
    
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCart();
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.querySelector('.cart-modal-overlay');
    
    if (forceOpen || !sidebar.classList.contains('active')) {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
    } else {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
    }
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Sepetinizde ürün bulunmamaktadır.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${item.price} TL</div>
                    </div>
                    <div class="cart-item-remove" onclick="removeFromCart(${index})">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            `;
        });
    }
    
    if (cartTotalElement) {
        cartTotalElement.innerText = total + ' TL';
    }
}

function updateCartCount() {
    const badges = document.querySelectorAll('#cart-count');
    badges.forEach(badge => {
        badge.innerText = cart.length;
    });
}

function saveCart() {
    localStorage.setItem('pashaCart', JSON.stringify(cart));
}

function checkout() {
    if (cart.length === 0) {
        alert("Sepetiniz boş!");
        return;
    }
    alert("Siparişiniz alındı! Teşekkür ederiz.");
    cart = [];
    saveCart();
    updateCartCount();
    renderCart();
    toggleCart();
}

function mesajGonder() {
    var isimVal = document.getElementById("isim").value;
    var epostaVal = document.getElementById("eposta").value;
    var konuVal = document.getElementById("konu").value;
    var mesajVal = document.getElementById("mesaj").value;

    if(isimVal == "" || epostaVal == "" || konuVal == "" || mesajVal == "") {
        alert("Lutfen tum bilgileri eksiksiz giriniz");
    }
    else {
        alert("Mesajiniz iletildi. Tesekkurler!")
    }
}

function resmiAc(resim) {
    var modal = document.getElementById("resimModal");
    var buyukresim = document.getElementById("buyukResim");
    modal.style.display = "block";
    buyukresim.src = resim.src;
}

function resmiKapat() {
    document.getElementById("resimModal").style.display = "none";
}
