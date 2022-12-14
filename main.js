var selectedElementId = "";

//https://developer.samsung.com/signage/develop/guides/user-interaction/remote-control.html
function handleKeydown(event) {
  console.log("handleKeydown", event);
  switch (event.keyCode) {
    case 37: // ArrowLeft
      handleArrowLeft();
      break;

    case 38: // ArrowUp
      handleArrowUp();
      break;

    case 39: // ArrowRight
      handleArrowRight();
      break;

    case 40: // ArrowDown
      handleArrowDown();
      break;

    case 13: // Enter
      handleEnter();
      break;

    case 10009:
      closeAllAds();
  }
}

function closeAllAds() {
  hopprtv.cmd.push(() => {
    hopprtv.ads.closeVideo("hoppr_ad_unit_4");
    hopprtv.ads.closeVideo("hoppr_ad_unit_5");
    hopprtv.ads.closeVideo("hoppr_ad_unit_6");
  });
}

function handleEnter() {
  console.log("handleEnter");
  switch (selectedElementId) {
    case "tab_1_button":
      goToTab(1);
      break;
    case "tab_2_button":
      goToTab(2);
      break;
    case "tab_3_button":
      goToTab(3);
      break;
    case "hoppr_ad_unit_3_interactive_container":
      clickAd("hoppr_ad_unit_3");
      break;
    case "tab_4_button":
      goToTab(4);
      break;
    case "load_video_ad_1_button":
      fireClickEvent("load_video_ad_1_button");
      break;
    case "play_video_ad_1_button":
      fireClickEvent("play_video_ad_1_button");
      break;
    case "load_and_play_video_ad_2_button":
      fireClickEvent("load_and_play_video_ad_2_button");
      break;
    case "load_video_ad_3_button":
      fireClickEvent("load_video_ad_3_button");
      break;
    case "hoppr_ad_unit_4_interactive_container":
      break;
  }
}

function fireClickEvent(id) {
  var elem = document.getElementById(id);
  if (typeof elem.onclick == "function") {
    elem.onclick.apply(elem);
  }
}

function clickAd(adUnitCode) {
  hopprtv.cmd.push(() => {
    hopprtv.ads.click(adUnitCode);
  });
}

function handleArrowLeft() {
  console.log("handleArrowLeft");
  switch (selectedElementId) {
    case "tab_1_button":
      select("tab_4_button");
      break;
    case "tab_2_button":
      select("tab_1_button");
      break;
    case "tab_3_button":
      select("tab_2_button");
      break;
    case "tab_4_button":
      select("tab_3_button");
      break;
    case "play_video_ad_1_button":
      select("load_video_ad_1_button");
      break;
    case "load_and_play_video_ad_2_button":
      select("play_video_ad_1_button");
      break;
  }
}

function handleArrowDown() {
  console.log("handleArrowDown");
  switch (selectedElementId) {
    case "tab_1_button":
      select("hoppr_ad_unit_3_interactive_container");
      select("load_video_ad_1_button");
      select("load_video_ad_3_button");
      break;
    case "tab_2_button":
      select("hoppr_ad_unit_3_interactive_container");
      select("load_video_ad_1_button");
      select("load_video_ad_3_button");
      break;
    case "tab_3_button":
      select("hoppr_ad_unit_3_interactive_container");
      select("load_video_ad_1_button");
      select("load_video_ad_3_button");
      break;
    case "tab_4_button":
      select("hoppr_ad_unit_3_interactive_container");
      select("load_video_ad_1_button");
      select("load_video_ad_3_button");
      break;
    case "hoppr_ad_unit_3_interactive_container":
      select("hoppr_ad_unit_4_interactive_container");
      break;
    case "hoppr_ad_unit_4_interactive_container":
      select("interactive_r0_c0");
      break;
    case "interactive_r0_c0":
      select("interactive_r1_c0");
      break;
  }
}

function handleArrowUp() {
  console.log("handleArrowDown");
  switch (selectedElementId) {
    case "tab_2_button":
      select("interactive_r1_c0");
      break;
    case "hoppr_ad_unit_3_interactive_container":
      select("tab_2_button");
      break;
    case "hoppr_ad_unit_4_interactive_container":
      select("hoppr_ad_unit_3_interactive_container");
      break;
    case "interactive_r0_c0":
      select("hoppr_ad_unit_4_interactive_container");
      break;
    case "interactive_r1_c0":
      select("interactive_r0_c0");
      break;
    case "load_video_ad_1_button":
      select("tab_1_button");
      break;
    case "play_video_ad_1_button":
      select("tab_1_button");
      break;
    case "load_and_play_video_ad_2_button":
      select("tab_1_button");
      break;
    case "load_video_ad_3_button":
      select("tab_1_button");
      break;
  }
}

function handleArrowRight() {
  console.log("handleArrowRight");
  switch (selectedElementId) {
    case "tab_1_button":
      select("tab_2_button");
      break;
    case "tab_2_button":
      select("tab_3_button");
      break;
    case "tab_3_button":
      select("tab_4_button");
      break;
    case "tab_4_button":
      select("tab_1_button");
      break;
    case "load_video_ad_1_button":
      select("play_video_ad_1_button");
      break;
    case "play_video_ad_1_button":
      select("load_and_play_video_ad_2_button");
      break;
  }
}

function select(elementId) {
  console.log("select", elementId);
  const selectedElement = document.getElementById(elementId);

  if (selectedElement) {
    document.querySelectorAll(".selected").forEach(function (node) {
      node.classList.remove("selected");
    });

    selectedElement.classList.add("selected");
    selectedElementId = elementId;
  }
}

function goToTab(tabNumber) {
  switch (tabNumber) {
    case 1:
      window.location.href = "tab1.html";
      break;
    case 2:
      window.location.href = "tab2.html";
      break;
    case 3:
      window.location.href = "tab3.html";
      break;
    case 4:
      window.location.href = "tab4.html";
      break;
  }
}

function onBodyLoad(page) {
  switch (page) {
    case "tab1":
      select("tab_1_button");
      break;
    case "tab2":
      select("tab_2_button");
      break;
    case "tab3":
      select("tab_3_button");
      break;
    case "tab4":
      select("tab_4_button");
      break;
  }
}
