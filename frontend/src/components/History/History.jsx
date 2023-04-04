import React from "react";
import "./History.css";

function History() {
  return (
    <div className="history-container">
      <h1 className="subtitle2">The Story of Nobel</h1>
      <div className="history-card">
        <img
          className="alfred-nobel"
          src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/12/AlfredNobel_adjusted-762x1024.jpg"
          alt="alfred"
          width="70%"
          height="auto"
        />
        <p className="history-text">
          Alfred Nobel (1833-1896) was born in Stockholm, Sweden, on 21 October
          1833. His family was descended from Olof Rudbeck, the best-known
          technical genius in Sweden in the 17th century, an era in which Sweden
          was a great power in northern Europe. Nobel was fluent in several
          languages, and wrote poetry and drama. Nobel was also very interested
          in social and peace-related issues, and held views that were
          considered radical during his time. Alfred Nobel’s interests are
          reflected in the prize he established. Learn more about his life and
          his interests (science, inventions, entrepreneurship, literature and
          peace work.)
        </p>
      </div>
    </div>
  );
}

export default History;
