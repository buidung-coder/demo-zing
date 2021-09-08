const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const subtabs = $$(".subtab-item");
const subPanes = $$ (".subtab-pane")

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");
const subtabActive = $(".subtab-item.active");
const subline = $(".subtabs .line");


tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});


subtabs.forEach((subtab, index) => {
    const subpane = subPanes[index];
  
    subtab.onclick = function () {
      $(".subtab-item.active").classList.remove("active");
      $(".subtab-pane.active").classList.remove("active");
  
      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";
  
      this.classList.add("active");
      subpane.classList.add("active");
    };
  });

  