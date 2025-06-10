import React from 'react';

function Header() {
  return (
    <header style={{ 
      textAlign: 'center', 
      marginBottom: '2rem',
      padding: '1rem',
      borderBottom: '2px solid #646cff'
    }}>
      <h1 style={{ 
        color: '#646cff', 
        fontSize: '3rem',
        margin: 0
      }}>
        Mini-Blog
      </h1>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ 
      textAlign: 'center',
      marginTop: '2rem',
      padding: '1rem',
      borderTop: '1px solid #ddd',
      color: '#888'
    }}>
      <p>&copy; {new Date().getFullYear()} Mini-Blog. Все права защищены.</p>
    </footer>
  );
}

function Article({ title, text }) {
  return (
    <article style={{
      margin: '1rem 0',
      padding: '1.5rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#333',
        marginBottom: '1rem',
        fontSize: '1.5rem'
      }}>
        {title}
      </h2>
      <p style={{ 
        lineHeight: '1.6',
        color: '#666',
        margin: 0
      }}>
        {text}
      </p>
    </article>
  );
}

function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "Введение в React",
      text: "React — это JavaScript библиотека для создания пользовательских интерфейсов. Она была разработана Facebook и позволяет создавать интерактивные веб-приложения с помощью компонентного подхода."
    },
    {
      id: 2,
      title: "Что такое JSX?",
      text: "JSX — это синтаксическое расширение JavaScript, которое позволяет писать HTML-подобный код прямо в JavaScript файлах. Это делает код более читаемым и понятным для разработчиков."
    },
    {
      id: 3,
      title: "Компоненты в React",
      text: "Компоненты — это основные строительные блоки React приложений. Они позволяют разбить пользовательский интерфейс на независимые, переиспользуемые части, что упрощает разработку и поддержку кода."
    },
    {
      id: 4,
      title: "Props и State",
      text: "Props позволяют передавать данные от родительского компонента к дочернему. State используется для хранения данных, которые могут изменяться со временем и влиять на отображение компонента."
    }
  ];

  return (
    <div style={{ 
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {articles.map(article => (
        <Article 
          key={article.id}
          title={article.title} 
          text={article.text} 
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      color: '#333'
    }}>
      <Header />
      <main style={{ 
        padding: '0 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}

export default App;