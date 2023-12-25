import './App.css'

const App = () =>  {

  return (
    <div className={'initial-message__container'}>
      <p className={'initial-message__p'}>
          This project was created for the live coding sessions for the Uploadcare interview process.
          The problem you can find{' '}
          <a className={'initial-message__link'} href="https://excalidraw.com/#json=-e-nyTdhBkpmfG5ws1BUA,zVLzpw0fbIIBQMpKACmGZQ"
                                   target={'_blank'} rel="noreferrer">
          here</a>.
      </p>
    </div>
  )

}

export default App
