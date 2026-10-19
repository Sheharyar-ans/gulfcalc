/**
 * GulfCalc (gulfcalc.tech) — Core Calculator Kernel & UI Helpers
 * Strict Vanilla ES6+, Zero External Dependencies, 100% Client-Side.
 */

// Currency Precision Map
const CURRENCY_DECIMALS = {
  KWD: 3,
  BHD: 3,
  OMR: 3,
  AED: 2,
  SAR: 2,
  QAR: 2,
  USD: 2
};

/**
 * Format a numeric value with commas and appropriate decimal places.
 */
function formatCurrency(value, currency = 'AED', customDecimals = null) {
  if (isNaN(value) || value === null) value = 0;
  const decimals = customDecimals !== null ? customDecimals : (CURRENCY_DECIMALS[currency] || 2);
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

/**
 * Synchronize a range slider and numeric input field bidirectionally.
 */
function bindDualInput(sliderId, inputId, onUpdateCallback) {
  const slider = document.getElementById(sliderId);
  const input = document.getElementById(inputId);

  if (!slider || !input) return;

  // Slider -> Input
  slider.addEventListener('input', (e) => {
    input.value = e.target.value;
    if (typeof onUpdateCallback === 'function') onUpdateCallback();
  });

  // Input -> Slider
  input.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      slider.value = val;
    }
    if (typeof onUpdateCallback === 'function') onUpdateCallback();
  });
}

/**
 * Copy text summary to user clipboard with accessible animated feedback.
 */
function copyBreakdownText(textToCopy, buttonElement) {
  if (!navigator.clipboard) {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showCopiedFeedback(buttonElement);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textarea);
    return;
  }

  navigator.clipboard.writeText(textToCopy).then(() => {
    showCopiedFeedback(buttonElement);
  }).catch((err) => {
    console.error('Clipboard copy failed:', err);
  });
}

function showCopiedFeedback(btn) {
  if (!btn) return;
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>Copied!</span>
  `;
  btn.style.backgroundColor = 'var(--emerald-600)';
  btn.style.borderColor = 'var(--emerald-600)';
  btn.style.color = '#ffffff';

  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.backgroundColor = '';
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 2200);
}

/**
 * Trigger clean native print dialog.
 */
function triggerPrint() {
  window.print();
}
