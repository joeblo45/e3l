//Accordion
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion-header");
    const accordionButton = item.querySelector(".accordion-button");
    const accordionContent = item.querySelector(".accordion-content");

    accordionHeader.addEventListener("click", () => {
      const isExpanded =
        accordionButton.getAttribute("aria-expanded") === "true";

      accordionItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector(".accordion-button");
        const otherContent = otherItem.querySelector(".accordion-content");
        if (otherButton !== accordionButton) {
          otherButton.setAttribute("aria-expanded", false);
          otherContent.classList.remove("accordion-content--expanded");
          otherContent.setAttribute("aria-hidden", true);
        }
      });
      accordionButton.setAttribute("aria-expanded", !isExpanded);
      accordionContent.classList.toggle("accordion-content--expanded");

      if (isExpanded) {
        accordionContent.removeAttribute("aria-hidden");
      } else {
        accordionContent.setAttribute("aria-hidden", true);
      }
    });
  });
});

//CTA Forms
// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     phone: document.getElementById("phone").value,
//     insect: document.getElementById("insect").value,
//   };

//   const serviceID = "service_e3l";
//   const templateID = "template_f2l42zh";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("phone").value = "";
//       document.getElementById("insect").value = "";
//       console.log(res);
//       alert("Votre demande a été envoyé avec succes!");
//     })
//     .catch((err) => console.log(err));
// }

function sendMail() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var insect = document.getElementById("insect").value;

  if (name == "" || phone == "" || insect == "") {
    alert("ERREUR: Veuillez remplir les champs requis");
    return false;
  }

  var params = {
    name: name,
    phone: phone,
    insect: insect,
  };

  const serviceID = "service_e3l";
  const templateID = "template_f2l42zh";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("insect").value = "";
      console.log(res);
      alert("Votre demande a été envoyé avec succes!");
    })
    .catch((err) => console.log(err));
}
