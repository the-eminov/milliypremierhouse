document.addEventListener('DOMContentLoaded', function() {
  // Получаем текущий адрес (например, site.com/что-то-там)
  const currentPath = window.location.pathname;
  
  // Если это не корень сайта и не существующая страница, делаем редирект на 404
  // Список ваших реальных страниц:
  const validPages = ['/', '/index.html', '/about.html', '/projects.html', '/contacts.html', '/404.html'];
  
  // Проверяем, является ли текущая страница разрешённой
  const isValid = validPages.some(page => {
    // Если путь заканчивается на слэш, добавляем index.html автоматически (для красоты)
    if (page === '/' && currentPath === '/') return true;
    return currentPath === page;
  });

  // Если страница не в списке разрешённых, и это не сама 404, делаем редирект
  if (!isValid && !currentPath.includes('/404.html')) {
    // Полностью перезаписываем историю и перенаправляем
    window.location.replace('/404.html');
  }
});