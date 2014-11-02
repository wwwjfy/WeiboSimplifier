if (window.top === window) {
  setTimeout(function () {
      var main_wrapper = document.body.querySelector(".WB_main");
      var left_column = document.body.querySelector(".WB_main_l");
      var right_column = document.body.querySelector(".WB_main_r");
      var ad_bar = document.body.querySelector("#v6_pl_content_biztips");

      if (left_column) left_column.remove();
      if (right_column) right_column.remove();
      if (ad_bar) ad_bar.remove();

      main_wrapper.style.background = "white";
      // var main_a = document.body.querySelector(".W_main_a");
        // if (main_a) main_a.style.width = "100%";
      document.body.querySelector(".WB_frame").style.backgroundColor = "white";
      document.body.querySelector(".WB_main_c").style.width = "100%";
      document.body.querySelector("#plc_main").style.width = "100%";
  }, 1000);
}
