/* eslint-disable */
function captcha(options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }
  cb = typeof cb === 'function' ? cb : () => { };
  const product = options.product || 'popup';
  const appendTo = product === 'popup' ? undefined : (options.appendTo || 'cyCaptchaId');
  const width = options.width || (product === 'popup' ? '80%' : '100%');
  if (product === 'popup') {
    initSMCaptcha({
      organization: '5nrBlWuSpEgUAlm1yASu',
      product,
      width,
      debug: true,
      https: (/^https/).test(window.location.protocol),
      appendTo,
    }, cb);
  }
}

export default captcha;
