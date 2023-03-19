import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import SearchList from './components/SearchList'

//主頁面
function App() {

  //輸入文字的state
  const [inputText, setInputText] = useState('')

  //tab的state
  const [tab, setTab] = useState('squarish')

  //存放全部資料的photo object的state
  const [photos, setPhotos] = useState([
    // { photoUrl: xxxx, id: 1 },
  ])

  return (
    <div className="App">
      <div className='container'>

        <header>
          Ryan's Photo Search
        </header>

      </div>

      {/* 傳參數及值給Form.jsx，這樣Form.jxs才能對該參數進行使用 */}
      <Form
        inputText={inputText}
        setInputText={setInputText}
        photos={photos}
        setPhotos={setPhotos}
        tab={tab}
        setTab={setTab}
      />

      {/* 傳參數及值給SearchList.jsx，這樣SearchList.jsx才能對該參數進行使用 */}
      <SearchList
        photos={photos}
      />

    </div>
  )
}

//輸出給別人使用
export default App