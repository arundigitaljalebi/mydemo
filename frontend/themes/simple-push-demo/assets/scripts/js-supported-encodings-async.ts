import {logger} from '@gauntface/logger';

logger.setPrefix('simple-push-demo');


const encodingElement = document.querySelector('.js-supported-encodings');
if (!encodingElement) {
  logger.error('Failed to find the supported encodings element.');
  return;
}

const encodings = PushManager.supportedContentEncodings || ['aesgcm'];
encodingElement.textContent = JSON.stringify(encodings, null, 2);
if (window.Prism) {
  window.Prism.highlightElement(this.encodingElement);
}