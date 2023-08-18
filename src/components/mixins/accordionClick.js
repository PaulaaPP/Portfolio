// code for bpanel slider 

export default {
  methods: {
    handleAccordionClick(event) {
      const accordionPanel = event.target.closest(".accordion-panel");
      if (accordionPanel) {
        console.log("Accordion panel clicked:", accordionPanel);
        this.toggleAccordion(accordionPanel);
      }
    },
    toggleAccordion(panelToActivate) {
      const buttons =
        panelToActivate.parentElement.querySelectorAll(".accordion-trigger");
      console.log(buttons);

      buttons.forEach(button => {
        button.setAttribute("aria-expanded", "false"); // this close accordion
      });
      panelToActivate // this open accordion
        .querySelector("button")
        .setAttribute("aria-expanded", "true");
    },
  },
};
