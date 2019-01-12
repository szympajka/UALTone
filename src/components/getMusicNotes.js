import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState({
    ongoing: false,
    data: null,
  });

  const getNotes = () => {
    setState({
      ongoing: true,
    });
  };

  const fetchNotes = async () => {
    const url = encodeURIComponent('https://devapi.imglish.com/upload/8105401547296781gn1ku6xi7etmr1020740001.jpg');
    const responce = await fetch(`http://127.0.0.1:9999?url=${url}`);
    const data = await responce.json();

    setState({ data, ongoing: false });
  };

  if (state.ongoing) {
    fetchNotes();
  }

  if (state.data) {
    console.log(state.data);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
    }}
    >
      <button
        type="button"
        style={{
          background: '#2127f3',
          display: 'inline-block',
          padding: '12px 18px',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 'bold',
        }}
        onClick={getNotes}
      >
        {state.ongoing ? 'Fetching...' : 'Get Notes'}
      </button>
    </div>
  );
};
