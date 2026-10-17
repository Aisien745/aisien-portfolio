import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Папка, где лежат все твои контентные файлы
const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getMarkdownContent(folder: string, filename: string) {
  // Формируем полный путь к файлу (например: content/cases/tesla-vs-byd.md)
  const filePath = path.join(CONTENT_DIR, folder, `${filename}.md`);
  
  try {
    // Читаем файл как строку
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // gray-matter отделяет метаданные (между ---) от основного текста
    const { data, content } = matter(fileContents);
    
    return {
      metadata: data, // Здесь будет title, summary и т.д.
      content,        // Здесь будет сам текст (## Frameworks...)
    };
  } catch (error) {
    // Если файла нет, возвращаем null
    return null;
  }
}