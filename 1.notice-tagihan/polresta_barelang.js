(function () {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div id="expired-notice"
      style="transform: translateX(-50%); position: fixed; z-index: 10000; max-width: 1300px; width: 100%; margin: 0 30px; left: 50%; bottom: 20px; background-color: #050421; padding: 20px; border-radius: 6px; box-shadow: 0px 5px 30px rgba(5, 4, 33, 0.3); display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; margin-right: 10px;">
        <img style="height: 26px; margin-left: 10px; margin-right: 25px; margin-bottom: 2px"
          src="https://fadeintech.com/assets/fade_in_tech2.png" alt="">
        <div style="color: #FFFFFF; font-size: 14px;">
          <b style="padding-right: 5px;">
            Website Akan Expired pada tanggal 8 Juli <span id="expired-year"></span>
          </b>
          <span style="opacity: 0.75">Silakan contact untuk memperpanjang</span>
        </div>
      </div>
      <div style="display: flex; align-items: center;">
        <a href="https://wa.me/6281234567890" target="_blank"
          style="text-decoration: none !important; background-color: #00AB4E; color: #ffffff; font-weight: bold; text-transform: uppercase; padding: 10px 16px 9px 16px; border-radius: 6px; margin-right: 12px;">
          WhatsApp - Kevin : 081541277051 </a>
        <a href="#" style="padding: 6px;" id="kt_metronic_8_engage_dismiss">
          <img style="height: 26px" src="https://preview.keenthemes.com/assets/kt_close_icon.svg" alt="">
        </a>
      </div>
    </div>
  `;

  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(wrapper);
    document.getElementById('expired-year').textContent = new Date().getFullYear();

    document.getElementById('kt_metronic_8_engage_dismiss').addEventListener('click', function (e) {
      e.preventDefault();
      const notice = document.getElementById('expired-notice');
      if (notice) notice.remove();
    });
  });
})();
