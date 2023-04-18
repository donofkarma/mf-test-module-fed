import React, { FC, useState, useEffect } from 'react';

const Content: FC = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsShowing(true), 2000);
  }, []);
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'palegreen',
      }}
    >
      <h2
        style={{
          marginTop: 0,
        }}
      >
        Remote 1: Content
      </h2>
      <p>This is the content from remote 1.</p>

      {isShowing && <p>Additional content to render only in the client 👍🏽</p>}
    </div>
  );
};

export default Content;
