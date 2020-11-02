import React, {FormEvent} from 'react';

function hasWhiteSpace(s: string) {
  return /\s/g.test(s);
}

function App() {
  const [emailAddress, setEmailAddress] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  function onSubmit(formEvent: FormEvent) {
    formEvent.preventDefault()
    if(emailAddress === null) {
      setError('Email cant be empty')
    } else if(hasWhiteSpace(emailAddress)) {
      setError('Email has white space')
    }
  }

  return (
    <form noValidate className="App" onSubmit={onSubmit}>
      <label htmlFor='emailId'>Email</label>
      {error && <p style={{color: "red"}}>{error}</p>}
      {!error && <p style={{color: "green"}}>No email errors</p>}
      <input
        id='emailId'
        type='email'
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          console.log(e.target.value)
          setEmailAddress(e.target.value);
          setError(null);
        }}
      />
      <button>Enter email</button>
    </form>
  );
}

export default App;
