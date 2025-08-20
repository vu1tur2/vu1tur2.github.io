// 필수 입력란의 답안을 작성하지 않았을때 폼이 보내지는것을 막는 스크립트 
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.partner-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const requiredFields = ['company', 'name', 'phone', 'email'];

    requiredFields.forEach(function (fieldId) {
      const input = document.getElementById(fieldId);
      const errorSpan = input?.nextElementSibling;

      if (!input.value.trim()) {
        if (errorSpan) errorSpan.textContent = '필수 입력란입니다';
        isValid = false;
      } else {
        if (errorSpan) errorSpan.textContent = '';
      }
    });

    if (isValid) {
      form.submit();
    }
  });
});