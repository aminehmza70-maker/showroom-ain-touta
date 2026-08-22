function toggleMenu() {

  const nav = document.getElementById("nav");

  nav.classList.toggle("active");

}


function selectCar(carName) {

  const select =
    document.getElementById("car");

  select.value = carName;

  document
    .getElementById("order")
    .scrollIntoView({
      behavior: "smooth"
    });

}


document
  .getElementById("customerForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
      document.getElementById("name").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const wilaya =
      document.getElementById("wilaya").value;

    const address =
      document.getElementById("address").value.trim();

    const car =
      document.getElementById("car").value;

    const message =
      document.getElementById("message").value.trim();


    if (!name || !phone || !wilaya || !car) {

      alert("من فضلك أكمل المعلومات المطلوبة.");

      return;

    }


    const text = `

🚘 طلب جديد من موقع SHOWROOM AIN TOUTA

👤 الاسم:
${name}

📞 رقم الهاتف:
${phone}

📍 الولاية:
${wilaya}

🏠 العنوان:
${address || "لم يذكر"}

🚘 السيارة المطلوبة:
${car}

💬 الرسالة:
${message || "لا توجد رسالة"}

----------------------

SHOWROOM AIN TOUTA
📞 0671366813

`;


    const whatsappURL =
      "https://wa.me/213671366813?text=" +
      encodeURIComponent(text);


    window.open(
      whatsappURL,
      "_blank"
    );

  });
